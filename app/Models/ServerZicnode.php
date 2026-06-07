<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;

class ServerZicnode extends Model
{
    private static $resolvedTable;

    protected $table = 'v2_server_zicnode';
    protected $dateFormat = 'U';
    protected $guarded = ['id'];
    protected $casts = [
        'created_at' => 'timestamp',
        'updated_at' => 'timestamp',
        'group_id' => 'array',
        'route_id' => 'array',
        'tags' => 'array',
        'tls_settings' => 'array',
        'network_settings' => 'array',
        'encryption_settings' => 'array',
        'padding_scheme' => 'array',
        'warp_settings' => 'array',
    ];

    public function getTable()
    {
        if (self::$resolvedTable) {
            return self::$resolvedTable;
        }

        try {
            if (!Schema::hasTable($this->table) && Schema::hasTable('v2_server_v2node')) {
                return self::$resolvedTable = 'v2_server_v2node';
            }
        } catch (\Throwable $e) {
        }

        return self::$resolvedTable = $this->table;
    }
}
