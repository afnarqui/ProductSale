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
//  Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::resource('Category','CategoryController');
Route::resource('Person','PersonController');
Route::resource('Product','ProductController');
Route::resource('Persons','PersonsController');
<<<<<<< HEAD
=======
Route::post('Category', 'CategoryController@creat');
Route::get('Categorys', 'CategoryController@search');
Route::post('Categorys', 'CategoryController@actualizar');
Route::post('Categor', 'CategoryController@eliminar');
>>>>>>> feature

