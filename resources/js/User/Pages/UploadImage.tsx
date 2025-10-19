import { Head, useForm, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import FlashMessage from '@UserUtils/components/Ui/ErrorToast';
import { ChangeEvent, useRef, useState } from 'react';
import ReactCrop, { centerCrop, Crop, makeAspectCrop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type FormData = {
    caption: string;
    image: File | null;
};
type PageProps = {
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: {
        error?: string;
        [key: string]: string | undefined;
    };
};

const SocialWallUpload = () => {
    const { flash, errors } = usePage<PageProps>().props;
    const { banner } = usePage<{ banner: PageBannerProps }>().props;
    const title = 'Pakil Tourism | SocialWall';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [originalImageFile, setOriginalImageFile] = useState<File | null>(null);
    const [crop, setCrop] = useState<Crop>();
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCropped, setIsCropped] = useState(false);
    const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const form = useForm<FormData>({
        caption: '',
        image: null,
    });

    const handleCaptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= 200) {
            form.setData('caption', e.target.value);
        }
    };

    const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setError('');
        setIsCropped(false);
        setCroppedImageUrl(null);
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            if (file.size > 25 * 1024 * 1024) {
                setError('File size must be less than 25MB');
                return;
            }

            if (!file.type.startsWith('image/')) {
                setError('Please select an image file');
                return;
            }

            setOriginalImageFile(file);
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setSelectedImage(reader.result as string);
                const image = new Image();
                image.src = reader.result as string;
                image.onload = () => {
                    const { width, height } = image;
                    const aspect = 16 / 9;
                    const crop = centerCrop(
                        makeAspectCrop(
                            {
                                unit: '%',
                                width: 90,
                            },
                            aspect,
                            width,
                            height,
                        ),
                        width,
                        height,
                    );
                    setCrop(crop);
                };
            });
            reader.readAsDataURL(file);
        }
    };

    const getCroppedImg = async (): Promise<Blob | null> => {
        if (!imgRef.current || !completedCrop || !originalImageFile) {
            return null;
        }

        // Create a new image element to work with the original file
        const image = new Image();
        const imageUrl = URL.createObjectURL(originalImageFile);

        return new Promise((resolve) => {
            image.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                if (!ctx) {
                    resolve(null);
                    return;
                }

                // Calculate scale factors
                const scaleX = image.naturalWidth / imgRef.current!.width;
                const scaleY = image.naturalHeight / imgRef.current!.height;

                // Set canvas dimensions to match the crop area at original resolution
                canvas.width = completedCrop.width * scaleX;
                canvas.height = completedCrop.height * scaleY;

                // Draw the cropped portion of the original image at full resolution
                ctx.drawImage(
                    image,
                    completedCrop.x * scaleX,
                    completedCrop.y * scaleY,
                    completedCrop.width * scaleX,
                    completedCrop.height * scaleY,
                    0,
                    0,
                    completedCrop.width * scaleX,
                    completedCrop.height * scaleY,
                );

                // Convert canvas to blob with maximum quality
                canvas.toBlob(
                    (blob) => {
                        URL.revokeObjectURL(imageUrl);
                        resolve(blob);
                    },
                    originalImageFile.type || 'image/jpeg',
                    1.0, // Maximum quality
                );
            };

            image.src = imageUrl;
        });
    };

    const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
        const { width, height } = e.currentTarget;
        const aspect = 16 / 9;
        const newCrop = centerCrop(
            makeAspectCrop(
                {
                    unit: '%',
                    width: 100,
                },
                aspect,
                width,
                height,
            ),
            width,
            height,
        );
        setCrop(newCrop);
    };

    const handleSaveCrop = async () => {
        if (!completedCrop) {
            setError('Please adjust the crop area first');
            return;
        }

        try {
            const croppedImageBlob = await getCroppedImg();

            if (!croppedImageBlob) {
                setError('Failed to crop image');
                return;
            }

            // Create a new File object from the cropped blob with original file name
            const fileName = originalImageFile?.name || 'cropped-image';
            const fileExtension = originalImageFile?.type.split('/')[1] || 'jpg';
            const croppedFile = new File([croppedImageBlob], `${fileName}-cropped.${fileExtension}`, {
                type: originalImageFile?.type || 'image/jpeg',
            });

            // Update the form data with the cropped image
            form.setData('image', croppedFile);

            // Create a URL for the cropped image to display as preview
            const url = URL.createObjectURL(croppedImageBlob);
            setCroppedImageUrl(url);
            setIsCropped(true);

            setError('');
        } catch (error) {
            setError('Failed to save crop. Please try again.');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isCropped || !form.data.image) {
            setError('Please crop and save your image first');
            return;
        }

        if (form.data.caption.trim().length < 10) {
            setError('Caption must be at least 10 characters');
            return;
        }

        setIsSubmitting(true);
        setError('');

        form.post(`/socialwall/upload`, {
            forceFormData: true,
            onSuccess: () => {
                form.reset();
                setIsSubmitting(false);
                setSelectedImage(null);
                setCroppedImageUrl(null);
                setIsCropped(false);
                setCrop(undefined);
                setCompletedCrop(undefined);
                setOriginalImageFile(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            },
            onError: (errors) => {
                console.error(errors);
                setError('Upload failed. Please check your input and try again.');
                setIsSubmitting(false);
            },
            onFinish: () => {
                setIsSubmitting(false);
            },
        });
    };

    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>

            {banner ? (
                <Banner
                    title={banner?.title}
                    subtitle={banner?.subtitle}
                    desc={banner?.desc}
                    imageSrc={banner?.image ? `${banner.image}` : '/User/Images/church.jpg'}
                ></Banner>
            ) : (
                <div className="h-[15vh]"></div>
            )}
            {flash?.success && <FlashMessage type="success" message={flash.success} duration={3000} key={`success-${Date.now()}`} />}
            {errors?.error && <FlashMessage type="error" message={errors.error} key={`error-${Date.now()}`} duration={3000} />}
            {flash?.error && errors?.error !== flash.error && (
                <FlashMessage type="error" key={`flash-error-${Date.now()}`} message={flash.error} duration={3000} />
            )}
            <form onSubmit={handleSubmit}>
                <section className="py-6 md:py-12">
                    <div className="container mx-auto max-w-6xl px-3 md:px-4">
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg md:rounded-2xl md:shadow-xl">
                            <div className="md:flex">
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 md:w-2/5 md:p-8">
                                    <h2 className="mb-2 text-xl font-bold text-primary md:text-3xl">Share Your Pakil Experience</h2>
                                    <p className="mb-5 text-sm text-gray-600 md:mb-8 md:text-base">
                                        Upload your favorite moments from Pakil to be featured on our social wall
                                    </p>

                                    <div className="mb-4 md:mb-6">
                                        <label className="mb-2 block text-sm font-medium text-gray-700 md:text-base">
                                            <i className="fas fa-comment mr-2 text-primary"></i>
                                            Caption (200 characters max)
                                        </label>
                                        <textarea
                                            value={form.data.caption}
                                            onChange={handleCaptionChange}
                                            placeholder="Share your experience in Pakil..."
                                            className="w-full resize-none rounded-lg border border-gray-300 p-3 text-sm transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-primary md:rounded-xl md:p-4 md:text-base"
                                            rows={3}
                                            maxLength={200}
                                        />
                                        <div className="mt-1 flex items-center justify-between md:mt-2">
                                            <span className="text-xs text-gray-500">{form.data.caption.length}/200 characters</span>
                                            {form.data.caption.length > 0 && (
                                                <span className={`text-xs ${form.data.caption.length > 180 ? 'text-orange-500' : 'text-gray-500'}`}>
                                                    {200 - form.data.caption.length} remaining
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-5 md:mb-8">
                                        <label className="mb-2 block text-sm font-medium text-gray-700 md:text-base">
                                            <i className="fas fa-image mr-2 text-primary"></i>
                                            Upload Photo (Max 25MB)
                                        </label>
                                        <div
                                            className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 p-4 text-center transition-colors duration-200 hover:border-primary hover:bg-blue-50 md:rounded-2xl md:p-6"
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <i className="fas fa-cloud-upload-alt mb-2 text-3xl text-gray-400 md:mb-3 md:text-4xl"></i>
                                            <p className="mb-1 text-xs text-gray-600 md:mb-2 md:text-sm">Click to browse or drag and drop</p>
                                            <p className="text-xs text-gray-500">JPG, PNG, GIF, WEBP (Max 25MB)</p>
                                            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageSelect} className="hidden" />
                                        </div>
                                    </div>

                                    <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 md:mb-6 md:rounded-xl md:p-5">
                                        <h3 className="mb-2 flex items-center text-sm font-medium text-primary md:mb-3 md:text-base">
                                            <i className="fas fa-info-circle mr-2"></i>
                                            Upload Guidelines
                                        </h3>
                                        <ul className="space-y-1 text-xs text-gray-600 md:space-y-2 md:text-sm">
                                            <li className="flex items-start">
                                                <i className="fas fa-check-circle mt-0.5 mr-2 text-xs text-accent md:text-sm"></i>
                                                <span>Images must be appropriate and respectful</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fas fa-check-circle mt-0.5 mr-2 text-xs text-accent md:text-sm"></i>
                                                <span>No offensive, explicit, or copyrighted content</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fas fa-check-circle mt-0.5 mr-2 text-xs text-accent md:text-sm"></i>
                                                <span>Landscape orientation (16:9) works best</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fas fa-check-circle mt-0.5 mr-2 text-xs text-accent md:text-sm"></i>
                                                <span>Maximum file size: 25MB</span>
                                            </li>
                                            <li className="flex items-start">
                                                <i className="fas fa-check-circle mt-0.5 mr-2 text-xs text-accent md:text-sm"></i>
                                                <span>All submissions will be reviewed before publishing</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column - Preview and Crop */}
                                <div className="p-5 md:w-3/5 md:p-8">
                                    <h3 className="mb-4 flex items-center text-lg font-semibold text-gray-800 md:mb-6 md:text-xl">
                                        <i className="fas fa-crop-alt mr-2 text-primary"></i>
                                        Image Preview & Crop
                                    </h3>

                                    {selectedImage ? (
                                        <div className="space-y-4 md:space-y-6">
                                            {!isCropped ? (
                                                <>
                                                    <div className="rounded-lg bg-gray-100 p-4 md:rounded-xl md:p-5">
                                                        <p className="mb-2 text-sm font-medium text-gray-700 md:mb-3 md:text-base">
                                                            Crop Image (16:9 aspect ratio)
                                                        </p>
                                                        <div className="flex justify-center rounded-lg bg-gray-200 p-3 md:p-4">
                                                            <ReactCrop
                                                                crop={crop}
                                                                onChange={(_, percentCrop) => setCrop(percentCrop)}
                                                                onComplete={(c) => setCompletedCrop(c)}
                                                                aspect={16 / 9}
                                                                className="max-h-64 md:max-h-96"
                                                            >
                                                                <img
                                                                    ref={imgRef}
                                                                    alt="Crop preview"
                                                                    src={selectedImage}
                                                                    onLoad={onImageLoad}
                                                                    style={{ maxWidth: '100%', maxHeight: '300px' }}
                                                                />
                                                            </ReactCrop>
                                                        </div>
                                                        <p className="mt-2 text-center text-xs text-gray-500 md:mt-3 md:text-sm">
                                                            Adjust the crop area to focus on the best part of your image
                                                        </p>
                                                    </div>

                                                    <div className="flex justify-center">
                                                        <button
                                                            onClick={handleSaveCrop}
                                                            className="rounded-full border-1 border-green-800 bg-white px-5 py-2.5 text-xs font-medium text-green-800 transition duration-300 hover:bg-green-800 hover:text-white md:px-6 md:py-2.5 md:text-sm"
                                                        >
                                                            <i className="fas fa-save mr-2"></i>
                                                            Save Crop
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="rounded-lg bg-gray-100 p-4 md:rounded-xl md:p-5">
                                                    <p className="mb-2 text-sm font-medium text-gray-700 md:mb-3 md:text-base">Cropped Preview</p>
                                                    <div className="flex justify-center rounded-lg bg-gray-200 p-3 md:p-4">
                                                        <img
                                                            src={croppedImageUrl || ''}
                                                            alt="Cropped preview"
                                                            className="max-h-64 object-contain md:max-h-96"
                                                            style={{ maxWidth: '100%' }}
                                                        />
                                                    </div>
                                                    <p className="mt-2 text-center text-xs text-green-600 md:mt-3 md:text-sm">
                                                        <i className="fas fa-check-circle mr-1"></i>
                                                        Image cropped successfully! You can now submit your post.
                                                    </p>
                                                    <div className="mt-4 flex justify-center">
                                                        <button
                                                            onClick={() => setIsCropped(false)}
                                                            className="rounded-full border border-yellow-500 bg-yellow-500 px-4 py-2 text-xs font-medium text-white transition-colors duration-300 hover:bg-white hover:text-yellow-500 md:px-5 md:py-2.5 md:text-sm"
                                                        >
                                                            <i className="fas fa-edit mr-2"></i>
                                                            Edit Crop
                                                        </button>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 md:rounded-xl md:p-5">
                                                <h4 className="mb-1 flex items-center text-sm font-medium text-primary md:mb-2 md:text-base">
                                                    <i className="fas fa-clock mr-2"></i>
                                                    Review Process
                                                </h4>
                                                <p className="text-xs text-gray-600 md:text-sm">
                                                    Your submission will be reviewed before being published on our social wall. This process usually
                                                    takes 24-48 hours. You'll receive a notification once your post is live.
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center py-8 text-center md:py-16">
                                            <div className="w-full max-w-md rounded-xl bg-gray-100 p-5 md:rounded-2xl md:p-8">
                                                <i className="fas fa-image mb-3 text-4xl text-gray-300 md:mb-5 md:text-5xl"></i>
                                                <h3 className="mb-1 text-base font-medium text-gray-600 md:mb-2 md:text-lg">No Image Selected</h3>
                                                <p className="mb-3 text-xs md:mb-4 md:text-gray-500">
                                                    Upload an image to see the preview and cropping tools
                                                </p>
                                                <button
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-primary/90 md:px-5 md:py-2.5 md:text-base"
                                                >
                                                    Select Image
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    <div className="mt-6 border-t border-gray-200 pt-4 md:mt-8 md:pt-6">
                                        <button
                                            disabled={isSubmitting || !isCropped}
                                            className="flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-medium text-white transition duration-300 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 md:px-6 md:py-4 md:text-base"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                                    Submitting for Review...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fas fa-paper-plane mr-2"></i>
                                                    Submit for Review
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </>
    );
};

export default SocialWallUpload;
