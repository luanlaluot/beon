export default function WhyChooseUs() {
  const cards = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      ),
      colorStyle: "bg-primary/10 text-primary border-primary/20",
      title: "Practical",
      desc: "Every BEON program is designed based on real-world work scenarios, enabling learners to move beyond simple understanding to practical application, turning knowledge into daily action.",
      delay: 800,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          />
        </svg>
      ),
      colorStyle: "bg-secondary/10 text-secondary border-secondary/20",
      title: "Agile Solution",
      desc: "BEON understands that every SME has unique characteristics. Therefore, all our solutions are flexibly customized to align with your organization's scale, industry, and existing capabilitie.",
      delay: 1000,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      colorStyle: "bg-accent/10 text-accent border-accent/20",
      title: "Quality First",
      desc: "From content and instructors to training methodologies, BEON maintains quality standards equivalent to those of large corporations, ensuring that SMEs experience high quality training services.",
      delay: 1200,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      colorStyle: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      title: "Empowerment",
      desc: "BEON believes that developing people is the foundation of business development. Each course is an opportunity for individuals to become more confident, proactive, and capable of creating greater value for themselves and their organization.",
      delay: 1400,
    },
  ];

  return (
    <section className="py-24 bg-muted relative" id="why-choose-us">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top translate-x-20 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mx-auto max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-semibold text-sm mb-4">
            Our VALUE
          </div>
          <h2
            className="text-3xl sm:text-5xl font-display font-bold text-foreground tracking-tight mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Why <span className="text-primary">us</span>?
          </h2>
          <div
            className="space-y-4 text-lg leading-relaxed text-foreground/70"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p>
              At Beon Academy, we design learning experiences that inspire
              action, shape behaviors, and drive business results.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-8 rounded-[2rem] border border-border  shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 group`}
              data-aos="fade-up"
              data-aos-duration={card.delay}
            >
              <div
                className={`w-16 h-16 rounded-2xl border ${card.colorStyle} flex items-center justify-center mb-6 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
              >
                {card.icon}
              </div>
              <h3 className="text-center text-xl sm:text-2xl font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-center text-base text-foreground/70 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
