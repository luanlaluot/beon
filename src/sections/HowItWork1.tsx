import Link from "next/link";

export default function HowItWork1() {
  return (
    <section className="py-20 bg-white">
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
            },
            {
              image: "/assets/img/image/work4-2.png",
              badge: "/assets/img/image/work4-number-2.png",
              title: "Get a quote",
            },
            {
              image: "/assets/img/image/work4-3.png",
              badge: "/assets/img/image/work4-number-3.png",
              title: "Relax and sleep easy",
            },
          ].map((item) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-duration={
                item.title === "Talk to an advisor"
                  ? 800
                  : item.title === "Get a quote"
                  ? 1000
                  : 1200
              }
            >
              <div className="inline-flex w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-auto w-full"
                />
              </div>
              <div className="relative -top-12">
                <img
                  src={item.badge}
                  alt="Step"
                  className="relative mx-auto h-24 w-24 mb-2"
                />
                <h2 className="text-xl font-semibold  text-center">
                  <Link
                    href="#"
                    className="text-slate-900 hover:text-indigo-600"
                  >
                    {item.title}
                  </Link>
                </h2>
                <p className="text-sm text-slate-600 leading-7 text-center">
                  Yes, a real human who can translate industry jargon into plain
                  English for you.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
