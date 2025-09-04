import PageTitle from '@UserUtils/components/Banner/PageTitle';

type BarangayProps = {
    id: number;
    barangay: string;
    captain: string;
    highlights: string;
    type: string;
    index: string;
};

interface PageProps {
    barangays: BarangayProps[];
    barangayHighlights: BarangayProps[];
    [key: string]: unknown;
}

export default function BarangayInfo({ barangays, barangayHighlights }: PageProps) {
    const eastBarangays = barangays.filter((b) => b.type === 'east');
    const westBarangays = barangays.filter((b) => b.type === 'west');

    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <PageTitle
                        title="Geography"
                        subtitle="Municipal Map & Barangays"
                        desc="Discover the political subdivisions of Pakil and their leaders"
                    ></PageTitle>

                    <div className="mb-12 space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                        <div className="w-full">
                            <div className="aspect-w-16 aspect-h-9 flex items-center justify-center rounded-lg bg-gray-50">
                                <img src="/User/SVG/pakil.svg" alt="Pakil Municipal Map" className="h-auto w-full object-contain p-4" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="h-full rounded-xl border border-primary/20 bg-primary/5 p-4 shadow-sm md:p-6">
                                <h4 className="mb-6 flex items-center text-xl font-bold">
                                    <i className="fas fa-info-circle mr-3 text-primary"></i>
                                    <span className="mr-1 text-primary">Municipal </span> Facts
                                </h4>
                                <div className="grid grid-cols-1 gap-6 p-0 md:p-6 lg:grid-cols-2">
                                    <div className="mb-8">
                                        <h5 className="text-dark mb-3 flex items-center font-semibold">
                                            <i className="fas fa-route mr-2 text-secondary"></i> Distance From
                                        </h5>
                                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                            <div className="rounded-lg border border-gray-200 bg-white p-3">
                                                <p className="text-sm text-gray-600">Sta. Cruz, Laguna</p>
                                                <p className="font-bold text-primary">19km</p>
                                            </div>
                                            <div className="rounded-lg border border-gray-200 bg-white p-3">
                                                <p className="text-sm text-gray-600">Manila via Laguna</p>
                                                <p className="font-bold text-primary">114km</p>
                                            </div>
                                            <div className="rounded-lg border border-gray-200 bg-white p-3">
                                                <p className="text-sm text-gray-600">Manila via Rizal</p>
                                                <p className="font-bold text-primary">80km</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h5 className="text-dark mb-3 flex items-center font-semibold">
                                            <i className="fas fa-chart-bar mr-2 text-secondary"></i> Key Statistics
                                        </h5>
                                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                                            <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                                <p className="text-sm text-gray-600">Land Area</p>
                                                <p className="font-bold text-primary">4,649.78 ha</p>
                                            </div>
                                            <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                                <p className="text-sm text-gray-600">Population (2016)</p>
                                                <p className="font-bold text-primary">22,386</p>
                                            </div>
                                            <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                                <p className="text-sm text-gray-600">Population Growth</p>
                                                <p className="font-bold text-primary">1.46%</p>
                                            </div>
                                            <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                                <p className="text-sm text-gray-600">Literacy Rate</p>
                                                <p className="font-bold text-primary">93%</p>
                                            </div>
                                            <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                                <p className="text-sm text-gray-600">Employment Rate</p>
                                                <p className="font-bold text-primary">93%</p>
                                            </div>
                                            <div className="rounded-lg border border-gray-200 bg-white p-3 text-center">
                                                <p className="text-sm text-gray-600">Languages</p>
                                                <p className="font-bold text-primary">Filipino, English</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Element */}
                                <div className="mt-6 border-t border-gray-100 pt-4 text-center">
                                    <span className="inline-flex items-center text-xs text-gray-400">
                                        <i className="fas fa-info-circle mr-1 text-primary/70"></i>
                                        Last updated: August 2025
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {/* East Side Barangays */}
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                            <div className="border-b border-primary/20 bg-primary/10 p-5">
                                <h4 className="flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-sun mr-3"></i> Silangan (East) Barangays
                                </h4>
                            </div>
                            <div className="p-6">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                    No.
                                                </th>
                                                <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                    Barangay
                                                </th>
                                                <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                    Captain
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {eastBarangays.length > 0 ? (
                                                eastBarangays.map((item) => (
                                                    <tr key={item.id}>
                                                        <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                                            {item.index}
                                                        </td>
                                                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">{item.barangay}</td>
                                                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">{item.captain ?? '—'}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={3} className="px-3 py-4 text-center text-sm text-gray-500">
                                                        <p>No barangays found.</p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* West Side Barangays */}
                        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                            <div className="border-b border-primary/20 bg-primary/10 p-5">
                                <h4 className="flex items-center text-xl font-bold text-primary">
                                    <i className="fas fa-moon mr-3"></i> Kanluran (West) Barangays
                                </h4>
                            </div>
                            <div className="p-6">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                    No.
                                                </th>
                                                <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                    Barangay
                                                </th>
                                                <th className="px-3 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                                    Captain
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {westBarangays.length > 0 ? (
                                                westBarangays.map((item) => (
                                                    <tr key={item.id}>
                                                        <td className="px-3 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                                            {item.index}
                                                        </td>
                                                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">{item.barangay}</td>
                                                        <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-700">{item.captain ?? '—'}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={3} className="px-3 py-4 text-center text-sm text-gray-500">
                                                        <p>No barangays found.</p>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                        <div className="border-b border-primary/20 bg-primary/10 p-5">
                            <h4 className="flex items-center text-xl font-bold text-primary">
                                <i className="fas fa-star mr-3"></i> Barangay Highlights
                            </h4>
                        </div>

                        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
                            {barangayHighlights.length > 0 ? (
                                barangayHighlights.map((item) => (
                                    <div key={item.id} className="border-l-4 border-primary pl-4">
                                        <h5 className="text-dark mb-2 font-bold">{item.barangay}</h5>
                                        <p className="mb-1 text-sm text-gray-700">Captain: {item.captain ?? '—'}</p>
                                        <p className="text-sm text-gray-700">{item.highlights}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="col-span-3 text-center text-gray-500">No highlights available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
