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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('book/list', 'BookController@index');
Route::post('book', 'BookController@store');
Route::get('book/{id}/edit', 'BookController@edit');
Route::patch('book/{id}', 'BookController@update');
Route::delete('book/{id}/delete', 'BookController@destroy');
