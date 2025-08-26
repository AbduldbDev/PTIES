import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import Establishment from '@UserUtils/components/Cards/Establishment';
import ActiveFilters from '@UserUtils/components/Ui/ActiveFilters';
import EmptyState from '@UserUtils/components/Ui/EmptyState';
import FilterButtons from '@UserUtils/components/Ui/FilterButtons';
import SearchBar from '@UserUtils/components/Ui/SearchBar';
import { useSearchFilter } from '@UserUtils/hooks/useSearchFilter';
import { useMemo } from 'react';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type EstablishmentProps = {
    id: number;
    type: string;
    name: string;
    location: string;
    contact: string;
    facebook: string;
    long: string;
    lat: string;
    image: string;
};

interface PageProps {
    banner: PageBannerProps;
    establishments: EstablishmentProps[];
    [key: string]: unknown;
}

export default function Guide() {
    const { banner, establishments } = usePage<PageProps>().props;

    const { searchTerm, setSearchTerm, selectedFilter, setSelectedFilter, filteredData, clearFilters, hasActiveFilters } = useSearchFilter({
        data: establishments,
        searchFields: ['name', 'location', 'type'],
        filterField: 'type',
        initialFilter: 'all',
    });

    const title = 'Pakil Tourism | About';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';

    // Get filter options from data
    const filterOptions = useMemo(() => {
        const types = establishments.map((est) => est.type?.toLowerCase() || 'other');
        const uniqueTypes = ['all', ...new Set(types)].filter((type) => type);

        return uniqueTypes.map((type) => ({
            value: type,
            label: type.charAt(0).toUpperCase() + type.slice(1),
        }));
    }, [establishments]);

    const activeFilters = [
        ...(searchTerm
            ? [
                  {
                      key: 'search',
                      value: searchTerm,
                      label: 'Search',
                      onRemove: () => setSearchTerm(''),
                  },
              ]
            : []),
        ...(selectedFilter !== 'all'
            ? [
                  {
                      key: 'type',
                      value: selectedFilter,
                      label: 'Type',
                      onRemove: () => setSelectedFilter('all'),
                  },
              ]
            : []),
    ];

    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>

            <Banner
                title={banner?.title}
                subtitle={banner?.subtitle}
                desc={banner?.desc}
                imageSrc={banner?.image ? `/storage/${banner.image}` : '/User/Images/church.jpg'}
            ></Banner>

            {establishments?.length > 0 && (
                <section className="py-10">
                    <div className="container mx-auto max-w-7xl px-6">
                        <div>
                            <PageTitle
                                title="Essentials"
                                subtitle="Stay & Dine"
                                desc="Discover comfortable accommodations and delightful food establishments in Pakil"
                            />

                            <div className="mb-8">
                                <div className="flex flex-col gap-4 md:flex-row">
                                    <SearchBar
                                        placeholder="Search establishments by name, location, or type..."
                                        onSearch={setSearchTerm}
                                        value={searchTerm}
                                        className="max-w-2xl flex-1"
                                    />

                                    <FilterButtons filters={filterOptions} selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
                                </div>

                                {hasActiveFilters && (
                                    <ActiveFilters
                                        filters={activeFilters}
                                        resultsCount={filteredData.length}
                                        totalCount={establishments.length}
                                        onClearAll={clearFilters}
                                        className="mt-4"
                                    />
                                )}
                            </div>

                            {filteredData.length > 0 ? (
                                <>
                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                        {filteredData.map((item) => (
                                            <Establishment key={item.id} details={item} />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <EmptyState
                                    title="No establishments found"
                                    message="Try adjusting your search terms or filters."
                                    actionText="Clear All Filters"
                                    onAction={clearFilters}
                                />
                            )}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
