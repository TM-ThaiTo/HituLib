'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BannersType } from '@/types/banner';

export default function Banner({ banners }: { banners: BannersType }) {
  return (
    <section className="banner">
      <div className="s h-[470px] w-[1074px] rounded-sm p-1.5">
        <Swiper navigation={true} modules={[Navigation]} className="h-full w-full">
          {banners.map((banner) => (
            <SwiperSlide key={banner.id} className="h-full w-full">
              <Link href={banner.lienKet}>
                <Image
                  src={banner.duongDan}
                  alt={banner.tieuDe}
                  width={1064}
                  height={460}
                  className="h-full max-h-[460px] w-full max-w-[1064px] rounded-sm"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
