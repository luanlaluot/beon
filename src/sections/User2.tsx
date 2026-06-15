import Link from "next/link";

export default function User2() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative">
            <div
              className="relative rounded-[2rem] p-6"
              data-aos="fade-left"
              data-aos-duration={1000}
            >
              <img
                src="/assets/img/team/user2.png"
                alt="Profile visual"
                className="w-full h-auto rounded-[1.5rem]"
              />
              <div className="absolute top-1/2 -left-10 -translate-y-1/2">
                <img
                  src="/assets/img/image/agents3.png"
                  alt="Overlay"
                  className="w-40 h-auto"
                />
              </div>
              <div className="absolute bottom-6 left-6 w-28 opacity-90">
                <img
                  src="/assets/img/shapes/home4-img-shap.svg"
                  alt="Shape"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="title space-y-6">
            <small
              data-aos="fade-left"
              data-aos-duration={600}
              className="heading-top2 text-sm uppercase tracking-[0.3em]"
            >
              Mrs. Kim Vu
            </small>
            <p
              className="text-3xl sm:text-4xl font-semibold leading-tight text-slate-900"
              data-aos="fade-right"
              data-aos-duration={900}
            >
              Chuyên gia Customer Experience & Learning Transformation
            </p>
            <div className="space-y-4">
              <p
                className="text-base leading-8 text-slate-600"
                data-aos="fade-right"
                data-aos-duration={1200}
              >
                Ms. Kim Vu có hơn 18 năm kinh nghiệm trong lĩnh vực Phát triển
                nhân lực và Trải nghiệm khách hàng, trong đó hơn 10 năm giữ vai
                trò lãnh đạo tại các tập đoàn như Sacombank, TTC Group, Pizza
                4P’s, Hoàn Mỹ, ALDO Việt Nam và Art de Vivre Academy.
              </p>
              <p
                className="text-base leading-8 text-slate-600"
                data-aos="fade-right"
                data-aos-duration={900}
              >
                Với hơn 18 năm kinh nghiệm theo đuổi nghệ thuật phục vụ và phát
                triển con người, Ms. Kim Vu tin rằng “mỗi khoảnh khắc tiếp xúc
                là một cơ hội để chạm vào cảm xúc khách hàng.”
              </p>
              <p
                className="text-base leading-8 text-slate-600"
                data-aos="fade-right"
                data-aos-duration={900}
              >
                Cô nổi bật với khả năng thiết kế hành trình trải nghiệm dịch vụ
                (Customer Journey) và xây dựng văn hoá lấy khách hàng làm trung
                tâm, giúp các doanh nghiệp biến dịch vụ thành trải nghiệm.
              </p>
              <p
                className="text-base leading-8 text-slate-600"
                data-aos="fade-right"
                data-aos-duration={900}
              >
                Nền tảng học vấn & chứng chỉ: MBA – University of Bolton (UK);
                Cử nhân Sư phạm Tiếng Anh; Instructional Design Certificate;
                Points of You Practitioner; Mental Health First Aid Certified...
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
        </div>
      </div>
    </section>
  );
}
