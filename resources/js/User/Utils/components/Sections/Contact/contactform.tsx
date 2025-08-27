import PageTitle from '@UserUtils/components/Banner/PageTitle';
import ContactForm from '@UserUtils/components/Cards/ContactForm';
import { useState } from 'react';

type FAQsProps = {
    question: string;
    answer: string;
};
interface Props {
    content: FAQsProps[];
}
export default function ContactAndFAQ({ content }: Props) {
    const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});

    const toggleFaq = (index: number) => {
        setOpenFaqs((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <PageTitle
                    title="Get In Touch"
                    subtitle="Contact Us & FAQs"
                    desc="Have questions about visiting Pakil? Reach out to us or browse our frequently asked questions."
                ></PageTitle>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    <ContactForm />

                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                        <div className="p-8">
                            <div className="mb-6 flex items-center">
                                <div className="mr-4 rounded-lg bg-primary/10 p-3">
                                    <i className="fa-solid fa-circle-question text-xl text-primary"></i>
                                </div>
                                <h4 className="text-dark text-xl font-bold">Frequently Asked Questions</h4>
                            </div>
                            {content?.length > 0 ? (
                                <div className="space-y-4">
                                    {content.map((faq, index) => (
                                        <div key={index} className="border-b border-gray-200 pb-4">
                                            <button onClick={() => toggleFaq(index)} className="flex w-full items-center justify-between text-left">
                                                <span className="text-dark font-medium">{faq.question}</span>
                                                <i
                                                    className={`fas fa-chevron-down text-primary transition-transform duration-200 ${openFaqs[index] ? 'rotate-180' : ''}`}
                                                ></i>
                                            </button>
                                            {openFaqs[index] && (
                                                <div className="mt-2 text-gray-600">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="border-b border-gray-200 pb-4">
                                    {' '}
                                    <span className="text-dark font-medium">No Available Frequently Asked Questions</span>
                                </div>
                            )}

                            <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-4">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <i className="fas fa-info-circle text-xl text-blue-500"></i>
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="text-sm font-medium text-blue-800">Need more help?</h5>
                                        <p className="text-sm text-blue-700">
                                            Visit our Tourism Office at the Municipal Hall or message us on our{' '}
                                            <a href="https://www.facebook.com/pakilturismo" target="_blank" className="mr-1 font-medium underline">
                                                Facebook page
                                            </a>
                                            for quick responses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
