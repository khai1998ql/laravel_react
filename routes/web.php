<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
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

// Route::get('/', function () {
//     return view('welcome');
// });
// Route::get('/products', function () {
//     return view('welcome');
// });
// Route::get('/product/add', function () {
//     return view('welcome');
// });
// Route::get('/product/edit/{id}', function () {
//     return view('welcome');
// });
// Route::get('/greeting', function () {
//     return 'Hello World';
// });
Route::prefix('api')->group(function () {
    Route::get('/products', [Controllers\ProductController::class, 'index'])->name('products.all');
    Route::post('/products/add', [Controllers\ProductController::class, 'store'])->name('products.store');
    Route::get('/product/{id}', [Controllers\ProductController::class, 'show'])->name('products.show');
    Route::put('/product/{id}', [Controllers\ProductController::class, 'update'])->name('products.update');
    Route::put('/product/status/{id}', [Controllers\ProductController::class, 'updateStatus'])->name('products.status.update');
    Route::delete('/product/delete/{id}', [Controllers\ProductController::class, 'delete'])->name('products.delete');

});
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');