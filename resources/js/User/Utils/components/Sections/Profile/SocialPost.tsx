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
        <section className="py-1 lg:py-4">
            <div className="container mx-auto px-4">
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                        <h2 className="flex items-center text-lg font-bold text-primary sm:text-lg">
                            <i className="fas fa-share-alt mr-2 text-base sm:text-lg"></i>
                            <span className="text-sm sm:text-base"> My Social Posts</span>
                        </h2>
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
                                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/40 lg:h-40 lg:w-40">
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
                                    <div className="mb-3 rounded-full bg-gray-100 p-4 sm:mb-4 sm:p-6">
                                        <i className="fas fa-share-alt text-2xl text-gray-400 sm:text-3xl"></i>
                                    </div>
                                    <h3 className="mb-2 text-base font-semibold text-gray-700 sm:text-lg">No posts yet</h3>
                                    <p className="mb-4 text-sm text-gray-500 sm:text-base">You haven't created any social posts yet.</p>
                                    <a
                                        href="/socialwall/new"
                                        className="rounded-full border border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-primary sm:text-base"
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
