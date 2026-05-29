<?php

namespace App\Http\Middleware;

use App\Services\AuthService;
use Closure;

class User
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
        if (!$authorization) abort(403, 'Chưa đăng nhập hoặc phiên đăng nhập đã hết hạn');

        $user = AuthService::decryptAuthData($authorization);
        if (!$user) abort(403, 'Chưa đăng nhập hoặc phiên đăng nhập đã hết hạn');
        $request->merge([
            'user' => $user
        ]);
        return $next($request);
    }
}
