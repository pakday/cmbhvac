import React from "react";
import Link from "next/link";
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
    <section className="py-12 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h5 className="text-sm font-semibold text-muted-foreground uppercase">
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
        {/* action buttons below slider */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://www.google.com/maps/d/viewer?mid=15WRpP-K1nD1upUucDxlv6AiJBmRrgEc&femb=1&ll=40.865799427114816%2C-111.863819566313&z=9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Service areas
          </a>
          <a
            href="https://www.google.com/maps/d/viewer?mid=15WRpP-K1nD1upUucDxlv6AiJBmRrgEc&femb=1&ll=40.865799427114816%2C-111.863819566313&z=9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Check on map
          </a>
        </div>
      </div>
    </section>
  );
}
