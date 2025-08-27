import PageTitle from '@UserUtils/components/Banner/PageTitle';
import ContactForm from '@UserUtils/components/Cards/ContactForm';
import { useState } from 'react';
const ContactAndFAQ = () => {
    // State for FAQ accordion
    const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});

    // Toggle FAQ item
    const toggleFaq = (index: number) => {
        setOpenFaqs((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    // FAQ data
    const faqs = [
        {
            question: "What are Pakil's must-visit attractions?",
            answer: "Don't miss the San Pedro de Alcantara Church, Our Lady of Turumba Shrine, and the beautiful waterfalls around Mount Ping-as. The town plaza and local craft shops are also worth visiting.",
        },
        {
            question: 'When is the best time to visit Pakil?',
            answer: 'The Turumba Festival (April-October) is the most vibrant time, but Pakil is beautiful year-round. Weekdays are less crowded than weekends at popular sites.',
        },
        {
            question: 'How can I hire a local tour guide?',
            answer: 'You can arrange guides through the Tourism Office at the Municipal Hall, or contact certified guides directly via their Facebook pages listed on our website.',
        },
        {
            question: 'Are there accommodations in Pakil?',
            answer: 'Yes, Pakil has several homestays and small hotels. For more options, nearby towns like Paete and Pangil offer additional accommodations just 10-15 minutes away.',
        },
        {
            question: 'What local delicacies should I try?',
            answer: "Don't miss the local 'puto' (rice cakes), 'kakanin' (sticky rice desserts), and fresh seafood from Laguna Lake. The 'turumba' bread is a unique local specialty.",
        },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <PageTitle
                    title="Get In Touch"
                    subtitle="Contact Us & FAQs"
                    desc="Have questions about visiting Pakil? Reach out to us or browse our frequently asked questions."
                ></PageTitle>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    {/* Contact Form */}
                    <ContactForm />
                    {/* FAQ Section */}
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                        <div className="p-8">
                            <div className="mb-6 flex items-center">
                                <div className="mr-4 rounded-lg bg-primary/10 p-3">
                                    <i className="fa-solid fa-circle-question text-xl text-primary"></i>
                                </div>
                                <h4 className="text-dark text-xl font-bold">Frequently Asked Questions</h4>
                            </div>

                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
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

                            <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-4">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <i className="fas fa-info-circle text-xl text-blue-500"></i>
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="text-sm font-medium text-blue-800">Need more help?</h5>
                                        <p className="text-sm text-blue-700">
                                            Visit our Tourism Office at the Municipal Hall or message us on our{' '}
                                            <a href="#" className="font-medium underline">
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
        </section>
    );
};

export default ContactAndFAQ;
