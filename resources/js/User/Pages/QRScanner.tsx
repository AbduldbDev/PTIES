import { useState, useRef, useEffect } from 'react';
import { QrReader } from 'react-qr-reader';

export default function QRCodeScanner() {
    const [data, setData] = useState<string>('No result');
    const [cameraError, setCameraError] = useState<string>('');
    const [cameraLoaded, setCameraLoaded] = useState(false);
    const [usingFrontCamera, setUsingFrontCamera] = useState(false);

    // Switch between front and back cameras
    const switchCamera = () => {
        setUsingFrontCamera(!usingFrontCamera);
        setCameraLoaded(false);
        setCameraError('');
    };

    // Test camera access on component mount
    useEffect(() => {
        // Test if camera access is possible
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                console.log('Camera access granted');
                stream.getTracks().forEach(track => track.stop());
            })
            .catch(error => {
                console.error('Camera access denied:', error);
                setCameraError(`Camera access denied: ${error.message}`);
            });
    }, []);

    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="mb-4 text-xl font-bold">QR Code Scanner</h2>
            
            {/* Camera Container */}
            <div className="relative bg-black rounded-lg overflow-hidden border-2 border-gray-300" 
                 style={{ width: '320px', height: '240px' }}>
                
                <QrReader
                    key={usingFrontCamera ? 'front' : 'back'} // Force re-render when camera changes
                    constraints={{ 
                        facingMode: usingFrontCamera ? 'user' : 'environment'
                    }}
                    scanDelay={500}
                    containerStyle={{
                        width: '100%',
                        height: '100%',
                        padding: '0'
                    }}
                    videoContainerStyle={{
                        width: '100%',
                        height: '100%',
                        padding: '0'
                    }}
                    videoStyle={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                    onResult={(result, error) => {
                        if (result) {
                            setData(result.getText());
                        }
                        if (error) {
                            // Normal scanning errors, don't show to user
                            console.info('Scanning:', error);
                        }
                    }}
                   
                />

                {/* Loading Overlay */}
                {!cameraLoaded && !cameraError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 text-white">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-2"></div>
                        <p>Loading camera...</p>
                    </div>
                )}

                {/* Error Overlay */}
                {cameraError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-100 text-red-700 p-4 text-center">
                        <div className="text-lg font-bold mb-2">⚠️ Camera Not Available</div>
                        <p className="text-sm mb-4">{cameraError}</p>
                        <button 
                            onClick={switchCamera}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Try {usingFrontCamera ? 'Back' : 'Front'} Camera
                        </button>
                    </div>
                )}

                {/* Scanner Frame Overlay */}
                {cameraLoaded && (
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-green-400 rounded-lg"></div>
                    </div>
                )}
            </div>

            {/* Camera Controls */}
            <div className="mt-4 flex gap-4">
                <button 
                    onClick={switchCamera}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Switch to {usingFrontCamera ? 'Back' : 'Front'} Camera
                </button>
                
                <button 
                    onClick={() => window.location.reload()}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Reload Page
                </button>
            </div>

            {/* Scan Result */}
            <div className="mt-4 p-3 bg-gray-100 rounded-lg w-full max-w-md">
                <p className="font-semibold mb-2">Scanned Result:</p>
                <p className="break-words bg-white p-2 rounded border min-h-8">{data}</p>
            </div>

            {/* Debug Info */}
            <div className="mt-4 text-xs text-gray-500 text-center space-y-1">
                <p>URL: {window.location.href}</p>
                <p>Protocol: {window.location.protocol}</p>
                <p>Camera: {usingFrontCamera ? 'Front' : 'Back'}</p>
                <p>Status: {cameraError ? 'Error' : cameraLoaded ? 'Ready' : 'Loading'}</p>
            </div>
        </div>
    );
}