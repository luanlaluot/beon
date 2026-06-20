export default function About() {
  return (
    <section className="py-24 bg-muted relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Left Image Side */}
          <div className="relative group" data-aos="fade-right" data-aos-duration="1000">
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
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                Về Chúng Tôi
              </div>
              <h2
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight tracking-tight"
              >
                Giải phóng tiềm năng của <span className="text-secondary">SME Việt Nam</span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-lg leading-relaxed text-foreground/70"
              >
                Beon Academy sinh ra với mong muốn xóa bỏ khoảng cách về công nghệ và quy trình cho các doanh nghiệp vừa và nhỏ, mang lại những công cụ đào tạo tinh gọn nhất.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 pt-6 border-t border-border">
              <div data-aos="fade-up" data-aos-duration="1100" className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-3">Tầm Nhìn</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  Trở thành đối tác chiến lược số 1 cung cấp giải pháp đào tạo & E-learning toàn diện cho doanh nghiệp, kiến tạo nền tảng nhân sự bền vững vững vàng.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-duration="1200" className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-3">Sứ Mệnh</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  Giúp SME “bật công tắc học tập” bằng giải pháp linh hoạt, tiết kiệm chi phí mà vẫn đảm bảo chuẩn mực chất lượng và hiệu quả thực tiễn tối ưu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
