import { usePage } from '@inertiajs/react';

interface SocialWallPost {
    id: number;
    user_id: number;
    caption: string;
    image: string;
    likes_count: number;
    is_approved: number;
    created_at: string;
    updated_at: string;
}

type PageProps = {
    posts: SocialWallPost[];
};

export default function SocialPost() {
    const { posts } = usePage<PageProps>().props;
    return (
        <section className="py-4 md:py-8">
            <div className="container mx-auto px-4">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                        <h2 className="flex items-center text-lg font-bold text-primary">
                            <i className="fas fa-share-alt mr-2"></i> My Social Posts
                        </h2>
                        <a href="#" className="text-sm text-primary hover:underline">
                            View All
                        </a>
                    </div>

                    <div className="p-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                            {posts.length > 0 ? (
                                posts.map((post, index) => (
                                    <div key={index} className="group relative">
                                        <div className="absolute -inset-1 rounded-lg bg-primary/20 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>

                                        <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-gray-50">
                                            <img src={`/storage/${post.image}`} alt="Post" className="h-full w-full object-cover" />

                                            {!post.is_approved && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/80 lg:h-40 lg:w-40">
                                                        <span className="text-sm font-semibold text-white">Pending</span>
                                                    </div>
                                                </div>
                                            )}

                                            {post.is_approved === 1 && (
                                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
                                                    <i className="far fa-heart text-2xl text-white"></i>
                                                    <p className="text-center text-lg font-semibold text-white">{post.likes_count ?? 0}</p>
                                                </div>
                                            )}

                                            {post.is_approved === 2 && (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/50 lg:h-40 lg:w-40">
                                                        <span className="text-sm font-semibold text-white">Rejected</span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Gradient footer */}
                                            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-primary/70 to-transparent p-2"></div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                                    <div className="mb-4 rounded-full bg-gray-100 p-6">
                                        <i className="fas fa-share-alt text-3xl text-gray-400"></i>
                                    </div>
                                    <h3 className="mb-2 text-lg font-semibold text-gray-700">No posts yet</h3>
                                    <p className="mb-4 text-gray-500">You haven't created any social posts yet.</p>
                                    <a
                                        href="/socialwall/new"
                                        className="rounded-full border border-primary bg-primary px-4 py-2 text-white transition-colors duration-300 hover:bg-white hover:text-primary"
                                    >
                                        Create Your First Post
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
