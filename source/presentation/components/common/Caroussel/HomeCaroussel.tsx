import Link from "next/link";
import { SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

interface SwiperProps {
  banners: Array<Banner>;
}

interface Banner {
  bannerId: number;
  bannerImage: string;
  bannerTitle: string;
  bannerDescription: string;
  bannerUrl: string;
}

export const HomeCaroussel = ({ banners }: SwiperProps) => {
  const carousselSettings: SwiperOptions = {
    pagination:{
    },
    modules: [ Pagination],
  };

  return (
    <div>
      <Swiper {...carousselSettings}>
        {banners.map((banner) => (
          <SwiperSlide key={banner.bannerId}>
            <Link className="relative" href={banner.bannerUrl}>
              <div className="h-40 sm:h-52 md:h-60 lg:h-80 relative z-0">
                <picture>
                  <img
                    src={banner.bannerImage}
                    width={1366}
                    height={768}
                    alt={banner.bannerTitle}
                    className="object-[0,20%] object-cover w-full h-full"
                  ></img>
                </picture>
              </div>
              <div className="w-full p-3 absolute z-10 bottom-0 bg-gradient-to-r from-black via-black text-system">
                <p className="font-medium">{banner.bannerTitle}</p>
                <small className="text-xs">{banner.bannerDescription}</small>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
