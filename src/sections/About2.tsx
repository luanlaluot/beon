import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";

export default function About2() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="hidden lg:block">
            <div className="lg:pr-10">
              <div className="space-y-8">
                <div
                  data-aos="fade-right"
                  data-aos-duration={600}
                  className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500"
                >
                  <img
                    src="/assets/img/icons/hands.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  We Are Here For Your Tax Relief.
                </div>
                <h2
                  data-aos="fade-right"
                  data-aos-duration={800}
                  className="text-3xl sm:text-4xl font-bold text-slate-900"
                >
                  We Handle The Most Tedious Bookkeeping Tasks of Your Business
                  Operations.
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-duration={1000}
                  className="max-w-2xl text-lg leading-8 text-slate-600"
                >
                  Experienced, knowledgeable professionals in Property Tax
                  Consulting. Our team of Property Tax Consultants is committed
                  to saving you money by obtaining the lowest possible assessed
                  value for your commercial or residential properties.
                </p>
                <div
                  data-aos="fade-right"
                  data-aos-duration={1200}
                  className="flex"
                >
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
                  >
                    More About Us
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="relative space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div
                data-aos="zoom-out"
                data-aos-duration={600}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-50">
                  <img
                    src="/assets/img/icons/counter21.png"
                    alt=""
                    className="h-8 w-8"
                  />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-slate-900">
                  <CounterUp count={645} />+
                </h2>
                <p className="mt-2 text-sm text-slate-500">Meetings So Far</p>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-duration={800}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-50">
                  <img
                    src="/assets/img/icons/counter22.png"
                    alt=""
                    className="h-8 w-8"
                  />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-slate-900">
                  <CounterUp count={34} />+
                </h2>
                <p className="mt-2 text-sm text-slate-500">Meetings So Far</p>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-duration={1000}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-50">
                  <img
                    src="/assets/img/icons/counter23.png"
                    alt=""
                    className="h-8 w-8"
                  />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-slate-900">
                  <CounterUp count={562} />+
                </h2>
                <p className="mt-2 text-sm text-slate-500">Meetings So Far</p>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-duration={1200}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-50">
                  <img
                    src="/assets/img/icons/counter24.png"
                    alt=""
                    className="h-8 w-8"
                  />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-slate-900">
                  <CounterUp count={90} />%
                </h2>
                <p className="mt-2 text-sm text-slate-500">Meetings So Far</p>
              </div>
            </div>
            <div className="absolute -bottom-6 right-0 opacity-50 lg:opacity-100">
              <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
            </div>
            <div className="absolute top-0 left-0 opacity-50">
              <img src="/assets/img/shapes/tax-shape2.png" alt="" />
            </div>
          </div>

          <div className="lg:hidden">
            <div className="space-y-8">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                  <img
                    src="/assets/img/icons/hands.svg"
                    alt=""
                    className="h-5 w-5"
                  />
                  We Are Here For Your Tax Relief.
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  We Handle The Most Tedious Bookkeeping Tasks of Your Business
                  Operations.
                </h2>
                <p className="text-lg leading-8 text-slate-600">
                  Experienced, knowledgeable professionals in Property Tax
                  Consulting. Our team of Property Tax Consultants is committed
                  to saving you money by obtaining the lowest possible assessed
                  value for your commercial or residential properties.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
              >
                More About Us
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
