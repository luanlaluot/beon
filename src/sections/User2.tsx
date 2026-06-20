import Link from "next/link";

export default function User2() {
  return (
    <section className="py-24 bg-background relative" id="team-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Left Image */}
          <div className="relative group order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white">
              <img
                src="/assets/img/team/user2.png"
                alt="Chuyên gia Kim Vu"
                className="w-full h-auto object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent mix-blend-multiply"></div>
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-primary/10 z-0 rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white font-bold text-sm">
                Đội Ngũ Chuyên Gia
              </div>
              <h2
                data-aos="fade-left"
                data-aos-duration="600"
                className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight tracking-tight"
              >
                Mrs. Kim Vu
              </h2>
              <p
                className="text-xl font-semibold text-primary"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                Chuyên gia Customer Experience & Learning Transformation
              </p>
            </div>
            
            <div className="space-y-4 border-l-2 border-primary/30 pl-6">
              <p
                className="text-base leading-relaxed text-foreground/80"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Hơn 18 năm kinh nghiệm trong lĩnh vực Phát triển nhân lực và Trải nghiệm khách hàng. Đã từng giữ vai trò lãnh đạo tại Sacombank, TTC Group, Pizza 4P’s, Hoàn Mỹ, ALDO Việt Nam.
              </p>
              <p
                className="text-base leading-relaxed text-foreground/80"
                data-aos="fade-left"
                data-aos-duration="1100"
              >
                Nổi bật với khả năng thiết kế hành trình trải nghiệm dịch vụ (Customer Journey) và xây dựng văn hoá lấy khách hàng làm trung tâm, giúp biến dịch vụ thành trải nghiệm chạm đến cảm xúc.
              </p>
              <p
                className="text-sm leading-relaxed text-foreground/60"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <strong>Học vấn & Chứng chỉ:</strong> MBA (University of Bolton); Cử nhân Sư phạm; Instructional Design Certificate; Points of You Practitioner.
              </p>
            </div>

            <div 
              className="flex items-center gap-4 pt-2"
              data-aos="fade-left"
              data-aos-duration="1300"
            >
              <a href="#" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/30 transition-all duration-300">
                <i className="fa-brands fa-facebook-f text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-[#0A66C2]/30 transition-all duration-300">
                <i className="fa-brands fa-linkedin-in text-lg" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
