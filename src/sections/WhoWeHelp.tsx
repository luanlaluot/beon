import Image from "next/image";
import Link from "next/link";

const audiences = [
  {
    eyebrow: "You are",
    title: "HR or LnD Expert",
    description:
      "Your team has participated in countless training sessions, yet skills remain purely theoretical. You are struggling to find training solutions that offer high practical application rather than just workshop sessions that lack real-world relevance.",
    cta: "See how we standardize training",
    href: "#contact",
    image: "/assets/img/about/about-5.jpg",
    imageAlt: "Đội ngũ doanh nghiệp trong môi trường làm việc hiện đại",
    delay: 200,
  },
  {
    eyebrow: "You are",
    title: "Business Owner",
    description:
      "You are allocating budget for employee training, but business results remain stagnant. This is a major waste of resources when training is entirely disconnected from your company’s actual revenue goals",
    cta: "See how we scale team competency",
    href: "#contact",
    image: "/assets/img/about/about-6.jpg",
    imageAlt: "Chuyên gia đào tạo xây dựng nội dung học tập",
    delay: 350,
  },
];

export default function WhoWeHelp() {
  return (
    <section
      id="who-we-help"
      className="relative overflow-hidden bg-muted py-24 sm:py-32"
      aria-labelledby="who-we-help-heading"
    >
      <div
        className="pointer-events-none absolute top-0 right-0 z-0 h-full w-1/3 origin-top translate-x-20 -skew-x-12 transform bg-primary/5"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-1/2 w-1/2 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-on-primary"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-on-primary"
              aria-hidden="true"
            />
            WHO WE HELP
          </div>
          <h2
            id="who-we-help-heading"
            className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            There are two of you.
            <br />
            Which one?
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-sm transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={item.delay}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col px-6 pb-8 pt-7 sm:px-8 sm:pb-10 sm:pt-8">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                  {item.eyebrow}
                </p>
                <h3 className="mb-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mb-8 max-w-md flex-1 text-base leading-relaxed text-foreground/70">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex min-h-[44px] w-fit items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-all duration-200 hover:border-primary/40 hover:bg-primary hover:text-on-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.cta}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
