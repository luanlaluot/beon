import Link from "next/link";

export default function User1() {
  return (
    <>
      <div className="home4-about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="heading2 mr50">
                <small
                  data-aos="fade-left"
                  data-aos-duration={600}
                  className="heading-top"
                >
                  Mr. Viktor H. Ng (Quang Nguyen)
                </small>
                <div className="space10" />
                <h1
                  className="font-f-6 font-30 font-lg-42 weight-600 line-height-38 line-height-lg-48 color4"
                  data-aos="fade-right"
                  data-aos-duration={900}
                >
                  Chuyên gia Đào tạo & phát triển nhân tài, E-learning &
                  Performance Management
                </h1>
                <div className="space10" />
                <p
                  className="font-f-5 font-20 line-height-lg-32 weight-400 color-p-4"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                >
                  Với hơn 13 năm kinh nghiệm trong lĩnh vực phát triển nhân lực,
                  ông Viktor H. Ng đã trực tiếp tư vấn và triển khai các hệ
                  thống E-learning, LMS, PMS, OKR cho nhiều doanh nghiệp tại
                  Việt Nam.
                </p>
                <div className="space10" />
                <p
                  className="font-f-5 font-20 line-height-lg-32 weight-400 color-p-4"
                  data-aos="fade-right"
                  data-aos-duration={900}
                >
                  {" "}
                  Ông từng là thành viên Ban Dự án Chuyển đổi số SAP -ERP, hợp
                  tác cùng KPMG trong dự án chuyển đổi số của doanh nghiệp quy
                  mô hàng nghìn nhân sự. Trưởng dự án xây dựng ChatBot AI nội bộ
                  Công ty hàng đầu lĩnh vực Digital Reward tại VN, và vận hành
                  hệ thống Performance Management System (PMS) tại Talentnet,
                  góp phần chuẩn hóa và số hóa quy trình đào tạo & đánh giá hiệu
                  suất.
                </p>
                <div className="space10" />
                <p
                  className="font-f-5 font-20 line-height-lg-32 weight-400 color-p-4"
                  data-aos="fade-right"
                  data-aos-duration={900}
                >
                  Chứng chỉ quốc tế: Certified OKR (C-OKRP™) công nhận bởi ICF &
                  HRCI, Certified Project Management Professional
                  (PMP)® (Google), Train the Trainer (Dale Carnegie),
                  Instructional Design, Competency Modeling, E-learning
                  Design....
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
                  className="choose-img-2"
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
          </div>
        </div>
      </div>
    </>
  );
}
