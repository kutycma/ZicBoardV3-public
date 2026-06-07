# Huong dan migrate v2b-zic sang ZicBoardV3

Muc tieu: cai ZicBoardV3 bang database moi, import database v2b-zic cu vao database do, sau do chay mot command rieng de chuyen schema/data sang cau truc ZicBoardV3. Command nay khong goi `zicboard:update`.

## Quy trinh chay

1. Backup database v2b-zic cu.

2. Cai ZicBoardV3 tren server moi nhu binh thuong.

3. Import dump database v2b-zic vao dung database ma ZicBoardV3 dang dung.

   Nen import bang phpMyAdmin/aaPanel hoac mysql CLI. Sau khi import, database co the dang o schema v2b-zic cu, day la binh thuong.

4. Chay kiem tra truoc:

   ```bash
   php artisan zicboard:migrate-v2b-zic --dry-run
   ```

   Neu lenh nay bao loi, sua theo muc "Loi thuong gap" ben duoi roi chay lai.

5. Chay migrate that:

   ```bash
   php artisan zicboard:migrate-v2b-zic
   ```

6. Clear cache va restart queue neu server dang chay queue:

   ```bash
   php artisan config:clear
   php artisan cache:clear
   php artisan horizon:terminate
   ```

## Command se lam gi

- Tao/sua `v2_staff` neu thieu cot webcon.
- Tao/sua cac schema runtime ZicBoardV3 neu dump cu ghi de schema moi: `v2_happ_subscribe_cache`, `v2_plan.allow_subscribe_url`, cac cot phi thanh toan trong `v2_payment`, cac cot order moi trong `v2_order`.
- Tao/sua `v2_user_subscription`.
- Tao subscription chinh cho user tu cac cot legacy trong `v2_user`: `plan_id`, `group_id`, traffic, `expired_at`, `token`, `uuid`.
- Chuan hoa `expired_at = 0` thanh `NULL` trong `v2_user` va `v2_user_subscription`, vi ZicBoardV3 dung `NULL` de bieu thi khong gioi han thoi han.
- Chuyen `name_sni` va `network_settings` tu `v2_user` sang `v2_user_subscription` neu dump cu co 2 cot nay.
- Them va gan `subscription_id` cho `v2_order`.
- Tao/sua `v2_user_device`, gan device vao subscription, chuan hoa device cu co `hwid_hash` thanh `bound` va `hwid_hash` rong thanh `NULL`.
- Tao/sua `v2_stat_user`, gan thong ke vao subscription.
- Bo sung schema Trojan node moi neu thieu `network`/`network_settings`, dat `network = tcp` cho node cu bi rong.
- Tao `v2_server_zicnode` va copy node tu `v2_server_v2node`.

Command co the chay lai nhieu lan. Cac dong da migrate roi se duoc bo qua.

## Loi thuong gap

### Thieu bang `v2_user`

Nguyen nhan: chua import dump v2b-zic vao database ZicBoardV3, hoac `.env` dang tro sai database.

Cach fix: kiem tra `DB_DATABASE` trong `.env`, import lai dump vao dung database, sau do chay lai command.

### Bang `v2_user` thieu cot

Nguyen nhan: database v2b-zic cu qua cu hoac export/import thieu schema.

Cach fix: update code v2b-zic cu len ban moi, chay update database ben v2b-zic neu can, export lai database roi import lai.

### Trung `token` hoac `uuid`

Command se dung lai vi link sub/license phu thuoc vao `token` va `uuid`.

Kiem tra:

```sql
SELECT token, COUNT(*) FROM v2_user GROUP BY token HAVING COUNT(*) > 1;
SELECT uuid, COUNT(*) FROM v2_user GROUP BY uuid HAVING COUNT(*) > 1;
```

Cach fix: sua cac gia tri trung thanh duy nhat, sau do chay lai command.

### Thieu `token` hoac `uuid`

Kiem tra:

```sql
SELECT id, email FROM v2_user WHERE token IS NULL OR token = '' OR uuid IS NULL OR uuid = '';
```

Cach fix: tao lai `token`/`uuid` duy nhat cho cac user do. Khong nen de rong.

### Trung device binding

Loi nay xay ra khi `v2_user_device` co nhieu dong cung `subscription_id` va `hwid_hash` khong rong. Command se tu doi `hwid_hash` rong thanh `NULL`, nen cac slot cho thiet bi khong bi tinh la trung.

Cach fix: xoa/gop cac dong trung. Neu khong can giu lich su thiet bi cu, co the truncate `v2_user_device` roi chay lai command.

### Trung thong ke `v2_stat_user`

Loi nay xay ra khi du lieu thong ke cu bi trung theo key moi: `server_rate`, `subscription_id`, `record_at`.

Cach fix tot nhat la gop du lieu trung. Neu khong can giu thong ke cu, co the chay:

```bash
php artisan zicboard:migrate-v2b-zic --skip-stats
```

### Link sub rong sau khi migrate

Nguyen nhan thuong gap: database v2b-zic cu dung `expired_at = 0` de bieu thi khong gioi han thoi han. ZicBoardV3 dung `NULL` cho truong hop nay, nen `expired_at = 0` se bi coi la het han.

Ban cap nhat moi se tu sua khi chay update binh thuong:

```bash
bash update.sh
```

Neu khong dung `update.sh`, chay:

```bash
php artisan zicboard:update --force-sql
```

Co the kiem tra sau update:

```sql
SELECT COUNT(*) FROM v2_user_subscription WHERE expired_at = 0;
SELECT COUNT(*) FROM v2_user WHERE expired_at = 0;
```

## Sau khi migrate

Kiem tra nhanh trong admin:

- User con goi dang dung khong.
- Link sub van ra dung.
- Order cu co `subscription_id` chua.
- Node v2node cu da xuat hien trong zicnode chua.
- Neu bat HWID, test dong bo Happ voi mot user that.
