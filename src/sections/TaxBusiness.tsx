export default function TaxBusiness() {
  return (
    <section
      className="py-20 bg-[linear-gradient(270deg,_#007CD8_0%,_#1865AE_36.54%,_#403F68_97.12%,_#3B3A60_100%)] text-white"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            data-aos="fade-up"
            data-aos-duration={800}
            className="text-3xl sm:text-4xl font-bold"
          >
            Giải pháp của chúng tôi
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration={800}
            className="mt-6 text-base leading-8 text-slate-300"
          >
            BEON mang đến giải pháp đào tạo toàn diện cho SME, giúp doanh nghiệp
            triển khai nhanh, chi phí hợp lý nhưng vẫn đạt chuẩn chuyên nghiệp.
            Các chương trình được thiết kế thực tiễn, học để áp dụng ngay, tích
            hợp trên hệ thống học tập hiện đại, dễ quản lý tiến độ.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div
            className="rounded-[2rem]  p-8 bg-[#D9D9D933]"
            data-aos="fade-up"
            data-aos-duration={600}
          >
            <h3 className="text-3xl font-semibold text-white mb-3">
              IRS Tax Problems
            </h3>
            <p className="text-lg text-slate-300 leading-7">
              BEON mang đến các chương trình đào tạo chuyên sâu về dịch vụ khách
              hàng dành cho doanh nghiệp trong lĩnh vực F&B, Bán lẻ và Dịch vụ
              (Hospitality).
            </p>
          </div>
          <div
            className="rounded-[2rem] p-8 bg-[#D9D9D933]"
            data-aos="fade-up"
            data-aos-duration={800}
          >
            <h3 className="text-3xl font-semibold text-white mb-3">
              CORPORATE TRAINING
            </h3>
            <p className="text-lg text-slate-300 leading-7">
              Giải pháp “E-learning for SME” được thiết kế theo tiêu chí: nhanh
              – hiệu quả – chi phí hợp lý, giúp doanh nghiệp chuyển đổi từ đào
              tạo truyền thống sang mô hình học tập linh hoạt và đo lường được
              hiệu quả.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
