export default function Works() {
  return (
    <section
      className="py-24 bg-gradient-to-br from-primary via-[#0A4A87] to-foreground text-on-primary relative"
      id="benefits"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6 sticky top-24">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm">
                Lộ Trình E-Learning
              </div>
              <h2
                data-aos="fade-up"
                data-aos-duration="600"
                className="text-3xl sm:text-5xl font-display font-bold text-white leading-tight tracking-tight"
              >
                Lộ Trình{" "}
                <span className="text-white underline decoration-secondary/50 underline-offset-4">
                  E-Learning Solution
                </span>
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-base text-white/80 leading-relaxed max-w-lg"
              >
                Quy trình số hoá đào tạo và triển khai E-learning chuyên nghiệp
                5 bước, từ khảo sát đến vận hành.
              </p>
            </div>
          </div>

          <div
            className="grid gap-6"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            {[
              {
                number: "01",
                title: "Khảo sát & Phân tích nhu cầu",
                desc: [
                  "Làm việc với doanh nghiệp để xác định mục tiêu học tập, nhóm đối tượng, nội dung cần số hoá.",
                  "Phân tích quy trình làm việc, tài liệu hiện có và hành vi học tập nội bộ.",
                ],
              },
              {
                number: "02",
                title: "Thiết kế chương trình & kịch bản học tập",
                desc: [
                  "Xây dựng khung nội dung, mục tiêu học tập, phân chia module và thời lượng.",
                  "Viết kịch bản e-learning chi tiết, storyboard và lộ trình học.",
                ],
              },
              {
                number: "03",
                title: "Triển khai đào tạo",
                desc: [
                  "Thiết kế hình ảnh, video, giọng đọc, tương tác và gamification.",
                  "Đảm bảo chuẩn SCORM / HTML5 tương thích với hệ thống LMS.",
                ],
              },
              {
                number: "04",
                title: "Sản xuất bài giảng điện tử",
                desc: [
                  "Cấu hình và cài đặt hệ thống LMS theo yêu cầu doanh nghiệp.",
                  "Đăng tải khóa học, phân quyền người học, hướng dẫn sử dụng",
                ],
              },
              {
                number: "05",
                title: "Triển khai trên hệ thống LMS",
                desc: [
                  "Thu thập dữ liệu học tập, báo cáo tiến độ, phân tích hành vi người học.",
                  "Đề xuất cải tiến nội dung và trải nghiệm học tập định kỳ",
                ],
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md hover:bg-white/20 hover:border-white/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] z-0 group-hover:bg-white/10 transition-colors"></div>

                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-primary font-display text-xl font-bold group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shadow-lg">
                  {step.number}
                </div>

                <div className="relative z-10 flex flex-col flex-1">
                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <ul className="text-left space-y-2 text-sm text-white/70 w-full mx-auto">
                    {step.desc.map((item, j) => (
                      <li key={j} className="flex gap-2 leading-relaxed">
                        <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
