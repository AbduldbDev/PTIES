import PageTitle from '@UserUtils/components/Banner/PageTitle';
import { useState } from 'react';
const DepartmentStructure = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <section id="department_structure" className="py-12">
            <div className="container mx-auto px-4">
                <PageTitle
                    title="Organization"
                    subtitle="  Department of Tourism Structure"
                    desc="he organizational hierarchy and leadership of Pakil's Tourism Department"
                />

                {/* Mobile Accordion View */}
                <div className="space-y-4 lg:hidden">
                    {[
                        {
                            id: 1,
                            icon: 'fas fa-user-tie',
                            title: 'Tourism Officer',
                            subtitle: 'Department Head',
                            description: 'Oversees all tourism operations, policies, and development initiatives for Pakil.',
                            team: {
                                title: 'Current Officer:',
                                members: ['Juan Dela Cruz', 'juan.delacruz@pakil.gov.ph'],
                            },
                        },
                        {
                            id: 2,
                            icon: 'fas fa-bullhorn',
                            title: 'Marketing Division',
                            subtitle: 'Promotions & Communications',
                            description: 'Handles tourism promotions, branding, digital presence, and marketing campaigns.',
                            team: {
                                title: 'Team Members:',
                                members: [
                                    'Maria Santos - Digital Marketing Officer',
                                    'Carlos Reyes - Graphic Designer',
                                    'Andrea Torres - Content Writer',
                                ],
                            },
                        },
                        {
                            id: 3,
                            icon: 'fas fa-cogs',
                            title: 'Operations Division',
                            subtitle: 'Tourism Services & Facilities',
                            description: 'Manages tourism sites, facilities, and daily operations.',
                            team: {
                                title: 'Team Members:',
                                members: [
                                    'Robert Lim - Site Operations Manager',
                                    'Lourdes Garcia - Visitor Services Officer',
                                    'Mark Tan - Facilities Coordinator',
                                ],
                            },
                        },
                        {
                            id: 4,
                            icon: 'fas fa-calendar-alt',
                            title: 'Events Division',
                            subtitle: 'Festivals & Special Activities',
                            description: 'Plans and executes tourism-related events and festivals.',
                            team: {
                                title: 'Team Members:',
                                members: [
                                    'Sofia Martinez - Events Manager',
                                    'James Wilson - Logistics Coordinator',
                                    'Patricia Lee - Community Liaison',
                                ],
                            },
                        },
                    ].map((item) => (
                        <div key={item.id} className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                            <button
                                className="accordion-toggle flex w-full items-center justify-between p-4 text-left"
                                onClick={() => toggleAccordion(item.id)}
                            >
                                <div className="flex items-center">
                                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                        <i className={`${item.icon} text-primary`}></i>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                                    </div>
                                </div>
                                <i
                                    className={`fas fa-chevron-down text-primary transition-transform duration-300 ${activeAccordion === item.id ? 'rotate-180 transform' : ''}`}
                                ></i>
                            </button>
                            <div className={`accordion-content ${activeAccordion === item.id ? 'block' : 'hidden'} px-4 pb-4`}>
                                <div className="border-l-2 border-primary/30 pl-4">
                                    <p className="mb-3 text-gray-700">{item.description}</p>
                                    <div className="rounded-lg border border-gray-200 bg-white p-3">
                                        <p className="mb-1 font-medium text-primary">{item.team.title}</p>
                                        {Array.isArray(item.team.members) ? (
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                {item.team.members.map((member, i) => (
                                                    <li key={i}>• {member}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-700">{item.team.members[0]}</p>
                                        )}
                                        {item.team.members.length > 1 && <p className="text-sm text-gray-500">{item.team.members[1]}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Grid View */}
                <div className="hidden lg:block">
                    <div className="relative">
                        <div className="mb-8 flex justify-center">
                            <div className="official-card relative max-w-xs rounded-xl border border-gray-200 bg-white p-5 text-center shadow-md">
                                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                                    <i className="fas fa-user-tie text-2xl text-primary"></i>
                                </div>
                                <h4 className="text-lg font-bold text-primary">Tourism Officer</h4>
                                <p className="mb-2 text-sm text-gray-600">Department Head</p>
                                <p className="mb-3 text-sm text-gray-700">Oversees all tourism operations and development initiatives</p>
                                <div className="rounded-lg bg-primary/5 p-2">
                                    <p className="font-medium text-primary">Juan Dela Cruz</p>
                                    <p className="text-xs text-gray-600">juan.delacruz@pakil.gov.ph</p>
                                </div>
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform">
                                    <div className="mx-auto h-4 w-px bg-gray-300"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 flex justify-center">
                            <div className="h-4 w-px bg-gray-300"></div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {[
                                {
                                    icon: 'fas fa-bullhorn',
                                    title: 'Marketing Division',
                                    subtitle: 'Promotions & Communications',
                                    description: 'Handles tourism promotions and marketing campaigns',
                                    team: ['Maria Santos - Digital Marketing', 'Carlos Reyes - Graphic Design', 'Andrea Torres - Content'],
                                },
                                {
                                    icon: 'fas fa-cogs',
                                    title: 'Operations Division',
                                    subtitle: 'Tourism Services & Facilities',
                                    description: 'Manages tourism sites and daily operations',
                                    team: ['Robert Lim - Site Operations', 'Lourdes Garcia - Visitor Services', 'Mark Tan - Facilities'],
                                },
                                {
                                    icon: 'fas fa-calendar-alt',
                                    title: 'Events Division',
                                    subtitle: 'Festivals & Activities',
                                    description: 'Plans and executes tourism-related events',
                                    team: ['Sofia Martinez - Events', 'James Wilson - Logistics', 'Patricia Lee - Community'],
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="official-card relative rounded-xl border border-gray-200 bg-white p-5 text-center shadow-md"
                                >
                                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                                        <i className={`${item.icon} text-xl text-primary`}></i>
                                    </div>
                                    <h4 className="font-bold text-primary">{item.title}</h4>
                                    <p className="mb-2 text-sm text-gray-600">{item.subtitle}</p>
                                    <p className="mb-3 text-sm text-gray-700">{item.description}</p>
                                    <div className="border-t border-gray-200 pt-3">
                                        <p className="mb-1 text-sm font-medium text-primary">Team Members:</p>
                                        <ul className="space-y-1 text-xs text-gray-700">
                                            {item.team.map((member, i) => (
                                                <li key={i}>• {member}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 transform">
                                        <div className="mx-auto h-4 w-px bg-gray-300"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-block max-w-2xl rounded-xl bg-primary/5 p-6">
                        <h4 className="mb-2 text-lg font-bold text-primary">Need to contact a specific department?</h4>
                        <p className="mb-4 text-gray-700">Reach out to our tourism office for inquiries and assistance</p>
                        <a href="#" className="inline-flex items-center rounded-full bg-primary px-6 py-2 text-white transition hover:bg-primary/90">
                            <i className="fas fa-envelope mr-2"></i> Contact Tourism Office
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DepartmentStructure;
