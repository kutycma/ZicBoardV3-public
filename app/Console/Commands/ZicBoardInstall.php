<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Encryption\Encrypter;
use App\Models\User;
use App\Utils\Helper;
use Illuminate\Support\Facades\DB;

class ZicBoardInstall extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'zicboard:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Cài đặt ZicBoard';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        try {
            $this->info('ZicBoard installer');
            if (\File::exists(base_path() . '/.env')) {
                $securePath = config('zicboard.secure_path', config('zicboard.frontend_admin_path', hash('crc32b', config('app.key'))));
                $this->info("Truy cập http(s)://ten-mien-cua-ban/{$securePath} để vào trang quản trị. Bạn có thể đổi mật khẩu trong trung tâm người dùng.");
                abort(500, 'Nếu cần cài lại, hãy xóa file .env trong thư mục dự án');
            }

            if (!copy(base_path() . '/.env.example', base_path() . '/.env')) {
                abort(500, 'Sao chép file môi trường thất bại, vui lòng kiểm tra quyền thư mục');
            }
            $this->saveToEnv([
                'APP_KEY' => 'base64:' . base64_encode(Encrypter::generateKey('AES-256-CBC')),
                'DB_HOST' => $this->ask('Nhập địa chỉ database (mặc định: localhost)', 'localhost'),
                'DB_DATABASE' => $this->ask('Nhập tên database'),
                'DB_USERNAME' => $this->ask('Nhập user database'),
                'DB_PASSWORD' => $this->ask('Nhập mật khẩu database')
            ]);
            \Artisan::call('config:clear');
            \Artisan::call('config:cache');
            try {
                DB::connection()->getPdo();
            } catch (\Exception $e) {
                abort(500, 'Kết nối database thất bại');
            }
            $file = \File::get(base_path() . '/database/install.sql');
            if (!$file) {
                abort(500, 'File database không tồn tại');
            }
            $sql = str_replace("\n", "", $file);
            $sql = preg_split("/;/", $sql);
            if (!is_array($sql)) {
                abort(500, 'File database không đúng định dạng');
            }
            $this->info('Đang import database, vui lòng chờ...');
            foreach ($sql as $item) {
                try {
                    DB::select(DB::raw($item));
                } catch (\Exception $e) {
                }
            }
            $this->info('Import database hoàn tất');
            $email = '';
            while (!$email) {
                $email = $this->ask('Nhập email quản trị viên?');
            }
            $password = Helper::guid(false);
            if (!$this->registerAdmin($email, $password)) {
                abort(500, 'Tạo tài khoản quản trị thất bại, vui lòng thử lại');
            }

            $this->info('Hoàn tất');
            $this->info("Email quản trị: {$email}");
            $this->info("Mật khẩu quản trị: {$password}");

            $defaultSecurePath = hash('crc32b', config('app.key'));
            $this->info("Truy cập http(s)://ten-mien-cua-ban/{$defaultSecurePath} để vào trang quản trị. Bạn có thể đổi mật khẩu trong trung tâm người dùng.");
        } catch (\Exception $e) {
            $this->error($e->getMessage());
        }
    }

    private function registerAdmin($email, $password)
    {
        $user = new User();
        $user->email = $email;
        if (strlen($password) < 8) {
            abort(500, 'Mật khẩu quản trị tối thiểu 8 ký tự');
        }
        $user->password = password_hash($password, PASSWORD_DEFAULT);
        $user->uuid = Helper::guid(true);
        $user->token = Helper::guid();
        $user->is_admin = 1;
        return $user->save();
    }

    private function saveToEnv($data = [])
    {
        function set_env_var($key, $value)
        {
            if (! is_bool(strpos($value, ' '))) {
                $value = '"' . $value . '"';
            }
            $key = strtoupper($key);

            $envPath = app()->environmentFilePath();
            $contents = file_get_contents($envPath);

            preg_match("/^{$key}=[^\r\n]*/m", $contents, $matches);

            $oldValue = count($matches) ? $matches[0] : '';

            if ($oldValue) {
                $contents = str_replace("{$oldValue}", "{$key}={$value}", $contents);
            } else {
                $contents = $contents . "\n{$key}={$value}\n";
            }

            $file = fopen($envPath, 'w');
            fwrite($file, $contents);
            return fclose($file);
        }
        foreach($data as $key => $value) {
            set_env_var($key, $value);
        }
        return true;
    }
}
