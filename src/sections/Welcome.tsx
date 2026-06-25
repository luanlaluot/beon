export default function Welcome() {
  return (
    <section
      className="relative overflow-hidden flex justify-center items-center md:min-h-screen py-28 lg:py-44"
      id="home"
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Headline */}
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            We Don't Train People,
            <br />
            We Transform How <br />
            <span className="text-primary">Organizations Work.</span>
          </h1>

          {/* Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-7 max-w-xl text-base leading-relaxed text-foreground/60 sm:text-lg"
          >
            BEON – Powering Learning Transformation. Giải pháp học tập &amp; đào
            tạo thông minh cho doanh nghiệp SME Việt Nam.{" "}
            <span className="font-semibold text-primary">
              Chúng tôi đồng hành cùng tăng trưởng của bạn.
            </span>
          </p>

          {/* CTAs */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary/40"
            >
              Tư vấn miễn phí
            </a>
            <a
              href="#solutions"
              className="group inline-flex items-center gap-2 text-base font-semibold text-foreground transition-colors hover:text-primary"
            >
              Tìm hiểu giải pháp
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
