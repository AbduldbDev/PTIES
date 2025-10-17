import { Html5QrcodeScanner } from 'html5-qrcode';
import React, { useEffect, useRef } from 'react';

interface QRScannerProps {
    onScanSuccess?: (result: string) => void;
    onScanError?: (error: string) => void;
    redirectTo?: string; // Path to redirect after successful scan
    redirectFunction?: (result: string) => void; // Custom redirect logic
}

const QRScanner: React.FC<QRScannerProps> = ({ onScanSuccess, onScanError, redirectTo, redirectFunction }) => {
    const scannerRef = useRef<Html5QrcodeScanner | null>(null);

    useEffect(() => {
        // Initialize scanner
        const scanner = new Html5QrcodeScanner(
            'qr-scanner-container',
            {
                qrbox: {
                    width: 250,
                    height: 250,
                },
                fps: 10,
                aspectRatio: 1.0,
                supportedScanTypes: [],
            },
            false,
        );

        scannerRef.current = scanner;

        const onSuccess = (decodedText: string) => {
            console.log('QR Code scanned:', decodedText);

            // Call the success callback if provided
            onScanSuccess?.(decodedText);

            // Handle redirection
            if (redirectFunction) {
                redirectFunction(decodedText);
            } else if (redirectTo) {
                window.location.href = redirectTo;
            } else {
                // Default behavior - redirect to scanned URL if it's a valid URL
                try {
                    new URL(decodedText);
                    window.location.href = decodedText;
                } catch {
                    // If not a valid URL, redirect to home
                    console.warn('Scanned content is not a valid URL:', decodedText);
                    window.location.href = '/';
                }
            }
        };

        const onFailure = (errorMessage: string) => {
            // Ignore not found errors as they're common during scanning
            if (!errorMessage.includes('No MultiFormat Readers')) {
                console.warn('QR scan error:', errorMessage);
                onScanError?.(errorMessage);
            }
        };

        // Start scanning automatically
        scanner.render(onSuccess, onFailure);

        // Cleanup function
        return () => {
            if (scannerRef.current) {
                scannerRef.current.clear().catch((err) => {
                    console.error('Failed to clear scanner on unmount:', err);
                });
            }
        };
    }, [onScanSuccess, onScanError, redirectTo, redirectFunction]);

    return (
        <section className="pt-28 pb-12 sm:pt-32 sm:pb-16">
            <div className="min-h-screen bg-gradient-to-br px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    {/* Header Section */}
                    <div className="mb-8 text-center">
                        <div className="mb-4 flex justify-center">
                            <div className="h-1 w-12 rounded-full bg-secondary"></div>
                        </div>
                        <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">QR Code Scanner</h1>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600">
                            Scan QR codes to access information about Pakil's heritage sites and attractions
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                        <div className="p-6 md:p-8">
                            {/* Scanner Container */}
                            <div className="mb-8">
                                <div
                                    id="qr-scanner-container"
                                    className="mx-auto w-full max-w-md overflow-hidden rounded-xl border-4 border-primary"
                                />
                            </div>

                            {/* Instructions Section */}
                            <div className="mb-6 rounded-xl bg-[#f2f4f8] p-6">
                                <h3 className="mb-4 flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-info-circle mr-3 text-secondary"></i>
                                    How to Use QR Scanner
                                </h3>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                                                1
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Position Your Camera</h4>
                                                <p className="mt-1 text-sm text-gray-600">
                                                    Hold your device steady and point the camera at the QR code
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                                                2
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Ensure Good Lighting</h4>
                                                <p className="mt-1 text-sm text-gray-600">Make sure the QR code is well-lit and clearly visible</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <div className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                                                3
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Align Properly</h4>
                                                <p className="mt-1 text-sm text-gray-600">
                                                    Keep the QR code within the scanner frame for best results
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                                                4
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">Wait for Scan</h4>
                                                <p className="mt-1 text-sm text-gray-600">
                                                    The scanner will automatically detect and process the QR code
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tips Section */}
                            <div className="rounded-xl border border-gray-200 bg-gradient-to-r from-primary/10 to-accent/10 p-6">
                                <h4 className="mb-3 flex items-center font-bold text-primary">
                                    <i className="fas fa-lightbulb mr-2 text-secondary"></i>
                                    Pro Tips for Better Scanning
                                </h4>
                                <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
                                    <div className="flex items-center">
                                        <i className="fas fa-sun mr-2 text-secondary"></i>
                                        <span className="text-gray-700">Avoid direct sunlight glare</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-hand-holding mr-2 text-secondary"></i>
                                        <span className="text-gray-700">Keep device steady while scanning</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-ruler-combined mr-2 text-secondary"></i>
                                        <span className="text-gray-700">Maintain 6-12 inches distance</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-expand mr-2 text-secondary"></i>
                                        <span className="text-gray-700">Ensure QR code fills the frame</span>
                                    </div>
                                </div>
                            </div>

                            {/* Status Message */}
                            <div className="mt-6 text-center">
                                <p className="flex items-center justify-center text-sm text-gray-500">
                                    <i className="fas fa-camera mr-2 text-primary"></i>
                                    Point your camera at a QR code to scan
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Support Section */}
                    <div className="mt-8 text-center">
                        <div className="inline-flex items-center space-x-2 text-gray-600">
                            <i className="fas fa-question-circle text-primary"></i>
                            <span>Need help? </span>
                            <a href="#" className="font-medium text-primary hover:text-[#083ec1]">
                                Contact Support
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QRScanner;
