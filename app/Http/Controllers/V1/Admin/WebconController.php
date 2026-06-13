<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\WebconSave;
use App\Models\Staff;
use App\Models\User;
use App\Services\AuthService;
use Illuminate\Http\Request;

class WebconController extends Controller
{
    public function fetch(Request $request)
    {
        $staffs = Staff::with('user')->orderBy('id', 'DESC')->get();

        $staffs->transform(function ($staff) {
            $staff->email = $staff->user ? $staff->user->email : null;
            $staff->staff = $staff->user ? $staff->user->is_staff : 0;
            unset($staff->user);
            return $staff;
        });

        return response([
            'data' => $staffs
        ]);
    }

    public function save(WebconSave $request)
    {
        $data = $request->only([
            'email',
            'domain',
            'title',
            'description',
            'logo',
            'background_url',
            'custom_html'
        ]);

        $planIds = $request->input('plan_ids', $request->input('plan_id', []));
        if (is_string($planIds) && strlen($planIds) && $planIds[0] === '[') {
            $decodedPlanIds = json_decode($planIds, true);
            $planIds = is_array($decodedPlanIds) ? $decodedPlanIds : [];
        }
        $data['plan_id'] = array_values(array_map('intval', array_filter((array)$planIds, function ($id) {
            return $id !== '' && $id !== null;
        })));

        $user = User::where('email', $data['email'])->first();
        if (!$user) {
            abort(500, 'Email không tồn tại trong hệ thống');
        }

        $data['user_id'] = $user->id;
        unset($data['email']);
        $previousUserId = null;

        if (!$request->input('id')) {
            if (!Staff::create($data)) {
                abort(500, 'Lưu thất bại');
            }
        } else {
            $staff = Staff::find($request->input('id'));
            $previousUserId = $staff ? $staff->user_id : null;
            if (!$staff || !$staff->update($data)) {
                abort(500, 'Lưu thất bại');
            }
        }

        if (!(int)$user->is_staff) {
            $user->is_staff = 1;
            $user->save();
        }
        (new AuthService($user))->removeAllSession();
        if ($previousUserId && (int)$previousUserId !== (int)$user->id) {
            $previousUser = User::find($previousUserId);
            if ($previousUser) {
                (new AuthService($previousUser))->removeAllSession();
            }
        }

        return response([
            'data' => true
        ]);
    }

    public function update(WebconSave $request)
    {
        return $this->save($request);
    }

    public function show(Request $request)
    {
        if (empty($request->input('id'))) {
            abort(500, 'Tham số không hợp lệ');
        }

        $staff = Staff::find($request->input('id'));
        if (!$staff) {
            abort(500, 'Webcon không tồn tại');
        }

        $staff->status = $staff->status ? 0 : 1;
        if (!$staff->save()) {
            abort(500, 'Lưu thất bại');
        }

        if ($staff->user_id) {
            $user = User::find($staff->user_id);
            if ($user) {
                (new AuthService($user))->removeAllSession();
            }
        }
        return response([
            'data' => true
        ]);
    }

    public function drop(Request $request)
    {
        if (empty($request->input('id'))) {
            abort(500, 'Tham số không hợp lệ');
        }

        $staff = Staff::find($request->input('id'));
        if (!$staff) {
            abort(500, 'Webcon không tồn tại');
        }

        $userId = $staff->user_id;
        if (!$staff->delete()) {
            abort(500, 'Xóa thất bại');
        }

        if ($userId) {
            $user = User::find($userId);
            if ($user) {
                (new AuthService($user))->removeAllSession();
            }
        }
        return response([
            'data' => true
        ]);
    }
}
