import Link from "next/link";

export default function TaxBusiness() {
  return (
    <>
      <div className="tax-business section-padding2 bg6" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md- m-auto">
              <div className="heading2 white-heading text-center">
                <h2 data-aos="fade-up" data-aos-duration={800}>
                  Giải pháp của chúng tôi
                </h2>
                <p
                  style={{
                    color: "white",
                  }}
                  data-aos-duration={1000}
                >
                  BEON mang đến giải pháp đào tạo toàn diện cho SME, giúp doanh
                  nghiệp triển khai nhanh, chiphí hợp lý nhưng vẫn đạt chuẩn
                  chuyên nghiệp. Các chương trình được thiết kế thực tiễn, học
                  đểáp dụng ngay, tích hợp trên hệ thống học tập hiện đại, dễ
                  quản lý tiến độ.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="single-business trans-1">
                <div className="business-icon">
                  {/* <img src="/assets/img/icons/tax-business1.png" alt="" /> */}
                </div>
                <h3>IRS Tax Problems</h3>
                <p>
                  Making a mistake on your return can be costly. From missed
                  deductions, or worse, the dreaded IRS audit.
                </p>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              <div className="single-business trans-1">
                <div className="business-icon">
                  {/* <img src="/assets/img/icons/tax-business2.png" alt="" /> */}
                </div>
                <h3>Tax Preparation and Planning</h3>
                <p>
                  Getting the most our of your income and finances is what sets
                  us apart. Whether you need tax preparation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
