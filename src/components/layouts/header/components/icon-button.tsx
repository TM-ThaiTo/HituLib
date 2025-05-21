import Icons from '@/components/shares/icons';
import CustomLink from '@/hooks/next-link';

const IconButton = ({
  blackIcon,
  blueIcon,
  href,
}: {
  blackIcon: React.ReactNode;
  blueIcon: React.ReactNode;
  href: string;
}) => {
  return (
    <CustomLink
      href={href}
      className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-white"
    >
      <div className="absolute transform transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
        {blackIcon}
      </div>
      <div className="absolute translate-y-[200%] transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {blueIcon}
      </div>
    </CustomLink>
  );
};

const IconButtonClose = () => {
  return (
    <div className="group flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white transition-colors duration-300">
      <Icons.close
        size={25}
        className="transform text-black transition-all duration-300 group-hover:rotate-180 group-hover:text-blue-500"
      />
    </div>
  );
};

const IconButtonSearch = () => {
  return (
    <div className="group relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-[#0a58ca] transition-colors duration-300">
      <Icons.chevronRight
        size={24}
        className="relative z-10 text-white transition-all duration-300 group-hover:-translate-x-[2px] group-hover:opacity-0"
      />
      <Icons.arrowRight
        size={24}
        className="absolute z-10 text-white opacity-0 transition-all duration-300 group-hover:translate-x-[2px] group-hover:opacity-100"
      />
    </div>
  );
};

export { IconButton, IconButtonClose, IconButtonSearch };
