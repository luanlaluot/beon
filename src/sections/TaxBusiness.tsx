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
            {'BEON mang đến giải pháp đào tạo toàn diện cho SME, giúp doanh nghiệp triển khai nhanh, chi phí hợp lý nhưng vẫn đạt chuẩn chuyên nghiệp. Các chương trình được thiết kế thực tiễn, học để áp dụng ngay, tích hợp trên hệ thống học tập hiện đại, dễ quản lý tiến độ.'}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "CORPORATE TRAINING",
              desc: "BEON mang đến các chương trình đào tạo chuyên sâu về dịch vụ khách hàng dành cho doanh nghiệp trong lĩnh vực F&B, Bán lẻ và Dịch vụ (Hospitality). ",
              icon: "fa-solid fa-map-location-dot"
            },
            {
              title: "CORPORATE TRAINING",
              desc: "Giải pháp “E-learning for SME” được thiết kế theo tiêu chí: nhanh – hiệu quả – chi phí hợp lý, giúp doanh nghiệp chuyển đổi từ đào tạo truyền thống sang mô hình học tập linh hoạt và đo lường được hiệu quả.",
              icon: "fa-solid fa-laptop-code"
            }
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
