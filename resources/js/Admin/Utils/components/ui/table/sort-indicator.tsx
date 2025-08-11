import { SortDirection } from '.';

const SortIndicator = ({ direction }: { direction: SortDirection }) => (
    <span className="ml-1 flex flex-col">
        <svg
            className={`h-3 w-3 ${direction === 'asc' ? 'text-gray-700 dark:text-gray-300' : 'text-gray-300 dark:text-gray-700'}`}
            viewBox="0 0 8 5"
            fill="none"
        >
            <path
                d="M4.40962 0.585167C4.21057 0.300808 3.78943 0.300807 3.59038 0.585166L1.05071 4.21327C0.81874 4.54466 1.05582 5 1.46033 5H6.53967C6.94418 5 7.18126 4.54466 6.94929 4.21327L4.40962 0.585167Z"
                fill="currentColor"
            />
        </svg>
        <svg
            className={`h-3 w-3 ${direction === 'desc' ? 'text-gray-700 dark:text-gray-300' : 'text-gray-300 dark:text-gray-700'}`}
            viewBox="0 0 8 5"
            fill="none"
        >
            <path
                d="M4.40962 4.41483C4.21057 4.69919 3.78943 4.69919 3.59038 4.41483L1.05071 0.786732C0.81874 0.455343 1.05582 0 1.46033 0H6.53967C6.94418 0 7.18126 0.455342 6.94929 0.786731L4.40962 4.41483Z"
                fill="currentColor"
            />
        </svg>
    </span>
);

export default SortIndicator;
