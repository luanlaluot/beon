"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
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
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

export default function CaseStudy() {
  return (
    <section className="relative py-20 bg-slate-900 text-white">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-aos="fade-up"
            data-aos-duration={600}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-300"
          >
            <img src="/assets/img/icons/hands.svg" alt="" className="h-5 w-5" />
            We Are Here For Your Tax Relief.
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration={800}
            className="mt-6 text-3xl sm:text-4xl font-bold text-white"
          >
            <span className="text-orange-400">Consultia</span> tax is built for
            small business.
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-duration={1200} className="mt-12">
          <Swiper {...swiperOptions} className="overflow-visible">
            {[
              {
                title: "Operational Excellence",
                image: "/assets/img/case-study/casestudy1.jpg",
              },
              {
                title: "Analytics Consulting",
                image: "/assets/img/case-study/casestudy2.jpg",
              },
              {
                title: "Analytics Strategy",
                image: "/assets/img/case-study/casestudy3.jpg",
              },
              {
                title: "Analytics Strategy",
                image: "/assets/img/case-study/casestudy3.jpg",
              },
            ].map((item, index) => (
              <SwiperSlide
                key={index}
                className="!overflow-hidden rounded-[2rem] bg-white/10 shadow-2xl backdrop-blur-sm"
              >
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[340px] w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-6 text-slate-100">
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-sm text-slate-300">
                    Making a mistake on your return can be costly. From missed
                    deductions.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    Check out Case Study
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
