import { usePage } from '@inertiajs/react';

export default function PrivacyPolicy() {
    const { auth } = usePage().props as {
        auth?: {
            user: {
                email: string;
                user_type: string;
                avatar?: string;
                pakil_points: number;
                profile: any;
            };
        };
    };

    return (
        <section className="terms-section min-h-screen pt-32 pb-20">
            <div className="terms-container container mx-auto px-4">
                {/* Header */}
                <div className="mb-12 text-center">
                    <div className="mb-4 inline-flex items-center">
                        <div className="mr-3 h-1 w-8 rounded-full bg-secondary" />
                        <h2 className="text-sm font-semibold tracking-wider text-primary uppercase">Legal</h2>
                        <div className="ml-3 h-1 w-8 rounded-full bg-secondary" />
                    </div>
                    <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">Privacy Policy</h1>
                    <p className="mx-auto max-w-4xl text-sm text-gray-600 md:text-xl lg:text-base">
                        Pakil Tourism Information and Engagement System (PTIES) - Effective Date: October 10, 2025
                    </p>
                    <div className="mt-4 flex flex-col items-center justify-center gap-4 text-xs text-gray-500 lg:text-sm">
                        <div className="flex items-center">
                            <i className="fas fa-shield-alt mr-2 text-primary" />
                            <span>Compliant with Data Privacy Act of 2012 (RA 10173)</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-file-contract mr-2 text-primary" />
                            <span>Last Updated: October 10, 2025</span>
                        </div>
                    </div>
                </div>

                {/* Privacy Policy Content */}
                <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8 lg:p-12">
                    {/* Introduction */}
                    <div className="mb-12">
                        <div className="mb-4 text-center">
                            <p className="text-base text-gray-700 md:text-lg">
                                The Pakil Tourism Information & Engagement System (PTIES) values your privacy and is committed to protecting your
                                personal information in compliance with the Data Privacy Act of 2012 (Republic Act No. 10173) of the Republic of the
                                Philippines.
                            </p>
                            <p className="mt-4 text-base text-gray-700 md:text-lg">
                                This Privacy Policy explains how we collect, use, store, and protect your information when you use our website and
                                services.
                            </p>
                        </div>
                    </div>

                    {/* Information We Collect */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                1
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Information We Collect</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>We collect the following information depending on how you use PTIES:</p>

                            <p className="font-semibold">a. Upon Registration:</p>
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>Full Name</li>
                                <li>Email address</li>
                                <li>Chosen username and password</li>
                            </ul>

                            <p className="font-semibold">b. During Verification:</p>
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>OTP or email verification data</li>
                                <li>Government-issued ID (required only when redeeming rewards)</li>
                            </ul>

                            <p className="font-semibold">c. When Using PTIES Features:</p>
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>Photos, captions, and other content you upload to the Social Wall</li>
                                <li>Activity data related to events, points earned, or rewards redeemed</li>
                                <li>Device and browser information (for security and analytics)</li>
                            </ul>
                        </div>
                    </div>

                    {/* How We Use Your Information */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                2
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">How We Use Your Information</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>Your personal information may be used to:</p>
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>Create and verify your account</li>
                                <li>Facilitate engagement and participation in PTIES activities</li>
                                <li>Process reward redemptions (including identity verification)</li>
                                <li>Display your name and submitted content on public modules like the Social Wall (if you choose to post)</li>
                                <li>Improve user experience, security, and system performance</li>
                                <li>Comply with legal and regulatory requirements</li>
                            </ul>
                        </div>
                    </div>

                    {/* Data Retention and Deletion */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                3
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Data Retention and Deletion</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>Unverified accounts will be automatically deleted after one (1) week.</li>
                                <li>Inactive accounts will be automatically deleted after five (5) years of inactivity.</li>
                                <li>Data related to rewards and transactions may be retained longer if required for auditing or legal compliance.</li>
                                <li>Users may request account deletion at any time by contacting the PTIES administrators.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Data Protection and Security */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                4
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Data Protection and Security</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                We implement appropriate organizational, physical, and technical measures to protect your personal data from
                                unauthorized access, alteration, disclosure, or destruction.
                            </p>
                            <p>These include:</p>
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>Secure servers and encrypted data transmission</li>
                                <li>Access controls and authentication</li>
                                <li>Regular system maintenance and monitoring</li>
                            </ul>
                        </div>
                    </div>

                    {/* Data Sharing and Disclosure */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                5
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Data Sharing and Disclosure</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>PTIES does not sell or share personal data with third parties.</p>
                            <p>However, your information may be shared with:</p>
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>Authorized PTIES administrators for verification and moderation</li>
                                <li>Government agencies if required by law or regulation</li>
                                <li>Reward partners or sponsors (only with your consent) for prize fulfillment or redemption verification</li>
                            </ul>
                            <p>Any shared data will be handled with the same level of protection required by the Data Privacy Act.</p>
                        </div>
                    </div>

                    {/* User Rights */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                6
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">User Rights</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>Under the Data Privacy Act of 2012, you have the right to:</p>
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>Access your personal data;</li>
                                <li>Correct or update inaccurate information;</li>
                                <li>Withdraw consent or request deletion of your account;</li>
                                <li>File a complaint with the National Privacy Commission if you believe your rights have been violated.</li>
                            </ul>
                            <p>Requests may be submitted through the PTIES contact channels.</p>
                        </div>
                    </div>

                    {/* Cookies and Analytics */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                7
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Cookies and Analytics</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                PTIES may use cookies and analytics tools to improve user experience and gather site traffic insights. Cookies do not
                                collect personal information and can be disabled in your browser settings if preferred.
                            </p>
                        </div>
                    </div>

                    {/* Updates to This Policy */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                8
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Updates to This Policy</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                This Privacy Policy may be updated periodically to reflect changes in system features or legal requirements. Any major
                                changes will be announced through the PTIES website or via registered email.
                            </p>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                9
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Contact Information</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>For privacy-related concerns, requests, or inquiries, please contact:</p>
                            <div className="mt-4 border-l-4 border-primary bg-blue-50 p-4">
                                <p className="font-semibold text-primary">Pakil Tourism Information & Engagement System (PTIES)</p>
                                <p className="mt-2">🏢 Municipal Tourism Office – Pakil, Laguna, Philippines</p>
                                <p className="mt-1">📧 ptiesteam@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Agreement Section */}
                    <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6">
                        <div className="text-center">
                            <h3 className="mb-4 text-lg font-bold text-primary md:text-xl">Acknowledgement</h3>
                            <p className="mb-6 text-sm text-gray-700 md:text-base">
                                By using the PTIES platform, you acknowledge that you have read and understood this Privacy Policy and consent to the
                                collection, use, and disclosure of your personal information as described herein.
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <a
                                    href="/"
                                    className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-primary/90 lg:text-base"
                                >
                                    <i className="fas fa-check mr-2" />I Understand
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
