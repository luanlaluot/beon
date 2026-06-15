import LogoSlider1 from "@/components/slider/LogoSlider1";

export default function Logo() {
  return (
    <section className="py-20 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mb-12 text-center"
          data-aos="fade-up"
          data-aos-duration={900}
        >
          <p className="text-lg font-semibold uppercase text-slate-900">
            Hơn 10 khách hàng và đối tác tin tưởng
          </p>
        </div>
        <div className="overflow-hidden">
          <LogoSlider1 />
        </div>
      </div>
    </section>
  );
}
