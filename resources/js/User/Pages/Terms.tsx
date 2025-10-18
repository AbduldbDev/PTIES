import { usePage } from '@inertiajs/react';

export default function GeneralTerms() {
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
                    <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">Terms and Conditions</h1>
                    <p className="mx-auto max-w-4xl text-sm text-gray-600 md:text-xl lg:text-base">
                        Pakil Tourism Information and Engagement System (PTIES)
                    </p>
                    <div className="mt-4 flex flex-col items-center justify-center gap-4 text-xs text-gray-500 lg:text-sm">
                        <div className="flex items-center">
                            <i className="fas fa-building mr-2 text-primary" />
                            <span>Governing Authority: Pakil Tourism Office, Municipality of Pakil, Laguna</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-file-contract mr-2 text-primary" />
                            <span>Last Updated: October 10, 2025</span>
                        </div>
                    </div>
                </div>

                {/* Terms Content */}
                <div className="rounded-2xl bg-white p-6 shadow-lg md:p-8 lg:p-12">
                    {/* Introduction */}
                    <div className="mb-12">
                        <div className="mb-4 text-center">
                            <p className="text-base text-gray-700 md:text-lg">
                                Welcome to the Pakil Tourism Information & Engagement System (PTIES). By accessing or using this website, you agree to
                                comply with and be bound by the following Terms and Conditions. If you do not agree, please refrain from using the
                                site.
                            </p>
                        </div>
                    </div>

                    {/* Acceptance of Terms */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                1
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Acceptance of Terms</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                By browsing or using PTIES, you agree to these Terms and Conditions, our Privacy Policy, and any other legal notices
                                posted on the site. PTIES may revise these terms at any time without prior notice.
                            </p>
                        </div>
                    </div>

                    {/* Purpose of the Website */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                2
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Purpose of the Website</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                PTIES serves as a content management and engagement platform for the Municipality of Pakil. It provides access to
                                local information, community posts, and tourism-related content.
                            </p>
                            <p>
                                The platform also includes interactive features such as event listings, gamification activities, and the Social Wall
                                for community engagement.
                            </p>
                        </div>
                    </div>

                    {/* Intellectual Property */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                3
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Intellectual Property</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                All content, designs, logos, graphics, and materials found on PTIES are the property of the Municipality of Pakil or
                                its content partners.
                            </p>
                            <p>Users may not copy, reproduce, modify, or distribute any material without prior written permission.</p>
                            <p>Any unauthorized use may violate copyright, trademark, and other applicable laws.</p>
                        </div>
                    </div>

                    {/* User-Generated Content */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                4
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">User-Generated Content</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>PTIES allows users to upload and share content (e.g., posts, photos) through the Social Wall.</p>
                            <p>
                                By submitting content, you grant PTIES a non-exclusive, royalty-free license to display and use that content within
                                the system.
                            </p>
                            <p>
                                Users are solely responsible for the content they post and must ensure it does not contain illegal, defamatory,
                                obscene, or offensive material.
                            </p>
                            <p>PTIES reserves the right to remove or moderate any content that violates these standards or community guidelines.</p>
                        </div>
                    </div>

                    {/* Acceptable Use */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                5
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Acceptable Use</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>You agree not to:</p>
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>Use the website for fraudulent, illegal, or harmful activities.</li>
                                <li>Attempt to disrupt, hack, or interfere with the website's systems, servers, or security.</li>
                                <li>Upload malware, spam, or malicious code.</li>
                                <li>Impersonate other users or misrepresent your identity.</li>
                            </ul>
                            <p>Violation of these terms may result in access restrictions, suspension, or legal action.</p>
                        </div>
                    </div>

                    {/* Links to Third-Party Sites */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                6
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Links to Third-Party Sites</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                PTIES may contain links to external websites. These are provided for convenience only. PTIES does not control or
                                endorse the content of third-party sites and is not responsible for any damages or issues arising from their use.
                            </p>
                        </div>
                    </div>

                    {/* Limitation of Liability */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                7
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Limitation of Liability</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                PTIES ensures that all information published on the platform is reviewed and verified by the appropriate municipal
                                offices.
                            </p>
                            <p>
                                The Municipality of Pakil shall not be liable for any misuse or misinterpretation of information posted on the
                                website.
                            </p>
                            <p>Users are encouraged to rely only on official PTIES updates for events, and tourism information.</p>
                        </div>
                    </div>

                    {/* Availability and Maintenance */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                8
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Availability and Maintenance</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>PTIES may temporarily suspend or limit access for maintenance, upgrades, or unforeseen issues.</p>
                            <p>The Municipality of Pakil reserves the right to modify or discontinue any part of the website without prior notice.</p>
                        </div>
                    </div>

                    {/* Data Privacy */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                9
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Data Privacy</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                PTIES complies with the Data Privacy Act of 2012 (RA 10173). Personal data collected through this site are handled
                                securely and used only for legitimate purposes. For more details, refer to the Privacy Policy.
                            </p>
                        </div>
                    </div>

                    {/* Governing Law */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                10
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Governing Law</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of the
                                Philippines. Any disputes shall be subject to the jurisdiction of the appropriate courts in the Philippines.
                            </p>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                11
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Contact Information</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                For questions or concerns about these Terms and Conditions, you may contact the PTIES administrators through the
                                official website contact form or the Municipal Tourism Office of Pakil.
                            </p>
                        </div>
                    </div>

                    {/* Agreement Section */}
                    <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6">
                        <div className="text-center">
                            <h3 className="mb-4 text-lg font-bold text-primary md:text-xl">Acceptance of Terms</h3>
                            <p className="mb-6 text-sm text-gray-700 md:text-base">
                                By continuing to use the PTIES platform, you acknowledge that you have read, understood, and agree to comply with
                                these Terms and Conditions.
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
