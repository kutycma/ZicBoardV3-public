<?php

namespace App\Services\Core;

use RuntimeException;
use Throwable;

class CoreRpcException extends RuntimeException
{
    public const SECRET_MISSING = 'core_rpc_secret_missing';
    public const SECRET_INVALID = 'core_rpc_secret_invalid';
    public const SECRET_MISMATCH = 'core_rpc_secret_mismatch';
    public const URL_NOT_LOCAL = 'core_rpc_url_not_local';
    public const UNREACHABLE = 'core_rpc_unreachable';
    public const UNAUTHORIZED = 'core_rpc_unauthorized';
    public const LICENSE_INACTIVE = 'core_license_inactive';
    public const ERROR = 'core_rpc_error';

    private string $coreCode;

    public function __construct(string $coreCode, string $message, Throwable $previous = null)
    {
        $this->coreCode = $coreCode;
        parent::__construct($coreCode . ': ' . $message, 0, $previous);
    }

    public function getCoreCode(): string
    {
        return $this->coreCode;
    }
}
