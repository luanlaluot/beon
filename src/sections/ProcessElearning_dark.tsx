const steps = [
  {
    number: "01",
    title: "Khảo sát & Phân tích nhu cầu",
    subtitle: "Training Needs Analysis",
    icon: "fa-solid fa-magnifying-glass-chart",
    items: [
      "Làm việc với doanh nghiệp để xác định mục tiêu học tập, nhóm đối tượng, nội dung cần số hoá.",
    ],
    image: "/assets/img/image/work1-1.png",
  },
  {
    number: "02",
    title: "Thiết kế chương trình & kịch bản học tập",
    subtitle: "Learning Design",
    icon: "fa-solid fa-pen-ruler",
    items: [
      "Xây dựng khung nội dung, mục tiêu học tập, phân chia module và thời lượng.",
    ],
    image: "/assets/img/image/work1-2.png",
  },
  {
    number: "03",
    title: "Triển khai đào tạo",
    subtitle: "Training Delivery",
    icon: "fa-solid fa-play-circle",
    items: ["Thiết kế hình ảnh, video, giọng đọc, tương tác và gamification."],
    image: "/assets/img/image/work1-3.png",
  },
  {
    number: "04",
    title: "Sản xuất bài giảng điện tử",
    subtitle: "E-learning Production",
    icon: "fa-solid fa-film",
    items: ["Cấu hình và cài đặt hệ thống LMS theo yêu cầu doanh nghiệp."],
    image: "/assets/img/image/work1-4.png",
  },
  {
    number: "05",
    title: "Triển khai trên hệ thống LMS",
    subtitle: "Implementation & Launch",
    icon: "fa-solid fa-rocket",
    items: [
      "Thu thập dữ liệu học tập, báo cáo tiến độ, phân tích hành vi người học.",
    ],
    image: "/assets/img/image/work1-5.png",
  },
];

export default function ProcessElearning() {
  return (
    <section
      className="py-24 bg-gradient-to-br from-primary via-[#0A4A87] to-foreground text-white relative overflow-hidden"
      id="process-elearning"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top -translate-x-20 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 text-white font-bold text-sm border border-white/20 backdrop-blur-sm mb-4">
            E-learning Products
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-4">
            Empowering everyone, learning at any pace.
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Empowering your team with precise knowledge, our E-learning solution
            fosters limitless growth, allowing every individual to define their
            own path to success..
          </p>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col items-center gap-12 mt-16">
          {/* Top Row: 3 Steps */}
          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl w-full">
            {steps.slice(0, 3).map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration={800 + index * 100}
                className="text-center group flex flex-col items-center"
              >
                <div className="relative mb-10 w-full max-w-[320px]">
                  <div className="w-full h-48 rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 shadow-sm group-hover:shadow-lg flex flex-col items-center justify-center">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-10 bg-primary group-hover:bg-blue-400 transition-colors">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/60 flex items-center justify-center">
                      <span className="text-white font-display font-bold text-base leading-none">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-bold tracking-widest uppercase mb-4 text-blue-300">
                  {step.subtitle}
                </p>
                <ul className="text-left space-y-2 text-sm text-white/70 w-full max-w-xs mx-auto">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex gap-2 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Centered Steps */}
          <div className="grid gap-8 lg:grid-cols-2 max-w-4xl w-full">
            {steps.slice(3, 5).map((step, index) => (
              <div
                key={index + 3}
                data-aos="fade-up"
                data-aos-duration={1100 + index * 100}
                className="text-center group flex flex-col items-center"
              >
                <div className="relative mb-10 w-full max-w-[320px]">
                  <div className="w-full h-48 rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 shadow-sm group-hover:shadow-lg flex flex-col items-center justify-center">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-10 bg-primary group-hover:bg-blue-400 transition-colors">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/60 flex items-center justify-center">
                      <span className="text-white font-display font-bold text-base leading-none">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-bold tracking-widest uppercase mb-4 text-blue-300">
                  {step.subtitle}
                </p>
                <ul className="text-left space-y-2 text-sm text-white/70 w-full max-w-xs mx-auto">
                  {step.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex gap-2 leading-relaxed text-center"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
