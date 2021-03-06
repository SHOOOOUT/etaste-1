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

Route::get('/', function () {
    return view('welcome');
});

// Route::resource('stores', 'StoresController');

// Route::get('/stores', 'StoresController@index');
// Route::get('/store/{id}', 'StoresController@show');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
