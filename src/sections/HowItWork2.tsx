import Link from "next/link";

export default function HowItWork2() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto max-w-3xl">
          <span
            className="text-sm uppercase tracking-[0.3em] text-orange-500"
            data-aos="fade-up"
            data-aos-duration={800}
          >
            How it works
          </span>
          <h1
            className="mt-4 text-3xl sm:text-4xl font-semibold text-slate-900"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            We give you access to the best and most competitive insurance
            products
          </h1>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              image: "/assets/img/image/work4-1.png",
              badge: "/assets/img/image/work4-number-1.png",
              title: "Talk to an advisor",
              delay: 800,
            },
            {
              image: "/assets/img/image/work4-2.png",
              badge: "/assets/img/image/work4-number-2.png",
              title: "Get a quote",
              delay: 1000,
            },
            {
              image: "/assets/img/image/work4-3.png",
              badge: "/assets/img/image/work4-number-3.png",
              title: "Relax and sleep easy",
              delay: 1200,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-slate-200 p-8 text-center shadow-lg bg-white"
              data-aos="fade-up"
              data-aos-duration={item.delay}
            >
              <div className="inline-flex rounded-3xl bg-slate-100 p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 w-auto"
                />
              </div>
              <img
                src={item.badge}
                alt="Step badge"
                className="mx-auto mt-8 h-16 w-auto"
              />
              <h2 className="mt-8 text-xl font-semibold text-slate-900">
                <Link href="#" className="text-slate-900 hover:text-indigo-600">
                  {item.title}
                </Link>
              </h2>
              <p className="mt-4 text-slate-600 leading-7">
                Yes, a real human who can translate industry jargon into plain
                English for you.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
