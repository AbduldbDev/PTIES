export default function SocialWallPost() {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md">
            <img src="/User/Images/church.jpg" alt="Pakil Sunset" className="h-40 w-full object-cover" />
            <div className="p-4">
                <p className="mb-3 line-clamp-2 text-xs text-gray-700">"Sunsets by Laguna Lake are magical. Perfect end to a day in Pakil."</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                    <div className="flex items-center">
                        <img src="/Images/ceo.png" className="mr-1 h-6 w-6 rounded-full" />
                        <span className="text-xs font-medium">@traveler</span>
                    </div>
                    <button className="text-xs text-gray-400 hover:text-red-500">
                        <i className="far fa-heart"></i> 64
                    </button>
                </div>
            </div>
        </div>
    );
}
