import Image from 'next/image';
import Link from 'next/link';
import MenuBar from './menu-bar';
import IconAction from './icon-action';
import { getMenuNavigation } from '@/services/portal-services';
import { MenuNavigations } from '@/types/protal';
import { Navigations } from '@/constants/navigations';

export default async function MainHeader() {
  // const data = await getMenuNavigation();
  return (
    <header>
      <div className="flex h-[35px] items-center justify-between bg-[#0a58ca] px-4">
        <div className="container flex justify-end">
          <p className="text-[13px] font-normal text-white">Hội tụ và chia sẻ tri thức</p>
        </div>
      </div>
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
          <div className="flex items-center gap-2">
            <MenuBar data={Navigations} />
            <IconAction />
          </div>
        </div>
      </div>
    </header>
  );
}
