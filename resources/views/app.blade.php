<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <style>
        [data-page] {}
    </style>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    {{-- @if (auth()->check())
        @routes
    @endif --}}
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/{$page['component']}.tsx"])
    @inertiaHead
    <meta name="csrf-token" content="{{ csrf_token() }}">

</head>

<body>
    @inertia
</body>

</html>
