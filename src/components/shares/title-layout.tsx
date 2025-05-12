type TitleLayoutProps = {
  title: string;
};

export default function TitleLayout({ title }: TitleLayoutProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xl font-bold">{title}</span>

      <div className="ml-1.5 flex flex-1 items-center">
        <div className="h-3 w-3 rounded-full bg-blue-600"></div>
        <div className="flex w-full flex-col justify-center gap-[3px]">
          <div className="h-[1px] w-full bg-gray-300"></div>
          <div className="h-[1px] w-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
