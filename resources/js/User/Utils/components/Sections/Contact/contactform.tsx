import PageTitle from '@UserUtils/components/Banner/PageTitle';
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
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                        <div className="p-8">
                            <div className="mb-6 flex items-center">
                                <div className="mr-4 rounded-lg bg-primary/10 p-3">
                                    <i className="fa-solid fa-envelope text-xl text-primary"></i>
                                </div>
                                <h4 className="text-dark text-xl font-bold">Send Us a Message</h4>
                            </div>

                            <form className="space-y-5">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i className="fas fa-user text-gray-400"></i>
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                className="block w-full rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:border-primary focus:ring-2 focus:ring-primary"
                                                placeholder="Your name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <i className="fas fa-envelope text-gray-400"></i>
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                className="block w-full rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:border-primary focus:ring-2 focus:ring-primary"
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <i className="fas fa-tag text-gray-400"></i>
                                        </div>
                                        <input
                                            type="text"
                                            id="subject"
                                            className="block w-full rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:border-primary focus:ring-2 focus:ring-primary"
                                            placeholder="What's this about?"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-start pt-3 pl-3">
                                            <i className="fas fa-comment-dots text-gray-400"></i>
                                        </div>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-lg border border-gray-300 py-3 pr-3 pl-10 focus:border-primary focus:ring-2 focus:ring-primary"
                                            placeholder="Your message..."
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-full border border-transparent bg-primary px-6 py-3 text-white shadow-sm transition duration-300 hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
                                >
                                    <i className="fas fa-paper-plane mr-2"></i> Send Message
                                </button>
                            </form>
                        </div>

                        <div className="border-t border-gray-200 bg-gray-50 px-8 py-6">
                            <h5 className="mb-3 text-sm font-semibold tracking-wider text-gray-500 uppercase">Other Ways to Reach Us</h5>
                            <div className="grid grid-cols-1 gap-4 pb-2 sm:grid-cols-2">
                                <div className="flex items-center">
                                    <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                        <i className="fas fa-phone-alt text-primary"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Phone</p>
                                        <p className="font-medium">(049) 456-7890</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="mr-3 rounded-lg bg-primary/10 p-2">
                                        <i className="fas fa-map-marker-alt text-primary"></i>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Address</p>
                                        <p className="font-medium">Municipal Hall, Pakil</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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
