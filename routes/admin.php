<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController\AccountManagementController;
use App\Http\Controllers\AdminController\WebsiteSettingsController;
use App\Http\Controllers\Auth\AdminLoginController;
use Inertia\Inertia;




Route::middleware('admin.access:guest')->group(function () {
    Route::get('/Admin/Login', [AdminLoginController::class, 'showLoginForm'])->name('admin.homes');
    Route::post('/Admin/Login', [AdminLoginController::class, 'login'])->name('admin.login');
});

Route::middleware('admin.access:auth')->group(function () {
    Route::post('/Admin/Logout', [AdminLoginController::class, 'logout'])->name('admin.login');
    Route::get('/Admin', [AccountManagementController::class, 'app'])->name('account.management.app');
    Route::get('/Admin/AccountManagement', [AccountManagementController::class, 'index'])->name('account.management.index');
    Route::get('/Admin/AccountManagement/New', [AccountManagementController::class, 'form'])->name('account.management.form');
    Route::post('/Admin/AccountManagement/update', [AccountManagementController::class, 'update'])->name('account.management.update');
    Route::get('/Admin/AccountManagement/Edit/{id}', [AccountManagementController::class, 'edit'])->name('account.management.form');
    Route::get('/Admin/Settings/Website', [WebsiteSettingsController::class, 'settings'])->name('account.management.settings');
    Route::post('/Admin/Settings/Color/Update', [WebsiteSettingsController::class, 'updateSettings'])->name('account.management.updateSettings');
    Route::post('/Admin/AccountManagement/create', [AccountManagementController::class, 'create'])->name('account.management.create');
    Route::delete('/Admin/AccountManagement/Delete/{id}', [AccountManagementController::class, 'delete'])->name('account.management.delete');
});
