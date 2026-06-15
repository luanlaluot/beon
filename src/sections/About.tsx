export default function About() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative" data-aos="zoom-out" data-aos-duration={800}>
            <div className="relative rounded-[2rem] overflow-hidden">
              <img
                src="/assets/img/about/about21.png"
                alt="About"
                className="w-full h-auto"
              />
              <div className="absolute -bottom-8 -right-8 opacity-70">
                <img
                  src="/assets/img/shapes/shape-right-bottom2.png"
                  alt=""
                  className="w-28 h-28 object-contain"
                />
              </div>
              <div className="absolute top-6 left-6 opacity-80">
                <img
                  src="/assets/img/shapes/tax-shape2.png"
                  alt=""
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <h2
                data-aos="fade-left"
                data-aos-duration={800}
                className="text-3xl sm:text-4xl font-bold text-slate-900"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration={1000}
                className="text-lg leading-8 text-slate-600"
              >
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-3xl font-semibold text-slate-900">
                  Tầm nhìn
                </p>
                <p className="text-lg mt-3 text-slate-600 leading-7">
                  Trở thành đơn vị hàng đầu cung cấp giải pháp đào tạo &
                  E-learning toàn diện cho SME, giúp các tổ chức nâng cao năng
                  lực nhân sự bằng công nghệ học tập tiên tiến.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-slate-900">Sứ mệnh</p>
                <p className="text-lg mt-3 text-slate-600 leading-7">
                  BEON Academy giúp doanh nghiệp SME “bật công tắc học tập”
                  thông qua giải pháp đào tạo linh hoạt, dễ triển khai và tiết
                  kiệm chi phí – nhưng vẫn giữ chuẩn mực chất lượng, chuyên
                  nghiệp, và hiệu quả thực tiễn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
