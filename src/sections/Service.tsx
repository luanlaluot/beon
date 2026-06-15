import Link from "next/link";

export default function Service() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div
            className="relative rounded-[2rem] overflow-hidden shadow-2xl"
            data-aos="zoom-out"
            data-aos-duration={800}
          >
            <img
              src="/assets/img/about/about21.png"
              alt="Service"
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h2
              data-aos="fade-left"
              data-aos-duration={800}
              className="text-3xl sm:text-4xl font-bold text-slate-900"
            >
              Triết lí cung cấp dịch vụ
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration={1000}
              className="text-slate-600 leading-8"
            >
              BEON tin rằng 80% kết quả phát triển năng lực đến từ 20% hoạt động
              học tập được thiết kế đúng trọng tâm.
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration={1000}
              className="text-slate-600 leading-8"
            >
              Chúng tôi không chạy theo “đào tạo cho đủ”, mà tập trung vào những
              trải nghiệm học tập mang lại thay đổi thật sự trong hành vi và
              hiệu suất công việc.
            </p>
            <p
              data-aos="fade-left"
              data-aos-duration={1000}
              className="text-slate-600 leading-8"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition duration-300"
              data-aos="fade-right"
              data-aos-duration={1200}
            >
              Schedule a call
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
