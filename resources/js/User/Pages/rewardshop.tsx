import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import RewardsCard from '@UserUtils/components/Cards/RewardsCard';
import ActiveFilters from '@UserUtils/components/Ui/ActiveFilters';
import EmptyState from '@UserUtils/components/Ui/EmptyState';
import FlashMessage from '@UserUtils/components/Ui/ErrorToast';
import FilterButtons from '@UserUtils/components/Ui/FilterButtons';
import SearchBar from '@UserUtils/components/Ui/SearchBar';
import { useSearchFilter } from '@UserUtils/hooks/useSearchFilter';
import { useMemo } from 'react';

type RewardsProps = {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    image: string;
    status: string;
};

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type PageProps = {
    banner: PageBannerProps;
    flash?: {
        success?: string;
        error?: string;
    };
    errors?: {
        error?: string;
        [key: string]: string | undefined;
    };
    items: RewardsProps[];
};

export default function RewardShop() {
    const { flash, errors, items, banner } = usePage<PageProps>().props;

    const { searchTerm, setSearchTerm, selectedFilter, setSelectedFilter, filteredData, clearFilters, hasActiveFilters } = useSearchFilter({
        data: items,
        searchFields: ['name', 'category', 'description'],
        filterField: 'category',
        initialFilter: 'all',
    });

    const title = 'Pakil Tourism | Reward Shop';
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
                    imageSrc={banner?.image ? `${banner.image}` : '/User/User/Images/church.jpg'}
                ></Banner>
            ) : (
                <div className="h-[15vh]"></div>
            )}

            {flash?.success && <FlashMessage type="success" message={flash.success} duration={3000} key={`success-${Date.now()}`} />}
            {errors?.error && <FlashMessage type="error" message={errors.error} key={`error-${Date.now()}`} duration={3000} />}
            {flash?.error && errors?.error !== flash.error && (
                <FlashMessage type="error" key={`flash-error-${Date.now()}`} message={flash.error} duration={3000} />
            )}

            <section className="bg-gradient-to-b py-6 md:py-12">
                <div className="container mx-auto px-4">
                    {items.length > 0 ? (
                        <PageTitle
                            title="REWARDS"
                            subtitle="Explore Gamification Rewards"
                            desc="Discover the gamification rewards that you can redeem"
                        />
                    ) : (
                        <PageTitle
                            title="NO REWARDS AVAILABLE"
                            subtitle="Currently No Rewards To Explore"
                            desc="Please check back later for updates"
                        />
                    )}
                    {items.length > 0 && (
                        <div className="mb-8">
                            <div className="flex flex-col gap-4 md:flex-row">
                                <SearchBar
                                    placeholder="Search rewards by name, category, or description..."
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
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                    {filteredData.map((item, index) => (
                                        <RewardsCard key={index} item={item} />
                                    ))}
                                </div>
                            ) : (
                                <EmptyState
                                    title="No Reward found"
                                    message="Try adjusting your search terms or filters."
                                    actionText="Clear All Filters"
                                    onAction={clearFilters}
                                />
                            )}
                        </>
                    ) : (
                        <EmptyState
                            title="No Rewards Available"
                            message="We're working on adding new rewards. Please check back soon."
                            actionText="Return Home"
                            onAction={() => (window.location.href = '/')}
                        />
                    )}

                    {/* <div className="mt-8 flex justify-center">
                        <nav className="flex items-center space-x-2">
                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                                <i className="fas fa-chevron-left text-xs"></i>
                            </button>
                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">1</button>
                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                                2
                            </button>
                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                                3
                            </button>
                            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                                <i className="fas fa-chevron-right text-xs"></i>
                            </button>
                        </nav>
                    </div> */}
                </div>
            </section>
        </>
    );
}
