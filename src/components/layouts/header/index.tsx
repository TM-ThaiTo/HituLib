import CustomLink from '@/hooks/next-link';
import MenuBar from './menu-bar';
import { Navigations } from '@/constants/navigations';
import ImagePublic from '@/constants/image';
import { getMenuNavigation } from '@/api/portal/api-navigation';
import OptimizedImage from '@/lib/image';

export default async function MainHeader() {
  const data = await getMenuNavigation();
  // console.log('data', data);
  return (
    <header>
      <div className="flex h-[35px] items-center justify-between bg-[#0a58ca] px-4">
        <div className="container flex justify-end">
          <p className="text-[13px] font-normal text-white">Hội tụ và chia sẻ tri thức</p>
        </div>
      </div>
      <div className="flex h-[81px] items-center justify-between bg-white px-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <CustomLink href="/" className="flex items-center">
            <OptimizedImage
              src={ImagePublic.logo}
              alt="HITU LIB"
              width={341}
              height={70}
              className="h-[65px] w-auto object-contain"
            />
          </CustomLink>
          <div className="flex items-center">
            <MenuBar data={Navigations} />
          </div>
        </div>
      </div>
    </header>
  );
}
