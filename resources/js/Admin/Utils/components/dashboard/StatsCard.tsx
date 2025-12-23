type StatCardProps = {
    title: string;
    value: string | number;
    icon: string;
    iconColor: string;
    bgColor: string;
    status?: string;
    badgeColor?: string;
    trend?: number;
};

const StatsCard: React.FC<StatCardProps> = ({ title, value, icon, iconColor, bgColor, status, badgeColor, trend }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-gray-700">
            <div className="flex items-start justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${bgColor} transition-transform group-hover:scale-110`}>
                    <i className={`fa-solid ${icon} text-xl ${iconColor}`}></i>
                </div>

                {status && badgeColor && (
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${badgeColor}`}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                )}
            </div>

            <div className="mt-6">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>

                <div className="mt-2 flex items-baseline space-x-2">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white/90">{value}</h3>

                    {typeof trend === 'number' && (
                        <span
                            className={`text-sm font-medium ${trend > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
                        >
                            {trend > 0 ? '↗' : '↘'} {Math.abs(trend)}%
                        </span>
                    )}
                </div>
            </div>

            {/* Subtle animated background */}
            <div className="absolute -right-10 -bottom-10 h-20 w-20 rounded-full bg-gradient-to-br from-white/10 to-transparent transition-all duration-500 group-hover:scale-150 group-hover:opacity-50 dark:from-white/5"></div>
        </div>
    );
};

export default StatsCard;
