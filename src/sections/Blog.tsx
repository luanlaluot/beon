import Link from "next/link";

const posts = [
  {
    image: "/assets/img/blog/blog4.png",
    tag: "Stories",
    title:
      "How To Write Your Consulting Firm Mission Statement ( Why It’s Important).",
    href: "/single",
  },
  {
    image: "/assets/img/blog/blog1.png",
    tag: "Product",
    title:
      "Personal Branding For Consultants: Be Authentic To Get More Clients.",
    href: "/single",
  },
  {
    image: "/assets/img/blog/blog2.png",
    tag: "Business",
    title: "What Is An Entrepreneurial Consultant? (Examples Stories).",
    href: "/single",
  },
];

export default function Blog() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-6">
          <div
            data-aos="fade-up"
            data-aos-duration={600}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600"
          >
            <img src="/assets/img/icons/hands.svg" alt="" className="h-5 w-5" />
            We Are Here For Your Tax Relief.
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration={800}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            <span className="text-orange-600">Take</span> a look at the latest
            articles from Consultia Tax.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.tag}
              data-aos="fade-up"
              data-aos-duration={600 + index * 200}
              className="overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.tag}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-5 p-6">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                  <img
                    src="/assets/img/icons/hands.svg"
                    alt=""
                    className="h-4 w-4"
                  />
                  <span>{post.tag}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 leading-tight">
                  <Link href={post.href}>{post.title}</Link>
                </h3>
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:text-orange-700"
                >
                  Read More
                  <span>
                    <i className="fa-solid fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
