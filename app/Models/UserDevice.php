<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserDevice extends Model
{
    protected $table = 'v2_user_device';
    protected $dateFormat = 'U';
    protected $guarded = ['id'];
    protected $casts = [
        'u' => 'integer',
        'd' => 'integer',
        't' => 'integer',
        'created_at' => 'timestamp',
        'updated_at' => 'timestamp'
    ];

    public function subscription()
    {
        return $this->belongsTo(UserSubscription::class, 'subscription_id');
    }
}
