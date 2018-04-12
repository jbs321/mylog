<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/test', function (Request $request) {
    return  Storage::download('app/test.jpg');
});


Route::get( '/{any}', function () {
    return view('welcome');
})->where('any', '.*');