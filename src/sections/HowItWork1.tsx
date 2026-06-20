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
      image: "/assets/img/image/work4-2.png", // Reuse or update placeholder
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Quy trình làm việc
          </div>
          <h2
            className="text-4xl sm:text-5xl font-display font-bold text-foreground tracking-tight"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            5 Bước Triển Khai <span className="text-primary">Bài Bản</span>
          </h2>
          <p
            className="mt-6 text-lg leading-relaxed text-foreground/70"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Chúng tôi thiết kế quy trình hợp tác tinh gọn nhất, đảm bảo tính hiệu quả và không làm gián đoạn vận hành nội bộ của doanh nghiệp.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Top Row: 3 Steps */}
          <div className="grid gap-8 md:grid-cols-3 relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-[40%] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-border via-primary/30 to-border -z-10"></div>
            
            {steps.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center group"
                data-aos="fade-up"
                data-aos-duration={item.delay}
              >
                <div className="relative mb-8 transform group-hover:-translate-y-2 transition-transform duration-300 w-full max-w-[300px]">
                  <div className="w-full aspect-[4/3] rounded-[2rem] bg-muted flex items-center justify-center overflow-hidden border-4 border-white shadow-xl group-hover:border-primary/20 transition-colors">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white font-display font-bold text-xl rounded-full flex items-center justify-center border-4 border-white shadow-md">
                    {item.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed px-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Steps (Centered) */}
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto relative">
            {/* Connector line for desktop */}
            <div className="hidden md:block absolute top-[40%] left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-border via-primary/30 to-border -z-10"></div>
            
            {steps.slice(3, 5).map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center group"
                data-aos="fade-up"
                data-aos-duration={item.delay}
              >
                <div className="relative mb-8 transform group-hover:-translate-y-2 transition-transform duration-300 w-full max-w-[300px]">
                  <div className="w-full aspect-[4/3] rounded-[2rem] bg-muted flex items-center justify-center overflow-hidden border-4 border-white shadow-xl group-hover:border-primary/20 transition-colors">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white font-display font-bold text-xl rounded-full flex items-center justify-center border-4 border-white shadow-md">
                    {item.number}
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed px-4 max-w-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
