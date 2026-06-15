import LogoSlider2 from "@/components/slider/LogoSlider2";
import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <>
      <section className="py-20 bg5 relative" id="home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <div className="title">
                <small
                  data-aos="fade-right"
                  data-aos-duration={600}
                  className="heading-top2 font-semibold text-sm uppercase tracking-wide"
                >
                  Academy
                </small>
                <p
                  data-aos="fade-right"
                  data-aos-duration={800}
                  className="text-4xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6 leading-tight"
                >
                  POWERING ELEARNING TRANSFORMATION
                </p>
                <div className="mb-8">
                  <p
                    className="text-gray-600 text-lg"
                    data-aos="fade-right"
                    data-aos-duration={1000}
                  >
                    BEON – Powering Learning Transformation
                  </p>
                  <p
                    className="text-gray-600 text-lg"
                    data-aos="fade-right"
                    data-aos-duration={1000}
                  >
                    Giải pháp học tập & đào tạo thông minh cho doanh nghiệp SME
                    Việt Nam
                  </p>
                </div>

                <div
                  className="flex gap-4"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                >
                  <Link
                    className="bg-[#007CD8] text-lg inline-flex items-center gap-2 px-6 py-3 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300"
                    href="#"
                  >
                    Liên hệ ngay
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block relative">
              <div
                className="relative"
                data-aos="zoom-out"
                data-aos-duration={800}
              >
                <div className="relative rounded-lg overflow-hidden ">
                  <img
                    className="w-full h-auto rounded-lg"
                    src="/assets/img/bg/main2.jpg"
                    alt="Welcome"
                  />
                  <div className="absolute top-0 right-0">
                    <Image
                      height={100}
                      width={100}
                      src="/assets/img/shapes/tax-shape1.png"
                      alt=""
                    />
                  </div>
                  <div className="absolute -right-[20px]">
                    <img
                      src="/assets/img/shapes/shape-right-bottom2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
