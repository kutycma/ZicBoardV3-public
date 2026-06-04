<?php

namespace App\Http\Controllers\V1\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ServerController extends Controller
{
    public function fetch(Request $request)
    {
        $eTag = sha1('hwid-protected');
        if (strpos((string)$request->header('If-None-Match'), $eTag) !== false ) {
            abort(304);
        }

        return response([
            'data' => []
        ])->header('ETag', "\"{$eTag}\"");
    }
}
