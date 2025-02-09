"use client";

import { CustomContainer, CustomImage } from "@/components/ui";
// Import Swiper React components
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import img from "../../../../public/images/banner.png";

const bannerData = [
  {
    id: crypto.randomUUID(),
    image: img,
  },

  {
    id: crypto.randomUUID(),
    image: img,
  },

  {
    id: crypto.randomUUID(),
    image: img,
  },
];

export default function Banner() {
  return (
    <section className="banner-slider bg-[#F3EECC] py-5">
      <CustomContainer>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {bannerData.map((image) => (
            <SwiperSlide key={image.id}>
              <CustomImage
                src={image.image}
                width="1920"
                height="400"
                className="w-full h-auto tab:h-[250px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CustomContainer>
    </section>
  );
}
