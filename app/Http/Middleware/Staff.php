<?php

namespace App\Http\Middleware;

use App\Models\Staff as StaffModel;
use App\Services\AuthService;
use Closure;
use Illuminate\Support\Facades\Schema;

class Staff
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $authorization = $request->input('auth_data') ?? $request->header('authorization');
        if (!$authorization) {
            abort(403, 'Chưa đăng nhập hoặc phiên đăng nhập đã hết hạn');
        }

        $user = AuthService::decryptAuthData($authorization);
        if (!$user || !$user['is_staff']) {
            abort(403, 'Chưa đăng nhập hoặc phiên đăng nhập đã hết hạn');
        }

        if (!Schema::hasTable('v2_staff') || !StaffModel::where('user_id', $user['id'])->where('status', 1)->exists()) {
            abort(403, 'Tài khoản nhân viên chưa được kích hoạt');
        }

        $request->merge([
            'user' => $user
        ]);

        return $next($request);
    }
}
