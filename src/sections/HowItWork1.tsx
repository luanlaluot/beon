export default function HowItWork1() {
  const steps = [
    {
      image: "/assets/img/image/work4-1.png",
      number: "1",
      title: "Khảo sát & Phân tích",
      desc: "Chuyên gia Beon trực tiếp làm việc để hiểu rõ thực trạng và nhu cầu cốt lõi của doanh nghiệp.",
      delay: 800,
    },
    {
      image: "/assets/img/image/work4-2.png",
      number: "2",
      title: "Thiết kế Lộ trình",
      desc: "May đo chương trình đào tạo hoặc hệ thống E-learning bám sát vào mục tiêu kinh doanh.",
      delay: 1000,
    },
    {
      image: "/assets/img/image/work4-3.png",
      number: "3",
      title: "Phát triển Nội dung",
      desc: "Xây dựng giáo trình, bài giảng số hóa và hệ thống bài tập thực hành sát với thực tế.",
      delay: 1200,
    },
    {
      image: "/assets/img/image/work4-1.png", // Reuse or update placeholder
      number: "4",
      title: "Triển khai & Vận hành",
      desc: "Tiến hành đào tạo trực tiếp hoặc hướng dẫn vận hành hệ thống trực tuyến đồng bộ.",
      delay: 800,
    },
    {
      image: "/assets/img/image/work4-2.png",
      number: "5",
      title: "Đo lường & Cải tiến",
      desc: "Đánh giá kết quả ứng dụng sau đào tạo và tinh chỉnh lộ trình để tối ưu hiệu suất liên tục.",
      delay: 1000,
    },
  ];

  return (
    <section className="py-24 bg-white relative" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-semibold text-sm mb-4">
            Quy Trình Triển Khai
          </div>
          <h2
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-3xl sm:text-5xl font-display font-bold text-foreground leading-tight tracking-tight mb-6"
          >
            Làm thế nào để bắt đầu <span className="text-primary">cùng Beon?</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-lg leading-relaxed text-foreground/70"
          >
            Chỉ với 5 bước chuyên nghiệp, Beon sẽ đồng hành cùng bạn xây dựng văn hóa học tập hiệu quả và may đo giải pháp phù hợp nhất với tổ chức của bạn.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12">
          {/* Top Row: 3 Steps */}
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl w-full">
            {steps.slice(0, 3).map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration={800 + index * 100}
                className="text-center group"
              >
                <div className="relative mb-8 w-full">
                  <div className="w-full h-56 rounded-2xl overflow-hidden border border-border group-hover:border-primary/30 transition-colors duration-500 shadow-lg bg-muted">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 z-10">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/60 flex items-center justify-center">
                      <span className="text-white font-display font-bold text-base leading-none">{step.number}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-base text-foreground/70 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Centered Steps */}
          <div className="grid gap-8 md:grid-cols-2 max-w-3xl w-full">
            {steps.slice(3, 5).map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration={1100 + index * 100}
                className="text-center group"
              >
                <div className="relative mb-8 w-full">
                  <div className="w-full h-56 rounded-2xl overflow-hidden border border-border group-hover:border-primary/30 transition-colors duration-500 shadow-lg bg-muted">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 z-10">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/60 flex items-center justify-center">
                      <span className="text-white font-display font-bold text-base leading-none">{step.number}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-base text-foreground/70 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
