import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface User {
    avatar?: string;
    first_name?: string;
}

interface SocialWallPost {
    id: number;
    user_id: number;
    caption: string;
    image: string;
    likes_count: number;
    is_approved: boolean;
    user: User;
    profile: User;
    has_liked?: boolean;
    created_at: string;
}

interface Props {
    post: SocialWallPost;
}

export default function SocialWallPost({ post }: Props) {
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
            alert('Failed to update like. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <img src={`/storage/${post.image}`} alt={post.caption || 'Social post'} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="p-4">
                <p className="mb-3 line-clamp-2 text-xs text-gray-700">"{post.caption}"</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                    <div className="flex items-center">
                        <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-blue-100 p-0.5">
                            <img
                                src={post.user?.avatar ? `${post.user.avatar}` : '/images/user/User.png'}
                                className="h-full w-full rounded-full"
                                alt="User profile"
                            />
                        </div>
                        <span className="text-xs font-medium text-gray-700">{post.profile.first_name ?? 'Anonymous'}</span>
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
