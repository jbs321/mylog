<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:api'])->group(function () {
    Route::post('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/userX', function (Request $request) {
        return new \Illuminate\Http\JsonResponse([1,2,3,4]);
    });

});



