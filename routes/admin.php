<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController\AccountManagementController;
use App\Http\Controllers\AdminController\WebsiteSettingsController;
use Inertia\Inertia;



Route::middleware('auth')->group(function () {});
Route::get('/Admin', [AccountManagementController::class, 'app'])->name('account.management.app');
Route::get('/Admin/AccountManagement', [AccountManagementController::class, 'index'])->name('account.management.index');
Route::get('/Admin/AccountManagement/New', [AccountManagementController::class, 'form'])->name('account.management.form');
Route::get('/Admin/Settings/Website', [WebsiteSettingsController::class, 'settings'])->name('account.management.settings');
Route::post('/Admin/Settings/Color/Update', [WebsiteSettingsController::class, 'updateSettings'])->name('account.management.updateSettings');




Route::post('/Admin/AccountManagement/create', [AccountManagementController::class, 'create'])->name('account.management.create');
Route::delete('/Admin/AccountManagement/Delete/{id}', [AccountManagementController::class, 'delete'])->name('account.management.delete');

Route::get('/Admin/Login', function () {
    return Inertia::render('Auth/Admin/Login');
})->name('admin.homes');
