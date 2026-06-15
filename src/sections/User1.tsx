import Link from "next/link";

export default function User1() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="title space-y-6">
            <small
              data-aos="fade-left"
              data-aos-duration={600}
              className="heading-top2 text-sm uppercase tracking-[0.3em] text-black"
            >
              Mr. Viktor H. Ng (Quang Nguyen)
            </small>
            <p
              className="text-3xl sm:text-4xl font-semibold leading-tight text-slate-900"
              data-aos="fade-right"
              data-aos-duration={900}
            >
              Chuyên gia Đào tạo & phát triển nhân tài, E-learning & Performance
              Management
            </p>
            <div className="space-y-4">
              <p
                className="text-base leading-8 text-slate-600"
                data-aos="fade-right"
                data-aos-duration={1200}
              >
                Với hơn 13 năm kinh nghiệm trong lĩnh vực phát triển nhân lực,
                ông Viktor H. Ng đã trực tiếp tư vấn và triển khai các hệ thống
                E-learning, LMS, PMS, OKR cho nhiều doanh nghiệp tại Việt Nam.
              </p>
              <p
                className="text-base leading-8 text-slate-600"
                data-aos="fade-right"
                data-aos-duration={900}
              >
                Ông từng là thành viên Ban Dự án Chuyển đổi số SAP-ERP, hợp tác
                cùng KPMG trong dự án chuyển đổi số của doanh nghiệp quy mô hàng
                nghìn nhân sự. Trưởng dự án xây dựng ChatBot AI nội bộ Công ty
                hàng đầu lĩnh vực Digital Reward tại VN, và vận hành hệ thống
                Performance Management System (PMS) tại Talentnet.
              </p>
              <p
                className="text-base leading-8 text-slate-600"
                data-aos="fade-right"
                data-aos-duration={900}
              >
                Chứng chỉ quốc tế: Certified OKR (C-OKRP™) công nhận bởi ICF &
                HRCI, Certified Project Management Professional (PMP)® (Google),
                Train the Trainer (Dale Carnegie), Instructional Design,
                Competency Modeling, E-learning Design....
              </p>
            </div>
            <Link
              href="#"
              className="text-lg inline-flex items-center gap-2 rounded-xl bg-[#007CD8] px-6 py-3 text-white font-semibold hover:bg-orange-600 transition duration-300"
              data-aos="fade-right"
              data-aos-duration={700}
            >
              Contact <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
          <div className="relative">
            <div
              className=" relative rounded-[2rem]"
              data-aos="fade-left"
              data-aos-duration={1000}
            >
              <img
                src="/assets/img/team/user1.png"
                alt="Profile visual"
                className="w-full h-auto mr-10 rounded-[1.5rem]"
              />
              <div className="absolute -right-6 top-[30px]">
                <img
                  src="/assets/img/image/agents3.png"
                  alt="Overlay"
                  className="w-40 h-auto"
                />
              </div>
              <div className="absolute bottom-6 right-6 w-28 opacity-90">
                <img
                  src="/assets/img/shapes/home4-img-shap.svg"
                  alt="Shape"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
