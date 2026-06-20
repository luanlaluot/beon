const steps = [
  {
    number: "01",
    title: "Đánh giá nhu cầu & mục tiêu đào tạo",
    subtitle: "Needs Assessment",
    icon: "fa-solid fa-magnifying-glass-chart",
    items: [
      "Phỏng vấn lãnh đạo và bộ phận nhân sự để hiểu mục tiêu kinh doanh, vấn đề hiệu suất, và kỳ vọng đào tạo.",
    ],
    image: "/assets/img/image/work4-1.png",
  },
  {
    number: "02",
    title: "Thiết kế chương trình",
    subtitle: "Program Design",
    icon: "fa-solid fa-pen-ruler",
    items: [
      "Xây dựng khung nội dung, thời lượng, phương pháp phù hợp (Workshop / Coaching / Blended).",
    ],
    image: "/assets/img/image/work4-2.png",
  },
  {
    number: "03",
    title: "Triển khai đào tạo",
    subtitle: "Training Delivery",
    icon: "fa-solid fa-chalkboard-user",
    items: [
      "Triển khai chương trình đào tạo theo kế hoạch với đội ngũ giảng viên chuyên nghiệp.",
    ],
    image: "/assets/img/image/work4-3.png",
  },
  {
    number: "04",
    title: "Đánh giá kết quả & chuyển giao",
    subtitle: "Evaluation & Application",
    icon: "fa-solid fa-chart-column",
    items: [
      "Đánh giá mức độ hài lòng, khả năng áp dụng và kết quả cải thiện hiệu suất sau đào tạo.",
    ],
    image: "/assets/img/image/work4-4.png",
  },
  {
    number: "05",
    title: "Hỗ trợ sau đào tạo",
    subtitle: "Follow-up & Coaching",
    icon: "fa-solid fa-handshake",
    items: ["Gửi tài liệu củng cố, mini test hoặc microlearning qua LMS."],
    image: "/assets/img/image/work4-5.png",
  },
];

export default function ProcessCorporate() {
  return (
    <section className="py-24 bg-background relative" id="process-corporate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-primary text-white font-bold text-sm mb-4">
            Lộ Trình Đào Tạo
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground tracking-tight mb-4">
            Corporate Training <span className="text-primary">Process</span>
          </h2>
          <p className="text-base text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Quy trình đào tạo doanh nghiệp 5 bước chuyên nghiệp, bài bản từ khảo
            sát nhu cầu đến hỗ trợ sau đào tạo.
          </p>
        </div>

        {/* Process Corporate Steps grid */}
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
                  <div className="w-full h-48 rounded-[2rem] overflow-hidden border border-border group-hover:border-primary/30 transition-colors duration-500 shadow-sm group-hover:shadow-lg flex flex-col items-center justify-center">
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
                <h3 className="text-xl font-display font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-bold tracking-widest uppercase mb-4">
                  {step.subtitle}
                </p>
                <ul className="text-left space-y-2 text-sm text-foreground/70 w-full max-w-xs mx-auto">
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
                  <div className="w-full h-48 rounded-[2rem] overflow-hidden border border-border group-hover:border-primary/30 transition-colors duration-500 shadow-sm group-hover:shadow-lg flex flex-col items-center justify-center">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-10  bg-primary group-hover:bg-blue-400 transition-colors">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-white/60 flex items-center justify-center">
                      <span className="text-white font-display font-bold text-base leading-none">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-bold tracking-widest uppercase mb-4">
                  {step.subtitle}
                </p>
                <ul className="text-left space-y-2 text-sm text-foreground/70 w-full max-w-xs mx-auto">
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
