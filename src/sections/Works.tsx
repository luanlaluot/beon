import Link from "next/link";

export default function Works() {
  return (
    <section className="py-20 bg-[linear-gradient(270deg,_#007CD8_0%,_#1865AE_36.54%,_#403F68_97.12%,_#3B3A60_100%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="title space-y-4">
              <small
                data-aos="fade-right"
                data-aos-duration={200}
                className="heading-top2 text-sm uppercase tracking-[0.3em]"
              >
                Giá trị
              </small>
              <h2
                data-aos="fade-right"
                data-aos-duration={400}
                className="text-3xl sm:text-4xl font-bold text-white"
              >
                Những lợi ích mà chúng tôi mang đến cho khách hàng của mình
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration={600}
                className="text-slate-600 text-lg leading-8 text-white"
              >
                Consultia Management’s financial advisors are backed by
                extensive training: Using in-depth financial advisory skills,
                we’re ready to help you achieve your unique wealth management
                goals.
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration={600}
                className="text-slate-600 text-lg leading-8 text-white"
              >
                Consultia Management’s financial advisors are backed by
                extensive training: Using in-depth financial advisory skills,
                we’re ready to help you achieve your unique wealth management
                goals.
              </p>
            </div>
          </div>
          <div
            className="grid gap-6"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset={100}
            data-aos-duration={400}
          >
            {[
              {
                number: "01",
                title: "Cultivate your wealth, create your future.",
              },
              {
                number: "02",
                title: "Cultivate your wealth, create your future.",
              },
              {
                number: "03",
                title: "Cultivate your wealth, create your future.",
              },
              {
                number: "04",
                title: "Cultivate your wealth, create your future.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-8"
              >
                <div className="mb-4 inline-flex flex !h-20 !w-20 items-center justify-center rounded-full bg-[#7876C438] text[#7876C4]  text-lg font-bold">
                  {step.number}
                </div>

                <div className="flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-7">
                    Growing your wealth today may lay the foundation for the
                    future you want tomorrow. We offer financial planning
                    designed to help you build wealth at every stage.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
