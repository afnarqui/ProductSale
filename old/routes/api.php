<?php
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
Route::group([

    'middleware' => 'api'

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('refresh', 'AuthController@refresh');
    Route::resource('Product','ProductController');
    Route::resource('Category','CategoryController');
    Route::resource('Product','ProductController');
    Route::resource('ShoppingCar','ShoppingCarController');

});