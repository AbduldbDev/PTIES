import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export interface MonthlyVisit {
    month: string;
    visits: number;
    uniqueVisitors: number;
    [key: string]: string | number;
}

export interface VisitChartProps {
    data?: MonthlyVisit[];
    height?: number;
    width?: number | `${number}%`;
    darkMode?: boolean;
}

// Color schemes for light and dark mode
const LIGHT_COLORS = {
    primary: '#3b82f6',
    secondary: '#10b981',
    accent: '#f59e0b',
    background: '#ffffff',
    card: '#f8fafc',
    text: '#1f2937',
    textMuted: '#6b7280',
    border: '#e5e7eb',
    grid: '#e5e7eb',
    tooltip: '#ffffff',
};

const DARK_COLORS = {
    primary: '#60a5fa',
    secondary: '#34d399',
    accent: '#fbbf24',
    background: '#1f2937',
    card: '#374151',
    text: '#f9fafb',
    textMuted: '#d1d5db',
    border: '#4b5563',
    grid: '#374151',
    tooltip: '#374151',
};

const VisitChart: React.FC<VisitChartProps> = ({ height = 400, width = '100%', darkMode = false }) => {
    const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
    const [isLoading, setIsLoading] = useState(true);
    const [isDark, setIsDark] = useState(darkMode);
    const [data, setData] = useState<MonthlyVisit[]>([]);
    const [error, setError] = useState<string | null>(null);

    const colors = isDark ? DARK_COLORS : LIGHT_COLORS;

    // Fetch data from Laravel API
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch('/Admin/analytics/monthly-visits');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const visitData = await response.json();
                setData(visitData);
            } catch (error) {
                console.error('Error fetching visit data:', error);
                setError('Failed to load analytics data');
                // Fallback to empty data instead of default data
                setData([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setIsDark(darkMode);
    }, [darkMode]);

    // Calculate totals for summary
    const totalVisits = data.reduce((sum, item) => sum + item.visits, 0);
    const totalUniqueVisitors = data.reduce((sum, item) => sum + item.uniqueVisitors, 0);

    // Custom tooltip
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div
                    className="rounded border p-3 shadow-lg"
                    style={{
                        backgroundColor: colors.tooltip,
                        borderColor: colors.border,
                        color: colors.text,
                    }}
                >
                    <p className="font-semibold">{`Month: ${label}`}</p>
                    <p style={{ color: colors.primary }}>{`Total Visits: ${payload[0].value.toLocaleString()}`}</p>
                    <p style={{ color: colors.secondary }}>{`Unique Visitors: ${payload[1]?.value.toLocaleString()}`}</p>
                </div>
            );
        }
        return null;
    };

    const renderLegend = (props: any) => {
        const { payload } = props;
        return (
            <div className="mt-4 flex justify-center space-x-4">
                {payload.map((entry: any, index: number) => (
                    <div key={`legend-${index}`} className="flex items-center space-x-2">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span style={{ color: colors.text }}>{entry.value}</span>
                    </div>
                ))}
            </div>
        );
    };

    const chartComponents = {
        bar: (
            <ResponsiveContainer width={width} height={height}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
                    <XAxis dataKey="month" tick={{ fill: colors.text }} axisLine={{ stroke: colors.border }} />
                    <YAxis tick={{ fill: colors.text }} axisLine={{ stroke: colors.border }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend content={renderLegend} />
                    <Bar dataKey="visits" name="Total Visits" fill={colors.primary} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="uniqueVisitors" name="Unique Visitors" fill={colors.secondary} radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        ),

        line: (
            <ResponsiveContainer width={width} height={height}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
                    <XAxis dataKey="month" tick={{ fill: colors.text }} axisLine={{ stroke: colors.border }} />
                    <YAxis tick={{ fill: colors.text }} axisLine={{ stroke: colors.border }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend content={renderLegend} />
                    <Line
                        type="monotone"
                        dataKey="visits"
                        name="Total Visits"
                        stroke={colors.primary}
                        strokeWidth={3}
                        dot={{ r: 4, fill: colors.primary }}
                    />
                    <Line
                        type="monotone"
                        dataKey="uniqueVisitors"
                        name="Unique Visitors"
                        stroke={colors.secondary}
                        strokeWidth={3}
                        dot={{ r: 4, fill: colors.secondary }}
                    />
                </LineChart>
            </ResponsiveContainer>
        ),

        pie: (
            <ResponsiveContainer width={width} height={height}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }: any) => `${name}: ${value}`}
                        outerRadius={120}
                        fill={colors.primary}
                        dataKey="visits"
                        nameKey="month"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={[colors.primary, colors.secondary, colors.accent][index % 3]} />
                        ))}
                    </Pie>
                    <Tooltip
                        formatter={(value) => value.toLocaleString()}
                        contentStyle={{
                            backgroundColor: colors.tooltip,
                            borderColor: colors.border,
                            color: colors.text,
                        }}
                    />
                    <Legend content={renderLegend} />
                </PieChart>
            </ResponsiveContainer>
        ),
    };

    const renderChart = () => {
        if (isLoading) {
            return (
                <div className="flex items-center justify-center" style={{ height }}>
                    <div className="text-lg" style={{ color: colors.text }}>
                        Loading chart data...
                    </div>
                </div>
            );
        }

        if (error) {
            return (
                <div className="flex items-center justify-center" style={{ height }}>
                    <div className="text-center">
                        <div className="mb-2 text-lg text-red-500">Error</div>
                        <div style={{ color: colors.text }}>{error}</div>
                    </div>
                </div>
            );
        }

        if (data.length === 0) {
            return (
                <div className="flex items-center justify-center" style={{ height }}>
                    <div className="text-lg" style={{ color: colors.text }}>
                        No data available
                    </div>
                </div>
            );
        }

        return chartComponents[chartType] || null;
    };

    const getButtonClass = (type: 'bar' | 'line' | 'pie') => {
        const baseClass = 'rounded-lg px-4 py-2 transition-colors font-medium';
        const isActive = chartType === type;

        if (isActive) {
            return `${baseClass} bg-gray-600 text-white`;
        } else {
            return `${baseClass} ${isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`;
        }
    };

    const cardClass = `rounded-lg p-6 shadow-lg transition-colors ${
        isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
    }`;

    const textClass = isDark ? 'text-gray-100' : 'text-gray-800';
    const textMutedClass = isDark ? 'text-gray-400' : 'text-gray-600';
    const tableHeaderClass = isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-700';
    const tableRowClass = isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50';
    const tableFooterClass = isDark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700';

    return (
        <div className={cardClass}>
            {/* Header */}
            <div className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-center">
                <div>
                    <h2 className={`text-2xl font-bold ${textClass}`}>Website Traffic Analytics</h2>
                    <p className={textMutedClass}>Monthly visit statistics</p>
                </div>

                {/* Summary Cards */}
                <div className="mt-4 flex space-x-4 md:mt-0">
                    <div className={`rounded-lg border p-3 ${isDark ? 'border-gray-800 bg-gray-900/20' : 'border-gray-200 bg-gray-50'}`}>
                        <p className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Total Visits</p>
                        <p className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>{totalVisits.toLocaleString()}</p>
                    </div>
                    <div className={`rounded-lg border p-3 ${isDark ? 'border-green-800 bg-green-900/20' : 'border-green-200 bg-green-50'}`}>
                        <p className={`text-sm font-semibold ${isDark ? 'text-green-300' : 'text-green-600'}`}>Unique Visitors</p>
                        <p className={`text-2xl font-bold ${isDark ? 'text-green-100' : 'text-green-800'}`}>{totalUniqueVisitors.toLocaleString()}</p>
                    </div>
                </div>
            </div>

            {/* Chart Type Selector */}
            <div className="mb-6 flex space-x-2">
                <button onClick={() => setChartType('bar')} className={getButtonClass('bar')}>
                    Bar Chart
                </button>
                <button onClick={() => setChartType('line')} className={getButtonClass('line')}>
                    Line Chart
                </button>
                <button onClick={() => setChartType('pie')} className={getButtonClass('pie')}>
                    Pie Chart
                </button>
            </div>

            {/* Chart */}
            {renderChart()}

            {/* Data Table */}
            {data.length > 0 && (
                <div className="mt-8">
                    <h3 className={`mb-4 text-lg font-semibold ${textClass}`}>Monthly Data</h3>
                    <div className="overflow-x-auto">
                        <table className={`min-w-full border ${isDark ? 'border-gray-600 bg-gray-800' : 'border-gray-200 bg-white'}`}>
                            <thead>
                                <tr className={tableHeaderClass}>
                                    <th className="border-b px-4 py-2 text-left dark:border-gray-700">Month</th>
                                    <th className="border-b px-4 py-2 text-right dark:border-gray-700">Total Visits</th>
                                    <th className="border-b px-4 py-2 text-right dark:border-gray-700">Unique Visitors</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className={tableRowClass}>
                                        <td className={`border-b px-4 py-2 dark:border-gray-700 ${textClass}`}>{item.month}</td>
                                        <td className={`border-b px-4 py-2 text-right dark:border-gray-700 ${textClass}`}>
                                            {item.visits.toLocaleString()}
                                        </td>
                                        <td className={`border-b px-4 py-2 text-right dark:border-gray-700 ${textClass}`}>
                                            {item.uniqueVisitors.toLocaleString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className={tableFooterClass}>
                                    <td className="border-t px-4 py-2 font-semibold dark:border-gray-700">Total</td>
                                    <td className="border-t px-4 py-2 text-right font-semibold dark:border-gray-700">
                                        {totalVisits.toLocaleString()}
                                    </td>
                                    <td className="border-t px-4 py-2 text-right font-semibold dark:border-gray-700">
                                        {totalUniqueVisitors.toLocaleString()}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VisitChart;
