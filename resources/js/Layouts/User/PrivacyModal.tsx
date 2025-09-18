import React, { useEffect, useState } from 'react';

interface PTIExsodalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PTIExsodal: React.FC<PTIExsodalProps> = ({ isOpen, onClose }) => {
    const [canClose, setCanClose] = useState(false);
    const [contentScrolled, setContentScrolled] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setCanClose(false);
            setContentScrolled(false);
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleContentScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;

        if (isAtBottom) {
            setCanClose(true);
        }

        if (scrollTop > 50 && !contentScrolled) {
            setContentScrolled(true);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="bg-opacity-70 fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-md">
            <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg bg-white shadow-xl">
                {/* Header */}
                <div className="relative bg-primary p-4 text-center text-white md:p-3">
                    <h2 className="text-xl font-bold md:text-lg">Announcement</h2>
                    {canClose && (
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-white hover:text-gray-200 md:top-2 md:right-2"
                            aria-label="Close"
                        >
                            <i className="fas fa-times text-base md:text-xs"></i>
                        </button>
                    )}
                </div>

                {/* Introduction */}
                <div className="p-5">
                    <div className="mb-3 text-center md:mb-2">
                        <p className="text-base font-semibold text-black">
                            Mabuhay! Welcome to <span className="text-primary">PTIES</span>!
                        </p>
                    </div>
                    <p className="mb-3 text-center text-sm text-gray-700 lg:text-start">
                        The <span className="font-semibold text-primary">Pakil Tourism Information and Engagement System (PTIES)</span> is your
                        official companion in exploring the beauty, culture, and traditions of{' '}
                        <span className="font-semibold text-primary">Pakil, Laguna</span>.
                    </p>
                    <p className="mb-2 text-sm font-medium text-gray-800">With PTIES, you can:</p>
                </div>

                {/* Scrollable Content */}
                <div className="mx-4 flex-1 overflow-y-auto border border-primary/10 p-5 md:mx-5" onScroll={handleContentScroll}>
                    {/* Features */}
                    <ul className="mb-6 space-y-4 text-sm text-gray-700 md:mb-4 lg:text-base">
                        <li className="flex flex-col space-y-1 md:flex-row md:items-start md:space-y-0 md:space-x-3">
                            <i className="fas fa-globe-americas mt-2 text-sm text-primary"></i>
                            <div>
                                <p className="font-semibold text-gray-900">Tourist Information</p>
                                <p className="text-gray-700">
                                    Get reliable and up-to-date information about tourist spots, events, and attractions around Pakil.
                                </p>
                            </div>
                        </li>

                        <li className="flex flex-col space-y-1 md:flex-row md:items-start md:space-y-0 md:space-x-3">
                            <i className="fas fa-shopping-cart mt-2 text-sm text-primary"></i>
                            <div>
                                <p className="font-semibold text-gray-900">Support Local Vendors</p>
                                <p className="text-gray-700">
                                    Explore and support local businesses through our marketplace, helping the community thrive.
                                </p>
                            </div>
                        </li>

                        <li className="flex flex-col space-y-1 md:flex-row md:items-start md:space-y-0 md:space-x-3">
                            <i className="fas fa-qrcode mt-2 text-sm text-primary"></i>
                            <div>
                                <p className="font-semibold text-gray-900">Pakil Points Rewards</p>
                                <p className="text-gray-700">
                                    Earn points by scanning official QR codes placed at tourist spots, which can be redeemed for rewards.
                                </p>
                            </div>
                        </li>

                        <li className="flex flex-col space-y-1 md:flex-row md:items-start md:space-y-0 md:space-x-3">
                            <i className="fas fa-map-marked-alt mt-2 text-sm text-primary"></i>
                            <div>
                                <p className="font-semibold text-gray-900">Maps & Emergency Hotlines</p>
                                <p className="text-gray-700">
                                    Access maps of terminals, tourist areas, and important emergency contacts for a safer travel experience.
                                </p>
                            </div>
                        </li>
                        <li className="flex flex-col space-y-1 md:flex-row md:items-start md:space-y-0 md:space-x-3">
                            <i className="fas fa-user-tie mt-2 text-sm text-primary"></i>
                            <div>
                                <p className="font-semibold text-gray-900">Trusted Tour Guides</p>
                                <p className="text-gray-700">
                                    Access information about certified and experienced tour guides to ensure safe, informative, and enjoyable travel
                                    experiences around Pakil.
                                </p>
                            </div>
                        </li>

                        <li className="flex flex-col space-y-1 md:flex-row md:items-start md:space-y-0 md:space-x-3">
                            <i className="fas fa-comments mt-2 text-sm text-primary"></i>
                            <div>
                                <p className="font-semibold text-gray-900">Social Wall</p>
                                <p className="text-gray-700">
                                    Post your experiences, share photos, and like other visitors’ posts to engage with the PTIES community.
                                </p>
                            </div>
                        </li>

                        <li className="flex flex-col space-y-1 md:flex-row md:items-start md:space-y-0 md:space-x-3">
                            <i className="fas fa-camera-retro mt-2 text-sm text-primary"></i>
                            <div>
                                <p className="font-semibold text-gray-900">Visual Travel Diary</p>
                                <p className="text-gray-700">
                                    Upload photos from your travels to create a personal diary or memory log within the app.
                                </p>
                            </div>
                        </li>

                        <li className="flex flex-col space-y-1 md:flex-row md:items-start md:space-y-0 md:space-x-3">
                            <i className="fas fa-route mt-2 text-sm text-primary"></i>
                            <div>
                                <p className="font-semibold text-gray-900">Itinerary Planning</p>
                                <p className="text-gray-700">
                                    Plan your travel route with suggested itineraries, travel times, and must-see attractions for efficient trips.
                                </p>
                            </div>
                        </li>

                        <li className="flex flex-col space-y-1 md:flex-row md:items-start md:space-y-0 md:space-x-3">
                            <i className="fas fa-building mt-2 text-sm text-primary"></i>
                            <div>
                                <p className="font-semibold text-gray-900">Tourism Department & Key Officials</p>
                                <p className="text-gray-700">
                                    Learn about the organizational structure of the Pakil Tourism Department, including key officials and their roles,
                                    to better understand local tourism governance and services.
                                </p>
                            </div>
                        </li>
                    </ul>

                    {/* Privacy & Data Protection */}
                    <div className="mb-6 rounded-lg bg-primary/5 p-4 md:mb-4 md:p-3">
                        <h3 className="mb-2 text-sm font-bold text-primary lg:text-base">Privacy & Data Protection</h3>
                        <p className="mb-3 text-gray-700 md:text-xs">
                            At PTIES, we respect your privacy and comply with the Data Privacy Act of 2012 (Republic Act No. 10173). Your personal
                            information is collected, stored, and used responsibly to provide a safe and rewarding experience.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700 lg:text-base">
                            <li className="flex items-start">
                                <i className="fas fa-check-circle mt-1 mr-2 text-accent"></i>
                                <span>We only collect necessary information for registration, rewards, and system functionalities.</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-lock mt-1 mr-2 text-accent"></i>
                                <span>Your data is protected with secure systems and strict access controls.</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-user-cog mt-1 mr-2 text-accent"></i>
                                <span>You can access, correct, or request deletion of your personal information anytime.</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-file-contract mt-1 mr-2 text-accent"></i>
                                <span>We only share information when legally required or with your explicit consent.</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-shield-alt mt-1 mr-2 text-accent"></i>
                                <span>Strict security measures are in place to prevent unauthorized access or misuse of data.</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-shield-alt mt-1 mr-2 text-accent"></i>
                                <span>Inactive accounts will be removed after 5 years, unverified ones after 6 months.</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-info-circle mt-1 mr-2 text-accent"></i>
                                <span>
                                    For concerns, contact our Data Protection Officer at{' '}
                                    <span className="font-medium text-primary">pties.devteam@gmail.com</span>.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Reminder */}
                    <div className="mb-6 rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-4 md:mb-4 md:p-3">
                        <p className="flex items-start text-xs text-yellow-800 md:text-sm">
                            <i className="fas fa-exclamation-triangle mt-0.5 mr-2"></i>
                            <span>Reminder: Only official QR codes from the Pakil Tourist Office will give valid Pakil Points and rewards.</span>
                        </p>
                    </div>

                    <p className="mb-6 text-xs text-gray-700 md:mb-4 md:text-sm">
                        <i className="fas fa-check-circle mr-2 text-accent"></i>
                        By continuing, you agree to our{' '}
                        <a href="" className="font-semibold text-primary">
                            Terms of Use
                        </a>{' '}
                        and{' '}
                        <a href="" className="font-semibold text-primary">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>

                {/* Fixed Footer */}
                <div className="flex justify-end border-t border-primary/20 bg-gray-50 p-4 md:p-3">
                    {canClose ? (
                        <button
                            onClick={onClose}
                            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/70 md:px-3 md:py-1.5"
                        >
                            I Understand
                        </button>
                    ) : (
                        <div className="flex items-center text-xs text-gray-500 md:text-sm">
                            <i className="fas fa-arrow-down mr-2"></i>
                            <span>Scroll to continue</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PTIExsodal;
