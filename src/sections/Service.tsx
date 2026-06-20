export default function Service() {
  return (
    <section
      className="py-24 bg-muted text-foreground relative overflow-hidden"
      id="philosophy"
    >
      {/* Background Graphic */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div
            className="relative w-full max-w-md mx-auto lg:max-w-none"
            data-aos="zoom-out"
            data-aos-duration="800"
          >
            {/* Image Box */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border group z-0">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="/assets/img/about/about21.png"
                alt="Triết lý dịch vụ Beon"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Saction Texts */}
            <div
              className="absolute top-12 -left-6 sm:-left-12 bg-white px-6 py-3 rounded-2xl shadow-xl border border-border/50 z-20 text-foreground font-display font-medium text-sm sm:text-base hover:-translate-y-1 transition-transform duration-300"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Học đúng trọng tâm
            </div>

            <div
              className="absolute bottom-28 -left-4 sm:-left-8 bg-white px-6 py-3 rounded-2xl shadow-xl border border-border/50 z-20 text-foreground font-display font-medium text-sm sm:text-base hover:-translate-y-1 transition-transform duration-300"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Phát triển bền vững
            </div>

            <div
              className="absolute top-[50%] -right-2 sm:-right-8 bg-white px-6 py-3 rounded-2xl shadow-xl border border-border/50 z-20 text-foreground font-display font-medium text-sm sm:text-base hover:-translate-y-1 transition-transform duration-300"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              Ứng dụng hiệu quả
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-5 py-2 rounded-full bg-primary text-white font-semibold text-sm backdrop-blur-md border border-accent/20">
                Triết Lý Của Chúng Tôi
              </div>
              <h2
                data-aos="fade-left"
                data-aos-duration="800"
                className="text-4xl sm:text-5xl font-display font-bold tracking-tight leading-tight"
              >
                Đào tạo không chỉ là "Dạy", mà là sự{" "}
                <span className="text-primary">Thay Đổi</span>
              </h2>
            </div>

            <div className="space-y-6 text-foreground/80">
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                className="text-lg leading-relaxed"
              >
                BEON tin rằng{" "}
                <span className="text-3xl font-bold text-primary">80%</span> kết
                quả phát triển năng lực đến từ{" "}
                <span className="text-3xl font-bold text-primary">20%</span>{" "}
                hoạt động học tập được thiết kế đúng trọng tâm. Chúng tôi loại
                bỏ sự cồng kềnh, tập trung vào giá trị thực chất.
              </p>
              <div
                data-aos="fade-left"
                data-aos-duration="1100"
                className="p-6 bg-white border border-border rounded-2xl shadow-sm"
              >
                <p className="text-base leading-relaxed italic text-foreground/70">
                  "Chúng tôi không chạy theo 'đào tạo cho đủ', mà tập trung vào
                  những trải nghiệm học tập mang lại thay đổi thật sự trong hành
                  vi và hiệu suất công việc."
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-white font-semibold hover:bg-primary/90 transition duration-300 shadow-lg shadow-primary/20"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              Lên lịch Tư Vấn Miễn Phí
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
