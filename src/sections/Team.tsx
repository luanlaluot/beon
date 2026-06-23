"use client";
import { useState } from "react";

const members = [
  {
    name: "Mrs. Kim Vu",
    alias: "(Kim Vũ)",
    role: "Chuyên gia Customer Experience & Learning Transformation",
    image: "/assets/img/team/user2.png",
    gradient: "from-secondary/70",
    bio: [
      "Ms. Kim Vu có hơn 18 năm kinh nghiệm trong lĩnh vực Phát triển nhân lực và Trải nghiệm khách hàng, trong đó hơn 10 năm giữ vai trò lãnh đạo tại các tập đoàn như Sacombank, TTC Group, Pizza 4P’s, Hoàn Mỹ, ALDO Việt Nam và Art de Vivre Academy.",
      "Với hơn 18 năm kinh nghiệm theo đuổi nghệ thuật phục vụ và phát triển con người, Ms. Kim Vu tin rằng “mỗi khoảnh khắc tiếp xúc là một cơ hội để chạm vào cảm xúc khách hàng.”",
      "Cô nổi bật với khả năng thiết kế hành trình trải nghiệm dịch vụ (Customer Journey) và xây dựng văn hoá lấy khách hàng làm trung tâm (Service Culture), giúp các doanh nghiệp biến dịch vụ thành trải nghiệm, và trải nghiệm thành giá trị.",
      "Nổi bật với khả năng thiết kế hành trình trải nghiệm dịch vụ (Customer Journey) và xây dựng văn hoá lấy khách hàng làm trung tâm, giúp biến dịch vụ thành trải nghiệm chạm đến cảm xúc.",
    ],
    cert: "MBA – University of Bolton (UK); Cử nhân Sư phạm Tiếng Anh; Instructional Design Certificate; Points of You Practitioner; Mental Health First Aid Certified...",
    facebook: "#",
    linkedin: "#",
  },
  {
    name: "Mr. Viktor H. Ng",
    alias: "(Quang Nguyễn)",
    role: "Chuyên gia Đào tạo & E-learning",
    image: "/assets/img/team/user1.png",
    gradient: "from-primary/70",
    bio: [
      "Với hơn 13 năm kinh nghiệm trong lĩnh vực phát triển nhân lực, ông Viktor H. Ng đã trực tiếp tư vấn và triển khai các hệ thống E-learning, LMS, PMS, OKR cho nhiều doanh nghiệp tại Việt Nam.",
      "Anh là Trưởng nhóm dự án xây dựng ChatBot AI nội bộ Công ty dẫn đầu thị trường Digital Reward tại VN, từng là thành viên Ban Dự án Chuyển đổi số SAP-ERP, phối hợp cùng KPMG trong dự án chuyển đổi số của doanh nghiệp top đầu ngành sữa quy mô hàng nghìn nhân sự, và vận hành hệ thống Performance Management System (PMS) tại Công ty tư vấn nhân sự hàng đầu VN, góp phần chuẩn hóa và số hóa quy trình đào tạo & đánh giá hiệu suất.",
      "Từng là thành viên Ban Dự án Chuyển đổi số SAP-ERP, hợp tác cùng KPMG. Ông cũng là Trưởng dự án xây dựng ChatBot AI nội bộ cho các tập đoàn quy mô hàng nghìn nhân sự.",
    ],
    cert: "Certified OKR (C-OKRP™) công nhận bởi ICF & HRCI, Certified Project Management Professional (PMP)® (Google), Train the Trainer (Dale Carnegie), Instructional Design, Competency Modeling, E-learning Design....",
    facebook: "#",
    linkedin: "#",
  },

  // {
  //   name: "Mr. Minh Trần",
  //   alias: "(Minh Trần)",
  //   role: "Giám đốc Công nghệ & Hệ thống LMS",
  //   image: "/assets/img/team/user1.png",
  //   gradient: "from-[#0A4A87]/70",
  //   bio: [
  //     "Hơn 10 năm kinh nghiệm triển khai các nền tảng công nghệ học tập (LMS/LXP) cho doanh nghiệp từ 200 đến 5,000+ nhân sự. Từng dẫn dắt đội kỹ thuật tại FPT Software và VNG Corporation.",
  //     "Chuyên gia tích hợp SCORM, xAPI, AI-personalized learning path — giúp doanh nghiệp đo lường chính xác hiệu quả đào tạo và tối ưu ROI trên từng khóa học.",
  //   ],
  //   cert: "AWS Certified Solutions Architect; Google Cloud Professional; Moodle Certified Integrator; Agile Scrum Master.",
  //   facebook: "#",
  //   linkedin: "#",
  // },
  // {
  //   name: "Mrs. Lan Phương",
  //   alias: "(Lan Phương)",
  //   role: "Trưởng bộ phận Thiết kế Nội dung & Instructional Design",
  //   image: "/assets/img/team/user2.png",
  //   gradient: "from-accent/70",
  //   bio: [
  //     "Chuyên gia thiết kế nội dung học tập (Instructional Design) với hơn 9 năm kinh nghiệm xây dựng chương trình đào tạo cho các tập đoàn F&B, Bán lẻ và Dịch vụ tài chính.",
  //     "Đã sản xuất hơn 500+ module E-learning dạng video tương tác, gamification và microlearning — giúp người học tăng tỷ lệ hoàn thành khóa học lên đến 85%.",
  //   ],
  //   cert: "Certified Instructional Designer (ATD); Adobe Captivate Expert; Articulate Storyline 360; TESOL Certificate.",
  //   facebook: "#",
  //   linkedin: "#",
  // },
  // {
  //   name: "Mr. Đức Anh",
  //   alias: "(Đức Anh)",
  //   role: "Chuyên gia Tư vấn Chiến lược & Phát triển Doanh nghiệp",
  //   image: "/assets/img/team/user1.png",
  //   gradient: "from-primary/60",
  //   bio: [
  //     "Hơn 15 năm trong lĩnh vực tư vấn chiến lược nhân sự và phát triển tổ chức. Đã đồng hành cùng hơn 80 doanh nghiệp SME Việt Nam xây dựng lộ trình số hóa đào tạo bài bản.",
  //     "Chuyên gia xây dựng hệ thống OKR, KPI liên kết với kết quả đào tạo, giúp nhà lãnh đạo ra quyết định dựa trên dữ liệu năng lực nhân sự thực tế.",
  //   ],
  //   cert: "Certified Business Coach (ICF); Strategic HR Management (SHRM-SCP); OKR Professional Coach; Design Thinking Facilitator.",
  //   facebook: "#",
  //   linkedin: "#",
  // },
];

