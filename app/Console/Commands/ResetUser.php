<?php

namespace App\Console\Commands;

use App\Models\Plan;
use App\Utils\Helper;
use Illuminate\Console\Command;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class ResetUser extends Command
{
    protected $builder;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reset:user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Đặt lại thông tin toàn bộ người dùng';

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
        if (!$this->confirm("Bạn chắc chắn muốn đặt lại thông tin bảo mật của toàn bộ người dùng?")) {
            return;
        }
        ini_set('memory_limit', -1);
        $users = User::all();
        foreach ($users as $user)
        {
            $user->token = Helper::guid();
            $user->uuid = Helper::guid(true);
            $user->save();
            $this->info("Đã đặt lại thông tin bảo mật của người dùng {$user->email} thông tin bảo mật");
        }
    }
}
