# Hotfix: expired_at = 0 after v2b-zic migrate

## Problem

Some v2b-zic databases use `expired_at = 0` to mean unlimited subscription duration. ZicBoardV3 treats unlimited duration as `NULL`, so migrated users with `expired_at = 0` can receive an empty subscribe response.

## Customer action

Customers using the normal updater only need to run:

```bash
bash update.sh
```

Customers who do not use `update.sh` should run:

```bash
php artisan zicboard:update --force-sql
```

## What the hotfix does

The updater converts legacy unlimited expiry values to `NULL` in both tables:

```sql
UPDATE v2_user_subscription SET expired_at = NULL WHERE expired_at = 0;
UPDATE v2_user SET expired_at = NULL WHERE expired_at = 0;
```

The repair is idempotent and does not change users with a future `expired_at` timestamp or an existing `NULL` value.
