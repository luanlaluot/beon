export default function TaxBusiness() {
  return (
    <section
      className="py-24 bg-gradient-to-br from-primary via-[#0A4A87] to-foreground text-on-primary relative overflow-hidden"
      id="solutions"
    >
      {/* Decorative Blocks */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 -skew-x-12 transform origin-top translate-x-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-3xl sm:text-5xl font-display font-bold tracking-tight mb-6"
          >
            Giải Pháp Đào Tạo <span className="text-blue-200">Khác Biệt</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-base text-white/80 leading-relaxed"
          >
            Chúng tôi không chỉ cung cấp các khóa học rời rạc. Beon Academy mang đến hệ thống E-learning toàn diện và lộ trình đào tạo được may đo riêng, giúp doanh nghiệp phát triển bền vững từ bên trong.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Tư Vấn Thiết Kế Lộ Trình",
              desc: "Khảo sát và xây dựng lộ trình học tập bám sát mục tiêu kinh doanh và văn hóa của doanh nghiệp.",
              icon: "fa-solid fa-map-location-dot"
            },
            {
              title: "Hệ Thống LMS Chuyên Biệt",
              desc: "Triển khai nền tảng quản lý học tập (LMS) thân thiện, bảo mật và dễ dàng theo dõi tiến độ nhân sự.",
              icon: "fa-solid fa-laptop-code"
            },
            {
              title: "Số Hóa Bài Giảng (E-learning)",
              desc: "Chuyển đổi tài liệu truyền thống thành bài giảng tương tác cao (Video, SCORM, Gamification...).",
              icon: "fa-solid fa-photo-film"
            },
            {
              title: "Đào Tạo Trực Tiếp (In-house)",
              desc: "Đội ngũ chuyên gia Beon trực tiếp huấn luyện nhân sự với các case-study thực tế từ thị trường.",
              icon: "fa-solid fa-chalkboard-user"
            },
            {
              title: "Xây Dựng Văn Hóa Học Tập",
              desc: "Tổ chức các chiến dịch truyền thông nội bộ giúp khơi dậy tinh thần tự học của nhân viên.",
              icon: "fa-solid fa-seedling"
            },
            {
              title: "Đánh Giá & Đo Lường (ROI)",
              desc: "Cung cấp báo cáo phân tích chi tiết về hiệu quả đào tạo và sự cải thiện năng lực thực tế.",
              icon: "fa-solid fa-chart-line"
            },
          ].map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration={800 + index * 100}
              className="group p-8 rounded-3xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${feature.icon} text-2xl text-white`} />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3">{feature.title}</h3>
              <p className="text-base text-white/80 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
