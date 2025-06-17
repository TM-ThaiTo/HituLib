'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CustomLink from '@/hooks/next-link';
import { BannersType } from '@/types/portal';
import OptimizedImage from '@/lib/image';

export default function Banner({ banners }: { banners: BannersType }) {
  return (
    <section className="banner w-full max-w-[1074px]">
      <div className="bg w-full overflow-hidden rounded-sm p-1 shadow-sm">
        <Swiper navigation={true} modules={[Navigation]} className="w-full">
          {banners.map((banner) => (
            <SwiperSlide key={banner.id} className="relative aspect-[16/7] w-full">
              <CustomLink href={banner.lienKet}>
                <OptimizedImage
                  src={banner.duongDan}
                  alt={banner.tieuDe}
                  width={1064}
                  height={460}
                  className="rounded-sm"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1064px"
                />
              </CustomLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
