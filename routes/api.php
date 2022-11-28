<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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


Route::post('start-session', [UserController::class, 'login'])->name('start-session');
Route::get('end-session', [UserController::class, 'logout'])->name('end-session');
Route::get('questions', QuestionController::class)->name('web-questions');
Route::post('contacts', ContactController::class)->name('web-contacts');


Route::group(['middleware' => 'auth:api'], function () {
    Route::post('register', [UserController::class, 'register'])->name('user-register');
    Route::get('download', [UserController::class, 'download'])->name('download-coupon');
});
