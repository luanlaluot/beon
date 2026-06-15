import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="about-area section-padding bg5-left">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-bg-21 mr50"
                data-aos="zoom-out"
                data-aos-duration={800}
              >
                <div className="about-bg-main-img position-relative top-left-polygon-1">
                  <img src="/assets/img/about/about21.png" alt="" />
                  <div className="corner-right-bottom-shape2 position-absolute">
                    <img
                      src="/assets/img/shapes/shape-right-bottom2.png"
                      alt=""
                    />
                  </div>
                  <div className="corner-shape2-left position-absolute">
                    <img src="/assets/img/shapes/tax-shape2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading2 no-margin-heading ml50">
                <small
                  data-aos="fade-left"
                  data-aos-duration={600}
                  className="heading-top"
                >
                  <img src="/assets/img/icons/hands.svg" alt="" />
                  We Are Here For Your Tax Relief.
                </small>
                <h2 data-aos="fade-left" data-aos-duration={800}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  Lorem Ipsum is simply dummy text of the printing
                </p>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  <h2 data-aos="fade-left" data-aos-duration={800}>
                    Tầm nhìn
                  </h2>
                  Trở thành đơn vị hàng đầu cung cấp giải pháp đào tạo &
                  E-learning toàn diện cho SME, giúp các tổ chức nâng cao năng
                  lực nhân sự bằng công nghệ học tập tiên tiến.
                </p>

                <p data-aos="fade-left" data-aos-duration={1000}>
                  <h2 data-aos="fade-left" data-aos-duration={800}>
                    Sứ mệnh
                  </h2>
                  BEON Academy giúp doanh nghiệp SME “bật công tắc học
                  tập” thông qua giải pháp đào tạo linh hoạt, dễ triển khai và
                  tiết kiệm chi phí – nhưng vẫn giữ chuẩn mực chất lượng, chuyên
                  nghiệp, và hiệu quả thực tiễn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
