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
            Giải Pháp Đào Tạo <span className="text-blue-300">Khác Biệt</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-base text-white/80 leading-relaxed"
          >
            {`BEON mang đến giải pháp đào tạo toàn diện cho SME, giúp doanh nghiệp triển khai nhanh, chi phí hợp lý nhưng vẫn đạt chuẩn chuyên nghiệp. Các chương trình được thiết kế thực tiễn, học để áp dụng ngay, tích hợp trên hệ thống học tập hiện đại, dễ quản lý tiến độ.`}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Corporate Training",
              subtitle: "Đào tạo doanh nghiệp In-house",
              desc: "BEON mang đến các chương trình đào tạo chuyên sâu về dịch vụ khách hàng dành cho doanh nghiệp trong lĩnh vực F&B, Bán lẻ và Dịch vụ (Hospitality).",
              icon: "fa-solid fa-map-location-dot"
            },
            {
              title: "Coaching",
              subtitle: "Huấn luyện & Phát triển năng lực",
              desc: "Giải pháp E-learning for SME được thiết kế theo tiêu chí: nhanh - hiệu quả - chi phí hợp lý, giúp doanh nghiệp chuyển đổi từ đào tạo truyền thống sang mô hình học tập linh hoạt và đo lường được hiệu quả.",
              icon: "fa-solid fa-laptop-code"
            },
            {
              title: "Learning Media as a Service (LMaaS)",
              subtitle: "Phòng thiết kế E-learning thuê ngoài",
              desc: "BEON Academy đóng vai trò như phòng thiết kế nội dung nội bộ thuê ngoài cho doanh nghiệp, bao gồm: viết kịch bản học tập, thiết kế đồ họa, quay dựng video, hoạt hình 2D/3D, Animation và tích hợp lên LMS. Giải pháp này giúp doanh nghiệp tiết kiệm đến 70% chi phí vận hành bộ phận đào tạo nội bộ, mà vẫn đảm bảo chất lượng và tiến độ triển khai.",
              icon: "fa-solid fa-photo-film"
            },
            {
              title: "E-Learning Solutions",
              subtitle: "Giải pháp học tập trực tuyến cho SME",
              desc: "Giải pháp E-learning for SME được thiết kế theo tiêu chí: nhanh - hiệu quả - chi phí hợp lý, giúp doanh nghiệp chuyển đổi từ đào tạo truyền thống sang mô hình học tập linh hoạt và đo lường được hiệu quả.",
              icon: "fa-solid fa-chalkboard-user"
            },
          ].map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration={800 + index * 100}
              className="cursor-pointer group p-8 rounded-3xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-start gap-5 mb-5">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-2xl text-white`} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-semibold leading-tight">{feature.title}</h3>
                  <p className="text-xs font-bold tracking-widest uppercase text-blue-300 mt-1">{feature.subtitle}</p>
                </div>
              </div>
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
