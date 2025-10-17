export default function SuccessToast() {
    return (
        <div className="fixed top-20 right-4 z-50 w-full max-w-sm">
            <div className="animate-fade-in-up flex items-start space-x-3 rounded-lg border border-green-200 bg-green-50 p-4 shadow-lg">
                <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                        <i className="fas fa-check text-xs text-white"></i>
                    </div>
                </div>
                <div className="flex-1">
                    <h4 className="font-semibold text-green-800">Success</h4>
                    <p className="mt-1 text-sm text-green-700">Your action was completed successfully.</p>
                </div>
                <button className="flex-shrink-0 text-green-500 transition-colors hover:text-green-700">
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    );
}
