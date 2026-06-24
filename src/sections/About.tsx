export default function About() {
  return (
    <section className="py-24 bg-muted relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Left Image Side */}
          <div
            className="relative group"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border border-border">
              <img
                src="/assets/img/about/about21.png"
                alt="Về Beon"
                className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay for contrast */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>

            {/* Background Block pattern */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-accent/20 z-0 rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl bg-secondary/10 z-0 -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
          </div>

          {/* Right Content Side */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-5 py-2 rounded-full bg-primary text-white font-bold text-sm tracking-wide">
                About Us
              </div>
              <h2
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-3xl sm:text-5xl font-display font-black text-[#111827] leading-[1.1] tracking-tight"
              >
                Unleashing <span className="text-primary">SME</span> Potential
                in Vietnam.
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-lg leading-relaxed text-foreground/70"
              >
                At Beon Academy, we empower SMEs by simplifying complex
                processes through lean training. We turn your internal potential
                into a lasting competitive edge
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-4">
              <div
                data-aos="fade-up"
                data-aos-duration="1100"
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex shrink-0 items-center justify-center w-7 h-7 rounded-full bg-[#007CD8] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3">
                    Vision
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    To become the leading provider of comprehensive training and
                    E-learning solutions for SMEs, empowering organizations to
                    elevate their workforce capabilities through advanced
                    learning technology.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex shrink-0 items-center justify-center w-7 h-7 rounded-full bg-[#007CD8] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3">
                    Mission
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    BEON Academy empowers SMEs to "activate a culture of
                    learning" through flexible, easily deployable, and
                    cost-effective training solutions—maintaining high standards
                    of quality, professionalism, and practical effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
