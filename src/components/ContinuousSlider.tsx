import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface ContinuousSliderProps {
  heading?: string;
  subheading?: string;
  cities: string[];
}

export function ContinuousSlider({
  heading = "We serve",
  subheading = "We service Davis and Salt Lake County",
  cities,
}: ContinuousSliderProps) {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h5 className="text-sm font-semibold text-gray-500 uppercase">
          {heading}
        </h5>
        <h2 className="text-2xl font-bold mb-6">{subheading}</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={5000}
          allowTouchMove={false}
          className="py-4"
        >
          {cities.map((city, idx) => (
            <SwiperSlide key={idx} style={{ width: "auto" }}>
              <span className="text-lg font-medium inline-block">{city}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
