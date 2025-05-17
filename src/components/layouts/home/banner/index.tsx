'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BannersType } from '@/types/protal';

export default async function Banner({ banners }: { banners: BannersType }) {
  return (
    <section className="banner w-full max-w-[1074px]">
      <div className="bg w-full overflow-hidden rounded-sm p-1 shadow-sm">
        <Swiper navigation={true} modules={[Navigation]} className="w-full">
          {banners.map((banner) => (
            <SwiperSlide key={banner.id} className="relative aspect-[16/7] w-full">
              <Link href={banner.lienKet}>
                <Image
                  width={1064}
                  height={460}
                  src={banner.duongDan}
                  alt={banner.tieuDe}
                  className="rounded-sm"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1280px) 90vw,
                         1064px"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
