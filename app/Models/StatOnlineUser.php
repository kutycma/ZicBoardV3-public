<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StatOnlineUser extends Model
{
    protected $table = 'v2_stat_online_user';
    protected $dateFormat = 'U';
    protected $guarded = ['id'];
    protected $casts = [
        'created_at' => 'timestamp',
        'updated_at' => 'timestamp'
    ];
}
