import Link from "next/link";

export default function Pricing() {
  const packages = [
    {
      title: "Corporate Training",
      subtitle: "Đào tạo In-house",
      desc: "Chương trình thiết kế may đo trực tiếp tại doanh nghiệp, giải quyết triệt để các vấn đề cốt lõi của tổ chức.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      delay: 800,
    },
    {
      title: "E-learning Solution",
      subtitle: "Giải pháp số hóa",
      desc: "Số hóa bài giảng và xây dựng hệ thống học tập trực tuyến, giúp nhân sự chủ động học mọi lúc mọi nơi.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      delay: 1000,
    },
    {
      title: "Blended Learning",
      subtitle: "Đào tạo hỗn hợp",
      desc: "Kết hợp linh hoạt giữa đào tạo trực tiếp và E-learning, tối đa hóa hiệu quả tiếp thu và thực hành liên tục.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      delay: 1200,
    },
  ];

  return (
    <section
      className="py-24 bg-gradient-to-br from-primary via-[#0A4A87] to-foreground text-white relative overflow-hidden"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <div className="max-w-2xl">
            <h2
              className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-6"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Price and Package
            </h2>
            <p
              className="text-lg leading-relaxed text-white/80"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              BEON mang đến các gói giải pháp đào tạo linh hoạt, tối ưu chi phí nhưng vẫn đảm bảo chất lượng chuẩn tập đoàn – giúp doanh nghiệp SME đầu tư hiệu quả, học nhanh, áp dụng thật và đo lường được giá trị.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="shrink-0"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-base text-primary font-bold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-xl shadow-black/10 hover:-translate-y-1"
            >
              Liên hệ ngay
            </Link>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-10 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-duration={pkg.delay}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {pkg.icon}
              </div>
              <h3 className="text-2xl font-display font-semibold mb-2">
                {pkg.title}
              </h3>
              <p className="text-white/60 text-sm font-medium tracking-wider mb-4">
                {pkg.subtitle}
              </p>
              <p className="text-white/80 leading-relaxed text-sm">
                {pkg.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
