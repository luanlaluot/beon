"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};

export default function LogoSlider1() {
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="logos owl-carousel"
        data-aos="zoom-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-offset={50}
        data-aos-duration={600}
      >
        <SwiperSlide className="single-logo">
          <img src="/assets/img/logo/logo1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
          <img src="/assets/img/logo/logo2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
          <img src="/assets/img/logo/logo3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
          <img src="/assets/img/logo/logo4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
          <img src="/assets/img/logo/logo5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
          <img src="/assets/img/logo/logo6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
          <img src="/assets/img/logo/logo7.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
          <img src="/assets/img/logo/logo8.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
          <img src="/assets/img/logo/logo9.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="single-logo">
          <img src="/assets/img/logo/logo10.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
