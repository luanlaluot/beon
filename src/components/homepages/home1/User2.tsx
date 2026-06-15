import Link from "next/link";

export default function User2() {
  return (
    <>
      <div className="home4-about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="choos-images">
                <div
                  className="choose-img-1"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                >
                  <img src="/assets/img/case-study/choose-img4.png" alt="" />
                </div>
                <div
                  style={{
                    position: "absolute",
                    left: "auto",
                    top: "50%",
                  }}
                  data-aos="zoom-out"
                  data-aos-duration={1000}
                >
                  <img src="/assets/img/image/agents3.png" alt="" />
                </div>
                <div className="choose-img-3">
                  <img src="/assets/img/shapes/home4-img-shap.svg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="heading2 ml50">
                <small
                  data-aos="fade-left"
                  data-aos-duration={600}
                  className="heading-top"
                >
                  Mrs. Kim Vu
                </small>
                <div className="space10" />
                <h1
                  className="font-f-6 font-30 font-lg-42 weight-600 line-height-38 line-height-lg-48 color4"
                  data-aos="fade-right"
                  data-aos-duration={900}
                >
                  Chuyên gia Customer Experience & Learning Transformation
                </h1>
                <div className="space10" />
                <p
                  className="font-f-5 font-20 line-height-lg-32 weight-400 color-p-4"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                >
                  Ms. Kim Vu có hơn 18 năm kinh nghiệm trong lĩnh vực Phát triển
                  nhân lực và Trải nghiệm khách hàng, trong đó hơn 10 năm giữ
                  vai trò lãnh đạo tại các tập đoàn như Sacombank, TTC Group,
                  Pizza 4P’s, Hoàn Mỹ, ALDO Việt Nam và Art de Vivre Academy.
                </p>
                <p
                  className="font-f-5 font-20 line-height-lg-32 weight-400 color-p-4"
                  data-aos="fade-right"
                  data-aos-duration={900}
                >
                  {" "}
                  Với hơn 18 năm kinh nghiệm theo đuổi nghệ thuật phục vụ và
                  phát triển con người, Ms. Kim Vu tin rằng “mỗi khoảnh khắc
                  tiếp xúc là một cơ hội để chạm vào cảm xúc khách hàng.”
                </p>
                <p
                  className="font-f-5 font-20 line-height-lg-32 weight-400 color-p-4"
                  data-aos="fade-right"
                  data-aos-duration={900}
                >
                  Cô nổi bật với khả năng thiết kế hành trình trải nghiệm dịch
                  vụ (Customer Journey) và xây dựng văn hoá lấy khách hàng làm
                  trung tâm (Service Culture), giúp các doanh nghiệp biến dịch
                  vụ thành trải nghiệm, và trải nghiệm thành giá trị.
                </p>
                <p
                  className="font-f-5 font-20 line-height-lg-32 weight-400 color-p-4"
                  data-aos="fade-right"
                  data-aos-duration={900}
                >
                  Nền tảng học vấn & chứng chỉ: MBA – University of Bolton (UK);
                  Cử nhân Sư phạm Tiếng Anh; Instructional Design Certificate;
                  Points of You Practitioner; Mental Health First Aid
                  Certified...
                </p>
                <div className="space20" />
                <Link
                  href="#"
                  className="font-f-5 theme-btn-18"
                  data-aos="fade-right"
                  data-aos-duration={700}
                >
                  Contact <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
