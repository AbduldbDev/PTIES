import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    image?: string;
}

interface SocialWallPost {
    id: number;
    user_id: number;
    caption: string;
    image: string;
    likes_count: number;
    is_approved: boolean;
    user: User;
    has_liked?: boolean;
    created_at: string;
    updated_at: string;
}

interface Props {
    post: SocialWallPost;
}

export default function FeaturedPost({ post }: Props) {
    const { auth } = usePage().props as { auth?: { user?: { email: string } } };

    const [isLiked, setIsLiked] = useState(post.has_liked || false);
    const [likeCount, setLikeCount] = useState(post.likes_count || 0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLiked(post.has_liked || false);
        setLikeCount(post.likes_count || 0);
    }, [post.has_liked, post.likes_count]);

    const handleLikeClick = async () => {
        if (!auth?.user) {
            window.location.href = '/Login';
            return;
        }

        if (isLoading) return;

        const prevLiked = isLiked;
        const prevCount = likeCount;

        setIsLiked(!prevLiked);
        setLikeCount(prevLiked ? prevCount - 1 : prevCount + 1);
        setIsLoading(true);

        try {
            const response = await fetch('/socialwall/like', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                body: JSON.stringify({ post_id: post.id }),
            });

            if (!response.ok) throw new Error('Failed to update like');

            const data = await response.json();
            setIsLiked(data.has_liked);
            setLikeCount(data.likes_count);
        } catch (err) {
            setIsLiked(prevLiked);
            setLikeCount(prevCount);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md md:rounded-xl md:shadow-lg">
            <div className="relative aspect-video w-full">
                <img src={`/storage/${post.image}`} alt={post.caption} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute top-4 right-4 rounded-full bg-white/90 p-2 shadow">
                    <i className="fas fa-crown text-xl text-secondary"></i>
                </div>
            </div>

            <div className="p-4 md:p-6">
                <p className="mb-3 text-base text-gray-700 italic md:mb-4 md:text-lg">"{post.caption}"</p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-3 md:pt-4">
                    <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-100 p-0.5">
                            <img
                                src={post.user?.image ? `/storage/${post.user.image}` : '/images/user/User.png'}
                                className="h-full w-full rounded-full object-cover"
                                alt="User profile"
                            />
                        </div>

                        <div>
                            <p className="text-dark text-sm md:font-medium">{post.user.email}</p>
                            <p className="text-xs text-gray-500">
                                Posted on{' '}
                                {new Date(post.created_at).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={handleLikeClick}
                        disabled={isLoading}
                        className={`flex items-center text-base transition-colors duration-200 ${
                            isLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                        } ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        <i className={`${isLiked ? 'fas' : 'far'} fa-heart mr-1`}></i>
                        {likeCount}
                    </button>
                </div>
            </div>
        </div>
    );
}
