import TestimonialThumbSlider1 from "@/components/slider/TestimonialThumbSlider1";

export default function Testimonial() {
  return (
    <section className="relative py-20 bg-slate-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 opacity-80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-6">
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
            className="text-3xl sm:text-4xl font-bold leading-tight text-white"
          >
            <span className="text-orange-400">We</span> have reduced the
            property taxes on more than 40,000 properties across 10+ counties.
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-duration={1000} className="mt-12">
          <div className="mx-auto max-w-5xl">
            <TestimonialThumbSlider1 />
          </div>
        </div>
      </div>
    </section>
  );
}
