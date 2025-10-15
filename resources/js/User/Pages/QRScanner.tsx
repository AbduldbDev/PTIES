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
        <div
            style={{
                padding: '20px',
                textAlign: 'center',
                maxWidth: '500px',
                margin: '0 auto',
            }}
        >
            <h2 style={{ marginBottom: '20px', color: '#333' }}>QR Code Scanner</h2>

            <div
                id="qr-scanner-container"
                style={{
                    width: '100%',
                    border: '3px solid #007bff',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    marginBottom: '15px',
                }}
            />

            <p
                style={{
                    color: '#6c757d',
                    marginTop: '15px',
                    fontSize: '14px',
                }}
            >
                Point your camera at a QR code to scan
            </p>
        </div>
    );
};

export default QRScanner;
