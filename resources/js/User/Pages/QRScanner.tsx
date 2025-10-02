import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export default function QRCodeScanner() {
    const [data, setData] = useState<string>('No result');

    return (
        <div className="flex flex-col items-center">
            <h2 className="mb-4 text-xl font-bold">QR Code Scanner</h2>
            <div style={{ width: '320px', height: '240px' }}>
                <QrReader
                    constraints={{ facingMode: 'environment' }}
                    onResult={(result, error) => {
                        if (result) {
                            setData(result.getText());
                        }
                        if (error) {
                            console.error(error);
                        }
                    }}
                />
            </div>
            <p>{data}</p>
        </div>
    );
}
