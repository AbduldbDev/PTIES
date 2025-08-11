import { ChangeEvent, FC, useRef, useState } from 'react';

interface AvatarUploadProps {
    onChange: (file: File | null) => void;
    initialPreview?: string;
    className?: string;
}

const AvatarUpload: FC<AvatarUploadProps> = ({ onChange, initialPreview = '', className = '' }) => {
    const [preview, setPreview] = useState<string>(initialPreview);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;

        if (file) {
            // Validate image type
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file');
                return;
            }

            // Create preview
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);

            onChange(file);
        } else {
            onChange(null);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className={`flex flex-col items-center ${className}`}>
            <div className="relative h-32 w-32 cursor-pointer overflow-hidden rounded-full bg-gray-200" onClick={triggerFileInput}>
                {preview ? (
                    <img src={preview} alt="Profile preview" className="h-full w-full object-cover" />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-gray-400">
                        <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                )}
            </div>

            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

            <button type="button" onClick={triggerFileInput} className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                {preview ? 'Change Avatar' : 'Upload Avatar'}
            </button>
        </div>
    );
};

export default AvatarUpload;
