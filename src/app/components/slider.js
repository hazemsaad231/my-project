"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Data from "../../data/data";

export default function App() {


  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {Data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[80vh] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="slide-img w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 flex flex-col gap-6 items-center justify-center bg-black/30">
                <p
  className="
    relative z-10
    font-[Tajawal]
    text-white
    whitespace-normal
    w-[903px] h-[85px]
    min-w-0 min-h-0
    max-w-none max-h-none
    text-center
    leading-[35px]
    font-extrabold
    text-[33px]
    tracking-[0px]
    opacity-100
    visible
  "
  style={{
    textShadow: "rgba(7, 133, 134, 0.83) 4px 2px 0px",
    transform: "translate(0px, 0px)",
  }}
>
  {item.title}
</p>

                <button className="bg-white text-black px-6 py-3 rounded-xl hover:bg-[] transition duration-300">
                  اقرأ المزيد
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
