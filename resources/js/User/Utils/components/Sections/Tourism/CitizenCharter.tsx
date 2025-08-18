import PageTitle from '@UserUtils/components/Banner/PageTitle';
import { useState } from 'react';

const CitizenCharter = () => {
    const [showPdf, setShowPdf] = useState(false);

    return (
        <section id="citizen_charter" className="py-10">
            <div className="max-w-8xl container mx-auto px-6">
                <div>
                    <PageTitle title="Governance" subtitle="Citizen's Charter" desc="Our commitment to transparent and efficient public service" />

                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                        <div className="md:flex">
                            <div className="border-b border-gray-200 bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:w-1/2 md:border-r md:border-b-0">
                                <div className="flex h-full flex-col">
                                    <div className="mb-8">
                                        <div className="flex items-center">
                                            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                <i className="fas fa-file-contract text-lg lg:text-xl"></i>
                                            </div>
                                            <h4 className="text-xl font-bold text-primary lg:text-2xl">About the Charter</h4>
                                        </div>
                                        <div className="mt-2 ml-16 h-1 w-16 rounded-full bg-primary/30"></div>
                                    </div>

                                    <div className="prose flex-grow space-y-6">
                                        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-start lg:text-start">
                                            <div className="flex-shrink-0">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                                    <i className="fas fa-users text-sm"></i>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-700 lg:text-base">
                                                The Citizen charter's comprehensively outlines all municipal services, including detailed procedures,
                                                requirements, and guaranteed response times. This ensures complete accountability and transparency in
                                                our local governance processes.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-start lg:text-start">
                                            <div className="flex-shrink-0">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                                    <i className="fas fa-users text-sm"></i>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-700 lg:text-base">
                                                The Citizen charter's comprehensively outlines all municipal services, including detailed procedures,
                                                requirements, and guaranteed response times. This ensures complete accountability and transparency in
                                                our local governance processes.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-start lg:text-start">
                                            <div className="flex-shrink-0">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                                                    <i className="fas fa-users text-sm"></i>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-700 lg:text-base">
                                                The Citizen charter's comprehensively outlines all municipal services, including detailed procedures,
                                                requirements, and guaranteed response times. This ensures complete accountability and transparency in
                                                our local governance processes.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-8 border-t border-gray-200/50 pt-4">
                                        <div className="flex flex-col justify-between text-center text-sm text-gray-500 lg:flex-row lg:text-start">
                                            <p>
                                                <i className="fas fa-info-circle mr-2text-primary/80"></i> Last updated: June 2025
                                            </p>
                                            <p>• Version 3.2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 md:w-1/2">
                                {showPdf ? (
                                    <div className="h-[70vh] w-full overflow-hidden rounded-lg border border-gray-300">
                                        <iframe
                                            src="/User/pakil.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0"
                                            className="h-full w-full border-0"
                                            title="Pakil Citizen's Charter 2025"
                                            style={{ backgroundColor: 'transparent' }}
                                        ></iframe>
                                        <button onClick={() => setShowPdf(false)} className="mt-2 text-sm text-primary hover:underline">
                                            <i className="fas fa-times mr-1"></i> Close PDF Viewer
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex h-[70vh] items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                                        <div className="p-6 text-center">
                                            <i className="fas fa-file-pdf mb-4 text-5xl text-primary"></i>
                                            <h5 className="text-dark mb-2 text-lg font-bold">Pakil Citizen's Charter 2025</h5>
                                            <p className="mb-4 text-gray-600">PDF document | 2.4MB</p>
                                            <button className="inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none">
                                                <i className="fas fa-download mr-2"></i> Download Charter
                                            </button>
                                            <div className="mt-4 text-sm text-gray-500">
                                                <p>
                                                    Or <br />
                                                    <button
                                                        onClick={() => setShowPdf(true)}
                                                        className="text-primary hover:underline focus:outline-none"
                                                    >
                                                        view online
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CitizenCharter;
