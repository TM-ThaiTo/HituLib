export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500" />
            <span className="ml-4 text-xl">Đang tải dữ liệu...</span>
        </div>
    );
}