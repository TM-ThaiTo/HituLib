import Image from 'next/image';
import Link from 'next/link';
import MenuBar from './menu-bar';
import IconAction from './icon-action';

export default function MainHeader() {
  return (
    <header>
      <div className="flex h-[35px] items-center justify-between bg-[#0a58ca] px-4" />
      <div className="flex h-[81px] items-center justify-between bg-white px-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={'/logo-lib-hitu.png'}
              alt="HITU LIB"
              width={341}
              height={70}
              className="h-[65px] w-auto object-contain"
            />
          </Link>
          <MenuBar />
          <IconAction />
        </div>
      </div>
    </header>
  );
}
