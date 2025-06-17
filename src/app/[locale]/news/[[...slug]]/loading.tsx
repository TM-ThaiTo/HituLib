import { Skeleton } from '@/components/ui/skeleton';

export function ContentLoading() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      {/* Breadcrumb skeleton */}
      <div className="mb-6 flex items-center space-x-2">
        <Skeleton className="h-4 w-20 bg-gray-300" />
        <Skeleton className="h-4 w-4 bg-gray-300" />
        <Skeleton className="h-4 w-32 bg-gray-300" />
      </div>

      {/* Title skeleton */}
      <Skeleton className="mb-6 h-8 w-3/4 bg-gray-300" />

      {/* Meta info skeleton */}
      <div className="mb-8 flex items-center space-x-4">
        <Skeleton className="h-4 w-24 bg-gray-300" />
        <Skeleton className="h-4 w-24 bg-gray-300" />
        <Skeleton className="h-4 w-24 bg-gray-300" />
      </div>

      {/* Featured image skeleton */}
      <Skeleton className="mb-8 h-[400px] w-full rounded-lg bg-gray-300" />

      {/* Content skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-4 w-full bg-gray-300" />
        <Skeleton className="h-4 w-full bg-gray-300" />
        <Skeleton className="h-4 w-3/4 bg-gray-300" />
        <Skeleton className="h-4 w-full bg-gray-300" />
        <Skeleton className="h-4 w-5/6 bg-gray-300" />
        <Skeleton className="h-4 w-full bg-gray-300" />
        <Skeleton className="h-4 w-4/5 bg-gray-300" />
        <Skeleton className="h-4 w-full bg-gray-300" />
      </div>

      {/* Latest news skeleton */}
      <div className="mt-12">
        <Skeleton className="mb-6 h-6 w-48 bg-gray-300" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-4">
              <Skeleton className="h-24 w-24 flex-shrink-0 rounded-lg bg-gray-300" />
              <div className="flex flex-1 flex-col justify-between">
                <Skeleton className="h-4 w-3/4 bg-gray-300" />
                <Skeleton className="h-4 w-full bg-gray-300" />
                <Skeleton className="h-4 w-1/2 bg-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SidebarLoading() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-3/4 bg-gray-300" />
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-4 w-full bg-gray-300" />
          <Skeleton className="h-4 w-5/6 bg-gray-300" />
        </div>
      ))}
    </div>
  );
}

export default function NewsLoading() {
  return (
    <div className="max-w-screen-container mx-auto mt-8 px-4 sm:px-6 lg:px-8 2xl:px-0">
      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        <ContentLoading />
        <div className="hidden w-full lg:block lg:w-[300px]">
          <SidebarLoading />
        </div>
      </div>
      <div className="mt-8 block lg:hidden">
        <SidebarLoading />
      </div>
    </div>
  );
}
