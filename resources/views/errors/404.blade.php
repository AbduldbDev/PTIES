<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            scroll-behavior: smooth;
            background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
            overflow-x: hidden;
            min-height: 100vh;
        }
    </style>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#052675',
                        secondary: '#f59e0b',
                        accent: '#10b981',
                    }
                }
            }
        }
    </script>
</head>

<body class="">
    <div class="font-sans flex min-h-screen items-center justify-center px-6 py-12">
        <div class="mx-auto max-w-4xl text-center">
            <!-- Animated SVG Graphic -->
            <div class="mx-auto mb-8 max-w-xs md:max-w-sm">
                <div class="relative">
                    <!-- Main compass icon -->
                    <div class="w-48 h-48 mx-auto mb-6 relative">
                        <svg class="w-full h-full text-primary animate-pulse" viewBox="0 0 100 100" fill="currentColor">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor"
                                stroke-width="2" opacity="0.3" />
                            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor"
                                stroke-width="1" opacity="0.2" />
                            <path d="M50 10 L52 45 L50 50 L48 45 Z" fill="currentColor" />
                            <path d="M90 50 L55 52 L50 50 L55 48 Z" fill="currentColor" />
                            <path d="M50 90 L48 55 L50 50 L52 55 Z" fill="currentColor" />
                            <path d="M10 50 L45 48 L50 50 L45 52 Z" fill="currentColor" />
                            <circle cx="50" cy="50" r="8" fill="white" stroke="currentColor"
                                stroke-width="2" />
                            <circle cx="50" cy="50" r="4" fill="currentColor" />
                        </svg>

                        <!-- Animated searching dots -->
                        <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                            <div class="w-2 h-2 bg-accent rounded-full animate-bounce" style="animation-delay: 0.1s">
                            </div>
                            <div class="w-2 h-2 bg-accent rounded-full animate-bounce" style="animation-delay: 0.2s">
                            </div>
                            <div class="w-2 h-2 bg-accent rounded-full animate-bounce" style="animation-delay: 0.3s">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Error Title -->
            <h1 class="mb-4 text-5xl font-bold text-primary md:text-6xl">
                Lost in <span class="text-secondary">Pakil</span>?
            </h1>

            <!-- Description -->
            <p class="mx-auto mb-8 max-w-2xl text-base text-gray-600 md:text-xl lg:text-lg">
                <i class="fas fa-quote-left mr-2 text-secondary/50"></i>
                Even the best explorers sometimes take wrong turns. This page seems to be on a different trail.
                <i class="fas fa-quote-right ml-2 text-secondary/50"></i>
            </p>

            <!-- Quick Navigation Card -->
            <div
                class="mx-auto mb-8 max-w-md rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm border border-gray-100">
                <div class="mb-4 flex items-center justify-center">
                    <div class="mr-3 h-1 w-8 rounded-full bg-secondary"></div>
                    <h2 class="text-sm font-semibold tracking-wider text-primary uppercase">Quick Navigation</h2>
                    <div class="ml-3 h-1 w-8 rounded-full bg-secondary"></div>
                </div>

                <p class="mb-4 text-gray-600">Don't worry! Let us guide you back to amazing destinations in Pakil.</p>

                <!-- Mini navigation icons -->
                <div class="flex justify-center space-x-6 mt-4">
                    <div class="text-center">
                        <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                            <i class="fas fa-landmark text-primary text-sm"></i>
                        </div>
                        <span class="text-xs text-gray-500">Heritage</span>
                    </div>
                    <div class="text-center">
                        <div class="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                            <i class="fas fa-utensils text-accent text-sm"></i>
                        </div>
                        <span class="text-xs text-gray-500">Food</span>
                    </div>
                    <div class="text-center">
                        <div
                            class="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                            <i class="fas fa-mountain text-secondary text-sm"></i>
                        </div>
                        <span class="text-xs text-gray-500">Nature</span>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a href="/"
                    class="flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-[#083ec1] shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <i class="fas fa-home mr-3"></i> Back to Home
                </a>

                <button onclick="window.history.back()"
                    class="flex items-center justify-center rounded-full border-2 border-primary px-8 py-4 text-base font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-1">
                    <i class="fas fa-arrow-left mr-3"></i> Go Back
                </button>
            </div>

            <!-- Support Section -->
            <div class="border-t border-gray-200 pt-8">
                <p class="mb-3 text-base text-gray-600">Can't find what you need?</p>
                <a href="/contact"
                    class="group inline-flex items-center justify-center text-base font-semibold text-blue-600 transition-all duration-200 hover:text-blue-700">
                    Contact our support team
                    <svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>

            <!-- Footer -->
            <div class="mt-12 pt-6 border-t border-gray-200">
                <p class="text-sm text-gray-500">
                    &copy; {{ now()->year }} Pakil Tourism. Discover the beauty of our heritage.
                </p>
            </div>
        </div>
    </div>
</body>

</html>
