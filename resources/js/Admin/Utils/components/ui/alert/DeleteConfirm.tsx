import { useState } from 'react';

type DeleteConfirmProps = {
    onDeleteConfirmed: () => void;
    message?: string; // optional confirmation message
};

export default function DeleteConfirm({ onDeleteConfirmed, message = 'Are you sure you want to delete this item?' }: DeleteConfirmProps) {
    const [open, setOpen] = useState(false);

    function openDialog() {
        setOpen(true);
    }

    function closeDialog() {
        setOpen(false);
    }

    function confirmDelete() {
        onDeleteConfirmed();
        closeDialog();
    }

    return (
        <>
            <div className="flex justify-center gap-2">
                <button
                    className="hover:text-error-500 dark:hover:text-error-500 text-gray-500 dark:text-gray-400"
                    aria-label="Delete"
                    onClick={openDialog}
                    title="Delete"
                >
                    {/* Trash icon svg */}
                    <svg className="fill-current" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.04142 4.29199C7.04142 3.04935 8.04878 2.04199 9.29142 2.04199H11.7081C12.9507 2.04199 13.9581 3.04935 13.9581 4.29199V4.54199H16.1252H17.166C17.5802 4.54199 17.916 4.87778 17.916 5.29199C17.916 5.70621 17.5802 6.04199 17.166 6.04199H16.8752V8.74687V13.7469V16.7087C16.8752 17.9513 15.8678 18.9587 14.6252 18.9587H6.37516C5.13252 18.9587 4.12516 17.9513 4.12516 16.7087V13.7469V8.74687V6.04199H3.8335C3.41928 6.04199 3.0835 5.70621 3.0835 5.29199C3.0835 4.87778 3.41928 4.54199 3.8335 4.54199H4.87516H7.04142V4.29199ZM15.3752 13.7469V8.74687V6.04199H13.9581H13.2081H7.79142H7.04142H5.62516V8.74687V13.7469V16.7087C5.62516 17.1229 5.96095 17.4587 6.37516 17.4587H14.6252C15.0394 17.4587 15.3752 17.1229 15.3752 16.7087V13.7469ZM8.54142 4.54199H12.4581V4.29199C12.4581 3.87778 12.1223 3.54199 11.7081 3.54199H9.29142C8.87721 3.54199 8.54142 3.87778 8.54142 4.29199V4.54199ZM8.8335 8.50033C9.24771 8.50033 9.5835 8.83611 9.5835 9.25033V14.2503C9.5835 14.6645 9.24771 15.0003 8.8335 15.0003C8.41928 15.0003 8.0835 14.6645 8.0835 14.2503V9.25033C8.0835 8.83611 8.41928 8.50033 8.8335 8.50033ZM12.9168 9.25033C12.9168 8.83611 12.581 8.50033 12.1668 8.50033C11.7526 8.50033 11.4168 8.83611 11.4168 9.25033V14.2503C11.4168 14.6645 11.7526 15.0003 12.1668 15.0003C12.581 15.0003 12.9168 14.6645 12.9168 14.2503V9.25033Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>

            {open && (
                <div className="bg-opacity-50 px-m fixed inset-0 z-999999999 flex items-center justify-center backdrop-blur-xs">
                    <div className="relative max-w-lg rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-[#1E2634]">
                        <button
                            onClick={closeDialog}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 dark:hover:text-white/90"
                            aria-label="Close"
                        >
                            <svg className="size-5" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.04289 16.5418C5.65237 16.9323 5.65237 17.5655 6.04289 17.956C6.43342 18.3465 7.06658 18.3465 7.45711 17.956L11.9987 13.4144L16.5408 17.9565C16.9313 18.347 17.5645 18.347 17.955 17.9565C18.3455 17.566 18.3455 16.9328 17.955 16.5423L13.4129 12.0002L17.955 7.45808C18.3455 7.06756 18.3455 6.43439 17.955 6.04387C17.5645 5.65335 16.9313 5.65335 16.5408 6.04387L11.9987 10.586L7.45711 6.04439C7.06658 5.65386 6.43342 5.65386 6.04289 6.04439C5.65237 6.43491 5.65237 7.06808 6.04289 7.4586L10.5845 12.0002L6.04289 16.5418Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </button>

                        <p className="text-md mb-6 pr-4 text-gray-700 dark:text-gray-400">{message}</p>

                        <div className="flex flex-col justify-end gap-6 sm:flex-row sm:items-center sm:gap-4">
                            <button
                                onClick={closeDialog}
                                type="button"
                                className="shadow-theme-xs flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 sm:w-auto dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                type="button"
                                className="bg-brand-500 shadow-theme-xs hover:bg-brand-600 flex w-full justify-center rounded-lg px-4 py-3 text-sm font-medium text-white sm:w-auto"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
