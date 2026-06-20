import Link from "next/link";

export default function User1() {
  return (
    <section className="py-24 bg-muted relative" id="team-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                Đội Ngũ Chuyên Gia
              </div>
              <h2
                data-aos="fade-right"
                data-aos-duration="600"
                className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight tracking-tight"
              >
                Mr. Viktor H. Ng <span className="block text-2xl mt-2 text-foreground/60">(Quang Nguyễn)</span>
              </h2>
              <p
                className="text-xl font-semibold text-primary"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                Chuyên gia Đào tạo & E-learning
              </p>
            </div>
            
            <div className="space-y-4 border-l-2 border-accent/30 pl-6">
              <p
                className="text-base leading-relaxed text-foreground/80"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Với hơn 13 năm kinh nghiệm trong lĩnh vực phát triển nhân lực, ông đã trực tiếp tư vấn và triển khai các hệ thống E-learning, LMS, PMS, OKR cho nhiều doanh nghiệp lớn tại Việt Nam.
              </p>
              <p
                className="text-base leading-relaxed text-foreground/80"
                data-aos="fade-right"
                data-aos-duration="1100"
              >
                Từng là thành viên Ban Dự án Chuyển đổi số SAP-ERP, hợp tác cùng KPMG. Ông cũng là Trưởng dự án xây dựng ChatBot AI nội bộ cho các tập đoàn quy mô hàng nghìn nhân sự.
              </p>
              <p
                className="text-sm leading-relaxed text-foreground/60"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <strong>Chứng chỉ:</strong> Certified OKR (C-OKRP™), Certified PMP® (Google), Train the Trainer (Dale Carnegie), Instructional Design.
              </p>
            </div>
          </div>

          <div className="relative group" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
              <img
                src="/assets/img/team/user1.png"
                alt="Chuyên gia Viktor H. Ng"
                className="w-full h-auto object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full rounded-3xl bg-accent/20 z-0 -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
