import { useEffect, useRef, useState } from 'react';

interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAgree: () => void;
}

const TermsModal = ({ isOpen, onClose, onAgree }: TermsModalProps) => {
    const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const checkScroll = () => {
        if (contentRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
            setHasScrolledToBottom(isAtBottom);
        }
    };

    useEffect(() => {
        if (isOpen) {
            setHasScrolledToBottom(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="bg-opacity-70 fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm sm:p-4">
            <div className="max-h-[95vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="border-b border-gray-200 p-4">
                    <h2 className="text-center text-lg font-bold text-black uppercase sm:text-xl">Pakil Tourism Information & Engagement System</h2>
                </div>

                <div ref={contentRef} className="max-h-[70vh] overflow-y-auto px-3" onScroll={checkScroll}>
                    <div className="rounded-lg p-3 sm:p-4">
                        <h3 className="mb-2 text-center font-bold text-primary uppercase sm:mb-3 lg:text-xl">Terms & Conditions</h3>
                        <p className="mb-2 text-center text-xs italic sm:text-sm">Effective Date: [September 19, 2025]</p>
                        <p className="mb-3 text-sm sm:mb-4">
                            Welcome to the Pakil Tourism Information & Engagement System (PTIES). By signing up for an account, you agree to the
                            following Terms and Conditions. Please read them carefully before proceeding.
                        </p>

                        <h4 className="mt-3 mb-1 font-bold sm:mt-4 sm:mb-2">1. Eligibility</h4>
                        <ul className="mb-3 list-disc pl-5 sm:mb-4">
                            <li className="mb-1 text-sm">
                                PTIES is open to all individuals. Users under the age of 18 must have the consent of a parent or legal guardian.
                            </li>
                        </ul>

                        <h4 className="mt-3 mb-1 font-bold sm:mt-4 sm:mb-2">2. Account Verification</h4>
                        <ul className="mb-3 list-disc pl-5 sm:mb-4">
                            <li className="mb-1 text-sm">All accounts must undergo verification through OTP/email confirmation.</li>
                            <li className="mb-1 text-sm">
                                Accounts that are registered but not yet verified will be created but remain inaccessible until verification is
                                completed. Any login attempt will require verification first.
                            </li>
                            <li className="mb-1 text-sm">Accounts that remain unverified for one (1) week will be automatically deleted.</li>
                            <li className="mb-1 text-sm">
                                Government-issued ID verification is required only when redeeming rewards to ensure authenticity and prevent
                                fraudulent claims.
                            </li>
                            <li className="mb-1 text-sm">Inactive accounts for five (5) years will be automatically deleted.</li>
                        </ul>

                        <h4 className="mt-3 mb-1 font-bold sm:mt-4 sm:mb-2">3. User Responsibilities</h4>
                        <ul className="mb-3 list-disc pl-5 sm:mb-4">
                            <li className="mb-1 text-sm">
                                Users must provide accurate and truthful information during registration and verification.
                            </li>
                            <li className="mb-1 text-sm">Users are responsible for maintaining the confidentiality of their login credentials.</li>
                            <li className="mb-1 text-sm">Any activity carried out under a user's account is their responsibility.</li>
                        </ul>

                        <h4 className="mt-3 mb-1 font-bold sm:mt-4 sm:mb-2">4. Privacy & Data Use</h4>
                        <ul className="mb-3 list-disc pl-5 sm:mb-4">
                            <li className="mb-1 text-sm">PTIES complies with the Philippine Data Privacy Act of 2012 (RA 10173).</li>
                            <li className="mb-1 text-sm">
                                Users' personal information will be collected and used only for account verification, engagement activities, and
                                reward redemption purposes.
                            </li>
                            <li className="mb-1 text-sm">
                                On the Social Wall module, a user's name may be displayed publicly when they choose to upload or share content.
                            </li>
                            <li className="mb-1 text-sm">Users have control over what personal information they make visible.</li>
                        </ul>

                        <h4 className="mt-3 mb-1 font-bold sm:mt-4 sm:mb-2">5. Rewards & Gamification</h4>
                        <ul className="mb-3 list-disc pl-5 sm:mb-4">
                            <li className="mb-1 text-sm">Users may earn Pakil Points through participation and engagement.</li>
                            <li className="mb-1 text-sm">
                                Pakil Points can be redeemed for available physical items as listed in the Rewards Catalog.
                            </li>
                            <li className="mb-1 text-sm">
                                Government-issued ID verification is required before any redemption to confirm the identity of the claimant.
                            </li>
                            <li className="mb-1 text-sm">PTIES reserves the right to change, limit, or discontinue rewards without prior notice.</li>
                            <li className="mb-1 text-sm">
                                Fraudulent activities (e.g., fake accounts, multiple accounts, misrepresentation) will result in account suspension or
                                permanent deletion.
                            </li>
                        </ul>

                        <h4 className="mt-3 mb-1 font-bold sm:mt-4 sm:mb-2">6. Acceptable Use</h4>
                        <ul className="mb-3 list-disc pl-5 sm:mb-4">
                            <li className="mb-1 text-sm">Users must use PTIES responsibly and respectfully.</li>
                            <li className="mb-1 text-sm">Posting of vulgar, offensive, harmful, or unlawful content is strictly prohibited.</li>
                            <li className="mb-1 text-sm">All posts are subject to moderation before being made public.</li>
                            <li className="mb-1 text-sm">Violations may result in immediate suspension or permanent deletion of the account.</li>
                        </ul>

                        <h4 className="mt-3 mb-1 font-bold sm:mt-4 sm:mb-2">7. Suspension & Termination</h4>
                        <ul className="mb-3 list-disc pl-5 sm:mb-4">
                            <li className="mb-1 text-sm">
                                PTIES reserves the right to suspend or delete any account found violating these Terms and Conditions, including but
                                not limited to fraud, abuse of the system, or inappropriate conduct.
                            </li>
                            <li className="mb-1 text-sm">Deleted or suspended accounts will lose all accumulated Pakil Points and rewards.</li>
                        </ul>

                        <h4 className="mt-3 mb-1 font-bold sm:mt-4 sm:mb-2">8. Jurisdiction</h4>
                        <ul className="mb-3 list-disc pl-5 sm:mb-4">
                            <li className="mb-1 text-sm">
                                These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of the
                                Philippines, particularly RA 10173 (Data Privacy Act of 2012).
                            </li>
                            <li className="mb-1 text-sm">
                                Any disputes arising from the use of PTIES shall be settled in the appropriate courts of the Philippines.
                            </li>
                        </ul>

                        <h4 className="mt-3 mb-1 font-bold sm:mt-4 sm:mb-2">9. Amendments</h4>
                        <ul className="mb-3 list-disc pl-5 sm:mb-4">
                            <li className="mb-1 text-sm">
                                PTIES reserves the right to modify these Terms and Conditions at any time. Users will be notified of significant
                                changes via their registered email.
                            </li>
                        </ul>
                    </div>
                    <hr className="border-t-1 border-primary/20" />
                    <div className="rounded-lg p-3 sm:p-4">
                        <h3 className="mb-2 text-center text-lg font-bold text-primary uppercase sm:mb-3 sm:text-xl">Privacy Policy</h3>
                        <p className="mb-3 text-sm sm:mb-4">
                            When you sign up for the Pakil Tourism Information and Engagement System (PTIES), we collect and process limited personal
                            data to provide you with secure access and a personalized tourism experience. By creating an account, you consent to the
                            collection, use, and protection of your data in line with the Philippine Data Privacy Act of 2012 (RA 10173) and its
                            implementing rules.
                        </p>
                        <p className="mb-3 text-sm sm:mb-4">
                            During registration, we only require your email address and password to create your account. After your account has been
                            created, you may optionally add or update additional information such as your phone number and address in your account
                            profile. These optional details are not required to use the system but may enhance your experience, such as for account
                            recovery, vendor transactions, or location-based services.
                        </p>
                        <p className="mb-3 text-sm sm:mb-4">
                            All personal data is stored securely in our system and protected with encryption, password hashing, role-based access
                            control, and regular security monitoring. Data is retained only as long as necessary to fulfill the purposes stated, after
                            which it will be securely deleted according to our retention schedule (e.g., inactive accounts for five years, unverified
                            accounts for six months). You may also request account deletion at any time.
                        </p>
                        <p className="mb-3 text-sm sm:mb-4">
                            We do not sell or share your personal data with unauthorized third parties. Data sharing, if necessary (e.g., with service
                            providers or tourism partners), will only occur under proper agreements and with safeguards in place to ensure compliance
                            with privacy standards. Cross-border transfers, if ever required, will only be done with your consent or under equivalent
                            legal protections.
                        </p>
                        <p className="mb-3 text-sm sm:mb-4">
                            As a data subject, you have the right to be informed, access your personal data, request corrections, object to certain
                            processing, withdraw consent, or request deletion. You may also file complaints with the National Privacy Commission if
                            you believe your rights have been violated.
                        </p>
                        <p className="mb-3 text-sm sm:mb-4">
                            The Pakil Tourism, Culture, and the Arts Office is the primary Personal Information Controller of this system. For any
                            privacy concerns or to exercise your rights, you may contact our designated Data Protection Officer (DPO) through the
                            official municipal office channels.
                        </p>

                        <h4 className="mt-3 mb-1 font-bold sm:mt-4 sm:mb-2">By signing up, I confirm that:</h4>
                        <ul className="mb-3 list-disc pl-5 sm:mb-4">
                            <li className="mb-1 text-sm">
                                I agree to the collection and processing of my personal data (email and password) for account creation.
                            </li>
                            <li className="mb-1 text-sm">
                                I understand that providing my phone number and address is optional and can be added later in my account profile.
                            </li>
                            <li className="mb-1 text-sm">
                                I agree that my data may be shared only with authorized partners and service providers when necessary.
                            </li>
                            <li className="mb-1 text-sm">
                                I have read and understood my rights as a data subject under the Data Privacy Act of 2012.
                            </li>
                            <li className="mb-1 text-sm">I agree to the Privacy Policy and Terms of Use.</li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 p-3 sm:p-4">
                    <button onClick={onClose} className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 sm:px-4 sm:py-2">
                        Cancel
                    </button>

                    <button
                        onClick={onAgree}
                        disabled={!hasScrolledToBottom}
                        className={`rounded-full px-3 py-1.5 text-sm sm:px-4 sm:py-2 ${
                            hasScrolledToBottom ? 'bg-primary text-white hover:bg-primary/90' : 'cursor-not-allowed bg-gray-300 text-gray-500'
                        }`}
                    >
                        I Agree
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TermsModal;
