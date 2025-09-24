type Official = {
    id: number;
    name: string;
    position: string;
    term: string;
    image: string | null;
    biography?: string;
};
interface Props {
    official: Official;
}
export default function Officials({ official }: Props) {
    return (
        <div className="official-card flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <img src={official?.image || '/images/user/User.png'} alt={official?.name || 'Official'} className="h-full w-full object-cover" />

                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-primary/50 to-transparent p-4">
                    <span className="rounded-full bg-primary px-2 py-1 text-xs text-white">{official.position}</span>
                </div>
            </div>

            <div className="flex flex-grow flex-col p-5">
                <div className="flex-grow">
                    <h4 className="text-dark mb-1 text-lg font-bold">{official.name}</h4>
                    <p className="mb-3 text-sm text-gray-500">{official.position}</p>
                    <div className="mb-4 flex items-center text-xs text-gray-500">
                        <i className="far fa-calendar-alt mr-2 text-primary"></i>
                        <span>Term: {official.term}</span>
                    </div>
                </div>
                <button
                    className={`view-bio-btn mt-auto w-full rounded-lg py-2 text-sm font-medium transition-colors ${
                        official.biography ? 'bg-primary/10 text-primary hover:bg-primary/20' : 'cursor-not-allowed bg-gray-200 text-gray-400'
                    } `}
                    onClick={() => {
                        if (official.biography) {
                            window.location.href = `/about/biography/${official.id}`;
                        }
                    }}
                    disabled={!official.biography}
                >
                    {official.biography ? 'View Full Bio' : 'No Biography Available'}
                </button>
            </div>
        </div>
    );
}
