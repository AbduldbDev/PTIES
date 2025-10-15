export default function SellerTerms() {
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
                    <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">Terms and Conditions for Sellers</h1>
                    <p className="mx-auto max-w-4xl text-sm text-gray-600 md:text-xl lg:text-base">
                        Pakil Tourism Information and Engagement System (PTIES) - Effective Date: October 10, 2025
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
                        <div className="mb-2 flex items-start">
                            <div className="section-number mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                1
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Introduction</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                Welcome to the
                                <strong>Pakil Tourism Information and Engagement System (PTIES)</strong>— the official tourism and community
                                engagement platform of the Municipality of Pakil, Laguna.
                            </p>
                            <p>
                                These Terms and Conditions ("Terms") apply specifically to individuals or entities registering and operating as
                                <strong> Sellers </strong>
                                within PTIES. By creating a Seller Account, you acknowledge that you have read, understood, and agree to comply with
                                these Terms, as well as all applicable laws, ordinances, and the policies of the <strong>
                                    Pakil Tourism Office
                                </strong>{' '}
                                and the
                                <strong> Republic of the Philippines </strong>.
                            </p>
                            <p>
                                PTIES serves as an
                                <strong> information and promotional platform </strong>
                                developed to highlight Pakil's culture, creativity, and local enterprise. It allows verified vendors and local
                                entrepreneurs to <strong>showcase their products and services</strong> to residents and visitors.
                            </p>
                            <p className="font-semibold text-primary" />
                            <div className="mt-4 border-l-4 border-primary bg-blue-50 p-4">
                                <p className="font-semibold text-primary">Important Notice Regarding PTIES Platform Usage:</p>
                                <p className="mt-2">
                                    PTIES is <strong>NOT AN E-COMMERCE PLATFORM</strong> and
                                    <strong>does not facilitate direct sales, payments, or deliveries</strong>. All transactions, if any, are
                                    conducted
                                    <strong> independently between the Seller and interested buyers outside of the system</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Seller Registration and Eligibility */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                2
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Seller Registration and Eligibility</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                <strong>2.1.</strong> Only verified
                                <strong> residents, entrepreneurs, cooperatives, or business owners</strong>
                                operating within the Municipality of Pakil, Laguna are eligible to register as Sellers.
                            </p>
                            <p>
                                <strong>2.2.</strong> Sellers must provide accurate and up-to-date information, including but not limited to:
                            </p>
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>Full name and valid identification</li>
                                <li>Business or trade name</li>
                                <li>Business permit or barangay clearance</li>
                                <li>Contact details and business address</li>
                                <li>Description of products or services offered</li>
                            </ul>
                            <p>
                                <strong>2.3.</strong> The
                                <strong> Pakil Tourism Office</strong> reserves the right to verify all information and documentation prior to
                                approving Seller registration.
                            </p>
                            <p>
                                <strong>2.4.</strong> The Office may deny or revoke a Seller's registration if requirements are incomplete, falsified,
                                or found inconsistent with the goals of PTIES.
                            </p>
                            <p>
                                <strong>2.5.</strong> Sellers are responsible for maintaining the confidentiality of their login credentials. Any
                                activity under a registered account shall be considered performed by the registered Seller.
                            </p>
                        </div>
                    </div>
                    {/* Platform Use and Seller Responsibilities */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                3
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Platform Use and Seller Responsibilities</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                <strong>3.1.</strong> PTIES provides Sellers with a<strong> digital showcase feature</strong> that enables them to
                                present their products, crafts, or services for public viewing.
                            </p>
                            <p>
                                <b>3.2. </b> The platform is strictly intended for
                                <strong> information and promotion only</strong>. PTIES
                                <strong> does not process or manage online transactions, orders, or payments</strong>. Any purchases or exchanges of
                                goods that may arise are to be conducted <strong>outside the platform</strong> and at the discretion of the parties
                                involved.
                            </p>
                            <p>
                                <strong>3.3.</strong> Sellers agree to use PTIES responsibly and exclusively for legitimate and lawful purposes
                                related to tourism and local trade promotion.
                            </p>
                            <p>
                                <strong>3.4.</strong> The following are strictly prohibited:
                            </p>
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>Posting counterfeit, illegal, or inappropriate items</li>
                                <li>Misrepresenting product origin, pricing, or authenticity</li>
                                <li>Uploading false, misleading, or defamatory information</li>
                                <li>Conducting sales, auctions, or monetary exchanges through the platform</li>
                                <li>Distributing malicious links, advertisements, or unrelated promotional materials</li>
                                <li>Tampering with or attempting to exploit the system's integrity</li>
                            </ul>
                            <p>
                                <strong>3.5.</strong> Sellers shall ensure that all listings and interactions uphold
                                <strong> cultural integrity, ethical business conduct, and environmental sustainability</strong>, reflecting the
                                values of the Municipality of Pakil.
                            </p>
                        </div>
                    </div>
                    {/* Product Listings and Content */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                4
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Product Listings and Content</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                <strong>4.1.</strong> Sellers are solely responsible for ensuring the accuracy, quality, and appropriateness of all
                                content uploaded, including product descriptions, images, and pricing.
                            </p>
                            <p>
                                <strong>4.2.</strong> All content must comply with applicable copyright, trademark, and intellectual property laws.
                            </p>
                            <p>
                                <strong>4.3.</strong> The
                                <strong> Pakil Tourism Office</strong> reserves the right to review, modify, or remove listings that:
                            </p>
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>Contain false or inappropriate information</li>
                                <li>Violate community standards or national laws</li>
                                <li>Misrepresent the Municipality or its local products</li>
                            </ul>
                            <p>
                                <strong>4.4.</strong> Product listings may be temporarily disabled during content verification, maintenance, or upon
                                request by the Tourism Office.
                            </p>
                        </div>
                    </div>
                    {/* Data Privacy and Protection */}
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                5
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Data Privacy and Protection</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                <strong>5.1.</strong> PTIES upholds the principles of data protection as provided under the
                                <strong> Data Privacy Act of 2012 (Republic Act No. 10173)</strong>.
                            </p>
                            <p>
                                <strong>5.2.</strong> The personal and business information collected from Sellers — such as names, contact details,
                                business documents, and listings — shall be used solely for legitimate purposes related to account management, vendor
                                verification, and platform operations.
                            </p>
                            <p>
                                <strong>5.3.</strong> All information is securely stored and protected using encryption and access controls.
                            </p>
                            <p>
                                <strong>5.4.</strong> Sellers may request access, correction, or deletion of their data by contacting the system's
                                <strong> Data Protection Officer</strong>.
                            </p>
                            <p>
                                <strong>5.5.</strong> Information shall only be shared when:
                            </p>
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>Legally required by authorities; or</li>
                                <li>With the explicit consent of the Seller</li>
                            </ul>
                            <p>
                                <strong>5.6.</strong> Inactive accounts shall be permanently deleted after <strong>five (5) years</strong>, and
                                unverified accounts shall be removed after <strong>one (1) week</strong>.
                            </p>
                            <div className="mt-4 border-l-4 border-primary bg-blue-50 p-4">
                                <p className="font-semibold text-primary">For inquiries or data privacy concerns, you may contact the:</p>
                                <p className="mt-2">📧 Data Protection Officer – ptiesteam@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                6
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Conduct and Obligations of Sellers</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                <strong>6.1.</strong> Sellers shall maintain
                                <strong> professionalism and courtesy</strong> when engaging with users, tourists, and the{' '}
                                <strong> Pakil Tourism Office</strong>.
                            </p>
                            <p>
                                <strong>6.2.</strong> Sellers are responsible for the authenticity and quality of the products or services they
                                promote.
                            </p>
                            <p>
                                <strong>6.3.</strong> Sellers shall comply with all local ordinances, business regulations, and consumer protection
                                laws.
                            </p>
                            <p>
                                <strong>6.4.</strong> In the event of customer feedback or complaints, Sellers are expected to respond promptly and
                                respectfully.
                            </p>
                            <p>
                                <strong>6.5.</strong> PTIES reserves the right to request updated business documentation to ensure continued
                                compliance.
                            </p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                7
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Monitoring, Suspension, and Termination</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                <strong>7.1.</strong> The
                                <strong> Pakil Tourism Office</strong> reserves the right to monitor Seller activity to ensure compliance with these
                                Terms.
                            </p>
                            <p>
                                <strong>7.2.</strong> Seller accounts may be suspended or terminated for:
                            </p>
                            <ul className="ml-4 list-inside list-disc space-y-2">
                                <li>Misuse of the PTIES platform;</li>
                                <li>False or misleading representations</li>
                                <li>Violation of any provision of these Terms</li>
                                <li>Engagement in unethical or fraudulent activity</li>
                                <li>Failure to comply with verification or renewal requirement</li>
                            </ul>
                            <p>
                                <strong>7.3.</strong>A Seller whose account has been terminated may reapply for registration, subject to revalidation
                                and approval by the <strong>Pakil Tourism Office</strong>.
                            </p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                8
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Limitation of Liability</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                <strong>8.1.</strong> PTIES and the
                                <strong> Pakil Tourism Office</strong> shall not be held liable for any loss, damage, or dispute arising from
                                interactions, agreements, or transactions made
                                <strong> outside the PTIES platform</strong>.
                            </p>
                            <p>
                                <strong>8.2.</strong> the platform serves solely as an
                                <strong> information and promotional tool</strong>, and does not guarantee the accuracy, completeness, or availability
                                of the products listed.
                            </p>
                            <p>
                                <strong>8.3.</strong> PTIES shall not be responsible for product quality, pricing, shipping, payment issues, or any
                                private arrangements between Sellers and buyers.
                            </p>
                            <p>
                                <strong>8.4.</strong> The platform is provided “as is” and “as available,” and may occasionally be unavailable due to
                                maintenance or technical issues.
                            </p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                9
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Amendments</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                The <strong> Pakil Tourism Office</strong> reserves the right to amend, revise, or update these Terms at any time.
                                Sellers will be notified of significant changes via the platform or through their registered email. Continued use of
                                PTIES after such updates constitutes acceptance of the revised Terms.
                            </p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="mb-2 flex items-start">
                            <div className="section-number mt-1 mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white">
                                10
                            </div>
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-primary md:text-2xl">Governing Law and Jurisdiction</h2>
                            </div>
                        </div>
                        <div className="space-y-4 text-sm text-gray-700 md:text-base lg:pl-14">
                            <p>
                                These Terms shall be governed by and interpreted in accordance with the laws of the
                                <strong> Republic of the Philippines</strong>. Any disputes shall be settled in the appropriate courts located in the
                                <strong> Province of Laguna.</strong>
                            </p>
                        </div>
                    </div>
                    {/* Agreement Section */}
                    <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6">
                        <div className="text-center">
                            <h3 className="mb-4 text-lg font-bold text-primary md:text-xl">Acceptance of Terms</h3>
                            <p className="mb-6 text-sm text-gray-700 md:text-base">
                                By registering as a Seller and continuing to use the PTIES platform, you acknowledge that you have read, understood,
                                and agree to comply with these Terms and Conditions for Sellers.
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <a
                                    href="/seller/registration"
                                    className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-primary/90 lg:text-base"
                                >
                                    <i className="fas fa-file-signature mr-2" />
                                    Agree &amp; Register
                                </a>
                                <a
                                    href="index.html"
                                    className="rounded-full bg-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition duration-300 hover:bg-gray-300 lg:text-base"
                                >
                                    <i className="fas fa-home mr-2" />
                                    Return to Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
