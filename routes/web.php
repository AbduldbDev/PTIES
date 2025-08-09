<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/Admin', function () {
    return Inertia::render('Admin/Pages/App');
})->name('admin.home');


Route::get('/Admin/Test', function () {
    return Inertia::render('Admin/Pages/Test');
})->name('admin.homesss');

Route::get('/Admin/Login', function () {
    return Inertia::render('Auth/Admin/Login');
})->name('admin.homes');





Route::get('/', function () {
    return Inertia::render('User/Pages/App');
})->name('user.home');


Route::get('/testing', function () {
    return Inertia::render('User/Pages/tesing');
})->name('user.tesing');

Route::get('/CreateProduct', function () {
    return Inertia::render('User/Pages/CreateProduct');
})->name('user.home');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('User/Pages/about');
    })->name('dashboard');
});


require __DIR__ . '/auth.php';
