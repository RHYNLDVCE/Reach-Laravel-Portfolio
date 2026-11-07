<?php

use App\Http\Controllers\Api\PortfolioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/health', function () {
    return response()->json([
        'status' => 'online',
        'message' => 'Laravel backend is connected and running',
        'framework' => 'Laravel ' . app()->version(),
        'php' => PHP_VERSION,
        'timestamp' => now()->toIso8601String(),
    ]);
});

// Portfolio API Endpoints
Route::get('/portfolio', [PortfolioController::class, 'index']);
Route::get('/projects', [PortfolioController::class, 'projects']);
Route::post('/contact', [PortfolioController::class, 'submitContact']);
Route::get('/messages', [PortfolioController::class, 'messages']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

