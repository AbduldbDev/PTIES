import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const MonthlyVisitsChart = () => {
    const [data, setData] = useState<number[]>(Array(12).fill(0));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/Admin/stats/monthly-visits');
                const resData: Record<string, number> = await res.json();

                // Prepare chart data in order and rotate to have current month on the right
                const chartData = Array(12).fill(0);
                for (let i = 1; i <= 12; i++) {
                    chartData[i - 1] = resData[i.toString()] || 0;
                }

                // Rotate array so current month is last
                const currentMonth = new Date().getMonth(); // 0-11
                const rotatedData = [...chartData.slice(currentMonth + 1), ...chartData.slice(0, currentMonth + 1)];

                // Rotate labels similarly
                const rotatedLabels = [...MONTH_NAMES.slice(currentMonth + 1), ...MONTH_NAMES.slice(0, currentMonth + 1)];

                setData(rotatedData);
                setLabels(rotatedLabels);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const [labels, setLabels] = useState<string[]>(MONTH_NAMES);

    if (loading) return <p className="text-gray-500">Loading chart...</p>;

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Visits',
                data,
                fill: true,
                borderColor: 'rgba(59, 130, 246, 0.9)',
                backgroundColor: 'rgba(59, 130, 246, 0.3)',
                tension: 0.4,
                pointBackgroundColor: 'rgba(59, 130, 246, 0.9)',
                pointRadius: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true },
        },
    };

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow dark:border-gray-800 dark:bg-gray-900">
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">Monthly Website Visits</h3>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default MonthlyVisitsChart;
