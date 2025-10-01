import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import ActiveFilters from '@UserUtils/components/Ui/ActiveFilters';
import EmptyState from '@UserUtils/components/Ui/EmptyState';
import FilterButtons from '@UserUtils/components/Ui/FilterButtons';
import SearchBar from '@UserUtils/components/Ui/SearchBar';
import { useSearchFilter } from '@UserUtils/hooks/useSearchFilter';
import { useMemo } from 'react';
import AttractionsCard from '../Utils/components/Cards/AttractionsCard';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};
type AttractionProps = {
    id: number;
    attraction_id: string;
    name: string;
    category: string;
    operating_hours: string;
    information: string;
    history: string;
    local_rules: string;
    fun_facts: string;
    fees: string;
    distance: string;
    points: number;
    long: string;
    lat: string;
    images: string;
    qr_path: string;
    contact: Contact[];
};

type Contact = {
    name: string;
    position: string;
    contact: string;
};

type PageProps = {
    banner: PageBannerProps;
    items: AttractionProps[];
};

export default function Attractions() {
    const { banner, items } = usePage<PageProps>().props;

    const { searchTerm, setSearchTerm, selectedFilter, setSelectedFilter, filteredData, clearFilters, hasActiveFilters } = useSearchFilter({
        data: items,
        searchFields: ['name', 'category', 'information'],
        filterField: 'category',
        initialFilter: 'all',
    });

    const title = 'Pakil Tourism | Attractions';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';

    const filterOptions = useMemo(() => {
        const types = items.map((est) => est.category?.toLowerCase() || 'other');
        const uniqueTypes = ['all', ...new Set(types)].filter((type) => type);

        return uniqueTypes.map((type) => ({
            value: type,
            label: type.charAt(0).toUpperCase() + type.slice(1),
        }));
    }, [items]);

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

            {banner ? (
                <Banner
                    title={banner?.title}
                    subtitle={banner?.subtitle}
                    desc={banner?.desc}
                    imageSrc={banner?.image ? `${banner.image}` : '/User/Images/church.jpg'}
                ></Banner>
            ) : (
                <div className="h-[15vh]"></div>
            )}

            <section className="px-4 py-16">
                <div className="container mx-auto">
                    {items.length > 0 ? (
                        <PageTitle
                            title="EXPLORE"
                            subtitle="Explore Pakil's Attractions"
                            desc="Discover the cultural and natural wonders of our beautiful town"
                        />
                    ) : (
                        <PageTitle
                            title="NO ATTRACTIONS AVAILABLE"
                            subtitle="Currently No Attractions To Explore"
                            desc="Please check back later for updates"
                        />
                    )}

                    {items.length > 0 && (
                        <div className="mb-8">
                            <div className="flex flex-col gap-4 md:flex-row">
                                <SearchBar
                                    placeholder="Search attractions by name, information, or category..."
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
                                    totalCount={items.length}
                                    onClearAll={clearFilters}
                                    className="mt-4"
                                />
                            )}
                        </div>
                    )}

                    {items.length > 0 ? (
                        <>
                            {filteredData.length > 0 ? (
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                                    {filteredData.map((items, index) => (
                                        <AttractionsCard key={index} item={items} />
                                    ))}
                                </div>
                            ) : (
                                <EmptyState
                                    title="No Attractions found"
                                    message="Try adjusting your search terms or filters."
                                    actionText="Clear All Filters"
                                    onAction={clearFilters}
                                />
                            )}
                        </>
                    ) : (
                        <EmptyState
                            title="No Attractions Available"
                            message="We're working on adding new attractions. Please check back soon."
                            actionText="Return Home"
                            onAction={() => (window.location.href = '/')}
                        />
                    )}
                </div>
            </section>
        </>
    );
}
