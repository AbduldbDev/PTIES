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
        <section className="py-4 md:py-12 lg:py-16">
            <div className="container mx-auto px-4">
                <PageTitle
                    title="Get In Touch"
                    subtitle="Contact Us & FAQs"
                    desc="Have questions about visiting Pakil? Reach out to us or browse our frequently asked questions."
                ></PageTitle>

                <div className="grid min-h-0 grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:gap-10">
                    <div className="flex flex-col">
                        <ContactForm />
                    </div>

                    <div className="flex flex-col">
                        <div
                            className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            <div className="flex flex-1 flex-col p-5 md:p-6 lg:p-8">
                                <div className="mb-4 flex items-center md:mb-6">
                                    <div className="mr-3 flex-shrink-0 rounded-lg bg-primary/10 p-2 md:mr-4 md:p-3">
                                        <i className="fa-solid fa-circle-question text-lg text-primary md:text-xl"></i>
                                    </div>
                                    <h4 className="text-dark text-lg font-bold md:text-xl">Frequently Asked Questions</h4>
                                </div>

                                <div className="flex-1">
                                    {content?.length > 0 ? (
                                        <div className="space-y-3 md:space-y-4">
                                            {content.map((faq, index) => (
                                                <div
                                                    key={index}
                                                    className="border-b border-gray-200 pb-3 md:pb-4"
                                                    data-aos="fade-up"
                                                    data-aos-delay={300 + index * 50}
                                                >
                                                    <button
                                                        onClick={() => toggleFaq(index)}
                                                        className="flex w-full items-start justify-between text-left"
                                                    >
                                                        <span className="text-dark flex-1 pr-4 text-sm font-semibold md:text-base">
                                                            {faq.question}
                                                        </span>
                                                        <i
                                                            className={`fas fa-chevron-down flex-shrink-0 text-xs text-primary transition-transform duration-200 md:text-sm ${openFaqs[index] ? 'rotate-180' : ''}`}
                                                        ></i>
                                                    </button>
                                                    {openFaqs[index] && (
                                                        <div className="mt-2 text-sm text-gray-600 md:text-base">
                                                            <p>{faq.answer}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center py-8" data-aos="fade-up" data-aos-delay="300">
                                            <span className="text-dark text-sm font-medium md:text-base">
                                                No Available Frequently Asked Questions
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-6 md:mt-8">
                                    <div className="rounded-lg border border-blue-100 bg-blue-50 p-3 md:p-4" data-aos="fade-up" data-aos-delay="500">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <i className="fas fa-info-circle text-lg text-blue-500 md:text-xl"></i>
                                            </div>
                                            <div className="ml-3 flex-1">
                                                <h5 className="text-xs font-medium text-blue-800 md:text-sm">Need more help?</h5>
                                                <p className="text-xs text-blue-700 md:text-sm">
                                                    Visit our Tourism Office at the Municipal Hall or message us on our{' '}
                                                    <a
                                                        href="https://www.facebook.com/pakilturismo"
                                                        target="_blank"
                                                        className="font-medium underline hover:text-blue-900"
                                                    >
                                                        Facebook page
                                                    </a>{' '}
                                                    for quick responses.
                                                </p>
                                            </div>
                                        </div>
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
