export default function Works() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-[#0A4A87] to-foreground text-on-primary relative" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6 sticky top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm">
                Giá Trị Cốt Lõi
              </div>
              <h2
                data-aos="fade-up"
                data-aos-duration="600"
                className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight tracking-tight"
              >
                Lợi ích mang lại cho <span className="text-secondary underline decoration-secondary/50 underline-offset-4">doanh nghiệp</span> của bạn
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-white/80 text-lg leading-relaxed max-w-lg"
              >
                Beon cam kết mang lại hiệu quả đo lường được thông qua các giải pháp số hóa đào tạo và nâng cao năng lực nhân sự, giúp doanh nghiệp tiết kiệm tài nguyên và phát triển bứt phá.
              </p>
            </div>
          </div>
          
          <div
            className="grid gap-6"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            {[
              {
                number: "01",
                title: "Tối ưu chi phí đào tạo",
                desc: "Giảm thiểu chi phí thuê chuyên gia, in ấn tài liệu và thuê địa điểm lên đến 60% nhờ nền tảng trực tuyến linh hoạt."
              },
              {
                number: "02",
                title: "Nâng cao năng suất nhân sự",
                desc: "Trang bị kỹ năng thực chiến nhanh chóng giúp nhân viên áp dụng ngay vào công việc, tăng hiệu suất hoạt động."
              },
              {
                number: "03",
                title: "Quản lý tiến độ dễ dàng",
                desc: "Hệ thống báo cáo tự động giúp nhà quản lý theo dõi sát sao lộ trình học tập và chất lượng đầu ra của từng cá nhân."
              },
              {
                number: "04",
                title: "Văn hóa học tập chủ động",
                desc: "Khơi dậy tinh thần tự học mọi lúc mọi nơi nhờ giao diện thân thiện và nội dung được tối ưu hóa cho di động."
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md hover:bg-white/20 hover:border-white/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] z-0 group-hover:bg-white/10 transition-colors"></div>
                
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-primary font-display text-xl font-bold group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-lg">
                  {step.number}
                </div>

                <div className="relative z-10 flex flex-col flex-1">
                  <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