export default function Team() {
  const [active, setActive] = useState(0);
  const member = members[active];

  const prev = () =>
    setActive((a) => (a - 1 + members.length) % members.length);
  const next = () => setActive((a) => (a + 1) % members.length);

  return (
    <section className="py-24 bg-muted relative overflow-hidden" id="team">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-primary text-white font-bold text-sm mb-4">
            Đội Ngũ Chuyên Gia
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground tracking-tight">
            Những con người <span className="text-primary">đứng sau Beon</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white aspect-[4/5] max-w-md mx-auto">
                <img
                  key={active}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${member.gradient} to-transparent`}
                />

                {/* Name overlay on image */}
                {/* <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-1">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(members.length).padStart(2, "0")}
                  </p>
                  <h3 className="text-3xl font-display font-bold leading-tight">
                    {member.name}
                  </h3>
                  {member.alias && (
                    <p className="text-white/70 text-sm mt-1">{member.alias}</p>
                  )}
                </div> */}
              </div>

              {/* BG decorative */}
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl bg-accent/20 z-0 rotate-3 group-hover:rotate-6 transition-transform duration-500 max-w-md mx-auto" />
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight tracking-tight">
                  {member.name}
                  {member.alias && (
                    <span className="block text-xl mt-2 text-foreground/50 font-normal">
                      {member.alias}
                    </span>
                  )}
                </h2>
                <p className="text-lg font-semibold text-primary">
                  {member.role}
                </p>
              </div>

              <div className="space-y-4 border-l-2 border-primary/30 pl-6">
                {member.bio.map((line, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-foreground/80"
                  >
                    {line}
                  </p>
                ))}
                <p className="text-sm leading-relaxed text-foreground/60">
                  <strong>Chứng chỉ / Học vấn:</strong> {member.cert}
                </p>
              </div>

              {/* Social + Nav */}
              <div className="flex items-center justify-between pt-4">
                {/* Social */}
                <div className="flex items-center gap-3">
                  <a
                    href={member.facebook}
                    className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/30 transition-all duration-300"
                  >
                    <i className="fa-brands fa-facebook-f text-base" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-[#0A66C2]/30 transition-all duration-300"
                  >
                    <i className="fa-brands fa-linkedin-in text-base" />
                  </a>
                </div>

                {/* Arrow Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                    aria-label="Trước"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                    aria-label="Tiếp"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {members.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? "w-8 bg-primary"
                        : "w-2 bg-border hover:bg-primary/50"
                    }`}
                    aria-label={`Thành viên ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail strip */}
        {members.length > 1 && (
          <div className="mt-16 flex gap-4 justify-center overflow-x-auto pb-2">
            {members.map((m, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 flex flex-col items-center gap-2 group transition-all duration-300 ${
                  i === active ? "opacity-100" : "opacity-50 hover:opacity-80"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                    i === active
                      ? "border-primary shadow-lg shadow-primary/20"
                      : "border-border"
                  }`}
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-semibold text-foreground/60 group-hover:text-primary transition-colors max-w-[80px] text-center leading-tight">
                  {m.name.replace(/^(Mr\.|Mrs\.) /, "")}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
