export default function OpacLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-container mx-auto mt-8 px-4 sm:px-6 lg:px-8 2xl:px-0">
      {children}
    </div>
  );
}
