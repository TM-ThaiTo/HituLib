export default function Loading() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-4">
      <div className="mb-4 h-10 w-3/4 animate-pulse rounded bg-gray-200"></div>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-1/3">
          <div className="h-80 animate-pulse rounded bg-gray-200"></div>
        </div>
        <div className="space-y-4 md:w-2/3">
          <div className="h-6 w-1/2 animate-pulse rounded bg-gray-200"></div>
          <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200"></div>
          <div className="h-6 w-2/3 animate-pulse rounded bg-gray-200"></div>
          <div className="h-6 w-1/2 animate-pulse rounded bg-gray-200"></div>
          <div className="h-20 animate-pulse rounded bg-gray-200"></div>
          <div className="flex gap-2">
            <div className="h-10 w-24 animate-pulse rounded bg-gray-200"></div>
            <div className="h-10 w-24 animate-pulse rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
      <div className="mt-8 h-40 animate-pulse rounded bg-gray-200"></div>
    </div>
  );
}
