"use client";

import { CustomContainer, CustomImage, H4 } from "@/components/ui";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import cat1 from "../../../../public/images/category/1.png";
import cat2 from "../../../../public/images/category/2.png";
import cat3 from "../../../../public/images/category/3.png";
import cat4 from "../../../../public/images/category/4.png";

const categoryList = [
  {
    id: crypto.randomUUID(),
    image: cat1,
    title: "Electronics",
    url: "cat-1",
  },

  {
    id: crypto.randomUUID(),
    image: cat2,
    title: "  Fashion",
    url: "cat-1",
  },

  {
    id: crypto.randomUUID(),
    image: cat3,
    title: "Appliances",
    url: "cat-1",
  },

  {
    id: crypto.randomUUID(),
    image: cat4,
    title: "Babies Store",
    url: "cat-1",
  },

  {
    id: crypto.randomUUID(),
    image: cat1,
    title: "Electronics",
    url: "cat-1",
  },

  {
    id: crypto.randomUUID(),
    image: cat2,
    title: "  Fashion",
    url: "cat-1",
  },

  {
    id: crypto.randomUUID(),
    image: cat3,
    title: "Appliances",
    url: "cat-1",
  },

  {
    id: crypto.randomUUID(),
    image: cat4,
    title: "Babies Store",
    url: "cat-1",
  },
];

export default function Category() {
  return (
    <section className="category py-10">
      <CustomContainer>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4.2,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categoryList.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="bg-white shadow-sm p-1 relative">
                <CustomImage
                  src={data.image}
                  alt={data.title}
                  width="720"
                  height="400"
                  className="w-full h-52"
                />

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-[#FEF9F9] shadow-xl flex items-center justify-between gap-2 p-2">
                  <H4>{data.title}</H4>
                  <Link href={data.url} className="text-cyan-color">
                    Shop
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </CustomContainer>
    </section>
  );
}
