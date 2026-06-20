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
            className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-6"
          >
            Giải Pháp Đào Tạo <span className="text-white opacity-90 border-b-4 border-white/30 pb-1">Khác Biệt</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-lg leading-relaxed text-on-primary/80"
          >
            Triển khai nhanh, chi phí tối ưu và đạt chuẩn chuyên nghiệp. Các chương trình được thiết kế thực tiễn, học để áp dụng ngay trên nền tảng quản lý hiện đại.
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Block 1 */}
          <div
            className="rounded-3xl p-10 bg-on-primary/5 border border-on-primary/10 backdrop-blur-md hover:bg-on-primary/10 transition-colors duration-300 group"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 text-white transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-accent/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-display font-semibold mb-4 text-on-primary">
              Huấn Luyện Dịch Vụ Khách Hàng
            </h3>
            <p className="text-lg text-on-primary/80 leading-relaxed">
              Các chương trình đào tạo chuyên sâu về kỹ năng chăm sóc và dịch vụ khách hàng dành riêng cho doanh nghiệp trong lĩnh vực F&B, Bán lẻ và Dịch vụ (Hospitality).
            </p>
          </div>

          {/* Block 2 */}
          <div
            className="rounded-3xl p-10 bg-on-primary/5 border border-on-primary/10 backdrop-blur-md hover:bg-on-primary/10 transition-colors duration-300 group"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-white transform group-hover:-rotate-12 transition-transform duration-300 shadow-lg shadow-secondary/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-display font-semibold mb-4 text-on-primary">
              Chuyển Đổi E-learning (SME)
            </h3>
            <p className="text-lg text-on-primary/80 leading-relaxed">
              Thiết kế theo tiêu chí: nhanh – hiệu quả – chi phí hợp lý. Giúp tổ chức chuyển từ đào tạo truyền thống sang mô hình học tập trực tuyến linh hoạt, đo lường được ngay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
