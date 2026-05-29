<?php

namespace App\Http\Controllers\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\NoticeSave;
use App\Models\Notice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class NoticeController extends Controller
{
    public function fetch(Request $request)
    {
        return response([
            'data' => Notice::orderBy('id', 'DESC')->get()
        ]);
    }

    public function save(NoticeSave $request)
    {
        $data = $request->only([
            'title',
            'content',
            'img_url',
            'tags'
        ]);
        if (!$request->input('id')) {
            if (!Notice::create($data)) {
                abort(500, 'Lưu thất bại');
            }
        } else {
            try {
                Notice::find($request->input('id'))->update($data);
            } catch (\Exception $e) {
                abort(500, 'Lưu thất bại');
            }
        }
        return response([
            'data' => true
        ]);
    }



    public function show(Request $request)
    {
        if (empty($request->input('id'))) {
            abort(500, 'tham số không hợp lệ');
        }
        $notice = Notice::find($request->input('id'));
        if (!$notice) {
            abort(500, 'Thông báo không tồn tại');
        }
        $notice->show = $notice->show ? 0 : 1;
        if (!$notice->save()) {
            abort(500, 'Lưu thất bại');
        }

        return response([
            'data' => true
        ]);
    }

    public function drop(Request $request)
    {
        if (empty($request->input('id'))) {
            abort(500, 'tham số lỗi');
        }
        $notice = Notice::find($request->input('id'));
        if (!$notice) {
            abort(500, 'Thông báo không tồn tại');
        }
        if (!$notice->delete()) {
            abort(500, 'Xóa thất bại');
        }
        return response([
            'data' => true
        ]);
    }
}
