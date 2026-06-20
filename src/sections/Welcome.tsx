import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className="relative py-32 overflow-hidden bg-background" id="home">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 w-max border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Beon Academy
            </div>

            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-4xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6 tracking-tight"
            >
              POWERING
              <br />
              <span className="text-primary">ELEARNING</span>
              <br />
              TRANSFORMATION
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-base md:text-lg text-foreground/80 max-w-lg leading-relaxed"
            >
              BEON – Powering Learning Transformation
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-base md:text-lg text-foreground/80 mb-10 max-w-lg leading-relaxed"
            >
              Giải pháp học tập & đào tạo thông minh cho doanh nghiệp SME Việt
              Nam{" "}
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-base text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1"
              >
                Tư vấn miễn phí
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-base text-foreground border border-border font-semibold rounded-xl hover:bg-muted transition-all duration-300"
              >
                Tìm hiểu giải pháp
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative hidden lg:block"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                className="w-full h-auto object-cover aspect-[1/1]"
                src="/assets/img/about/about-5.jpg"
                alt="Beon Team Workspace"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Element */}
            {/* <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl border border-border flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-foreground/60 font-medium">Tăng trưởng</p>
                <p className="text-xl font-display font-bold text-foreground">+150%</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
