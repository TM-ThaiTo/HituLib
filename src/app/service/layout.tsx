import LibraryList from '@/components/shares/library-list';

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="max-w-screen-container mx-auto mt-8 px-4 sm:px-6 lg:px-8 2xl:px-0">
            <div className="mt-8 flex flex-col gap-8 lg:flex-row">
                <div className="flex flex-1 flex-col gap-8">{children}</div>

                <div className="hidden w-full lg:block lg:w-[300px]">
                    <LibraryList />
                </div>
            </div>

            <div className="mt-8 block lg:hidden">
                <LibraryList />
            </div>
        </div>
    );
}
