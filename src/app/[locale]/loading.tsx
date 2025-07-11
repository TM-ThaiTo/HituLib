export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-[var(--primary)]" />
      <span className="ml-4 text-xl">Đang tải dữ liệu...</span>
    </div>
  );
}
