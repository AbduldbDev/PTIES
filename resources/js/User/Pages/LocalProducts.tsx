import { Head, usePage } from '@inertiajs/react';
import Banner from '@UserUtils/components/Banner/Banner';
import PageTitle from '@UserUtils/components/Banner/PageTitle';
import ProductsCard from '@UserUtils/components/Cards/LocalProducts';
import EmptyState from '@UserUtils/components/Ui/EmptyState';

type PageBannerProps = {
    title: string;
    subtitle: string;
    desc: string;
    image: string;
};

type Products = {
    category: string;
    name: string;
    description: string;
    highlights_title: string;
    highlights_content: string;
    image: string;
    exp: string;
};

export default function LocalProducts() {
    const { banner, products } = usePage<{
        banner: PageBannerProps;
        products: Products[];
    }>().props;

    const title = 'Pakil Tourism | Products';
    const description =
        'Discover Pakil’s festivals, attractions, and guides. Plan your stay, explore local eats, and earn rewards with QR experiences.';

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

            <section className="py-16">
                <div className="container mx-auto max-w-6xl px-4">
                    {products.length > 0 ? (
                        <PageTitle
                            title="Cultural Treasures"
                            subtitle="Pakil's Living Traditions"
                            desc="Celebrating the natural bounty and artistic heritage of our town."
                        />
                    ) : (
                        <PageTitle
                            title="NO PRODUCTS AVAILABLE"
                            subtitle="Currently No Products To Explore"
                            desc="Please check back later for updates"
                        />
                    )}

                    <div className="products-section">
                        {products.length === 0 ? (
                            <EmptyState
                                title="No Products Available"
                                message="We're currently updating our catalog. Please check back soon."
                                actionText="Return Home"
                                onAction={() => window.location.assign('/')}
                            />
                        ) : (
                            <>
                                {products.map((product, index) => (
                                    <ProductsCard key={product.name} personality={product} index={index} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
