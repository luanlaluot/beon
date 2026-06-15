import LogoSlider2 from "@/components/slider/LogoSlider2";
import Link from "next/link";

export default function Welcome() {
  return (
    <>
      <div className="welcome-area welcome-2 bg5 position-relative" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="title title2">
                <small
                  data-aos="fade-right"
                  data-aos-duration={600}
                  className="heading-top2"
                >
                  Academy
                </small>
                <h1 data-aos="fade-right" data-aos-duration={800}>
                  POWERING ELEARNING TRANSFORMATION
                </h1>
                <div>
                  <p
                    className="mb-0"
                    data-aos="fade-right"
                    data-aos-duration={1000}
                  >
                    BEON – Powering Learning Transformation
                  </p>
                  <p data-aos="fade-right" data-aos-duration={1000}>
                    Giải pháp học tập & đào tạo thông minh cho doanh nghiệp SME
                    Việt Nam
                  </p>
                </div>

                <div className="space30" />
                <div
                  className="btn-group"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                >
                  <Link className="theme-btn-2" href="#">
                    Liên hệ ngay
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                  {/* <Link className="theme-btn-3" href="#">
                    Schdule A Call{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div
                className="hero-img-elements"
                data-aos="zoom-out"
                data-aos-duration={800}
              >
                <div className="hero-main-img position-relative top-right-polygon-1">
                  <img
                    className="border-radius"
                    src="/assets/img/bg/main2.jpg"
                    alt=""
                  />
                  <div className="corner-shape2 position-absolute">
                    <img src="/assets/img/shapes/tax-shape1.png" alt="" />
                  </div>
                  <div className="corner-right-bottom-shape2 position-absolute">
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
      </div>
    </>
  );
}
