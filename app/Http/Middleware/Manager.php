<?php

namespace App\Http\Middleware;

use App\Models\User;
use App\Services\AuthService;
use Closure;

class Manager
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
            abort(403, 'Manager session is invalid or expired');
        }

        $user = AuthService::decryptAuthData($authorization);
        if (!$user || empty($user['is_manager'])) {
            abort(403, 'Manager session is invalid or expired');
        }

        $managerExists = User::where('id', (int)($user['id'] ?? 0))
            ->where('is_manager', 1)
            ->exists();
        if (!$managerExists) {
            abort(403, 'Manager session is invalid or expired');
        }

        $request->merge([
            'user' => $user
        ]);

        return $next($request);
    }
}