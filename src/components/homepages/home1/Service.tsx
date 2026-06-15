import Link from "next/link";

export default function Service() {
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
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading2 no-margin-heading ml50">
                <h2 data-aos="fade-left" data-aos-duration={800}>
                  Triết lí cung cấp dịch vụ
                </h2>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  BEON tin rằng 80% kết quả phát triển năng lực đến từ 20% hoạt
                  động học tập được thiết kế đúng trọng tâm.
                </p>

                <p data-aos="fade-left" data-aos-duration={1000}>
                  Chúng tôi không chạy theo “đào tạo cho đủ”, mà tập trung vào
                  những trải nghiệm học tập mang lại thay đổi thật sự trong hành
                  vi và hiệu suất công việc.
                </p>
                <p data-aos="fade-left" data-aos-duration={1000}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div className="space50" />
                <div
                  className="button-group"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                >
                  <Link className="theme-btn-2" href="#">
                    Schedule a call{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
