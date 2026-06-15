import Link from "next/link";
export default function Footer1() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 md:col-span-2">
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <img
                    src="/assets/img/logo/logo.png"
                    style={{ height: 60 }}
                    alt="Consultia Logo"
                  />
                </Link>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Giải pháp học tập & đào tạo thông minh cho doanh nghiệp SME Việt
                Nam
              </p>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-2 md:col-span-2 lg:col-span-1">
              <h3 className="text-white font-semibold mb-4 text-lg">
                Get in touch
              </h3>

              {/* Phone */}
              <div className="mb-6">
                <div className="flex items-start gap-3">
                  <img
                    src="/assets/img/icons/contact-phone2.svg"
                    alt="Phone"
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <div className="flex flex-col gap-1">
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition"
                    >
                      USA: +91 02 2585 0556
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition"
                    >
                      UK: +61 02 2585 0556
                    </Link>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-start gap-3">
                  <img
                    src="/assets/img/icons/contact-email2.svg"
                    alt="Email"
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <div className="flex flex-col gap-1">
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition"
                    >
                      Contacthelp@Demoui.co
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition"
                    >
                      Info@consultia.co
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              {/* Copyright */}
              <p className="text-gray-500 text-sm">
                © 2023 Consultia by fleexstudio. All Rights Reserved.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <Link
                  href="#"
                  title="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition duration-300"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
                <Link
                  href="#"
                  title="Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition duration-300"
                >
                  <i className="fa-brands fa-facebook-f" />
                </Link>
                <Link
                  href="#"
                  title="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 text-gray-400 hover:text-white transition duration-300"
                >
                  <i className="fa-brands fa-instagram" />
                </Link>
                <Link
                  href="#"
                  title="TikTok"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition duration-300"
                >
                  <i className="fa-brands fa-tiktok" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
