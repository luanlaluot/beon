import Link from "next/link";
export default function Footer5() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-100 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <img
                  src="/assets/img/logo/home4-header-logo.svg"
                  alt="Logo"
                  className="h-auto"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            {/* Learn Section */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">Learn</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Schedule a demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Our Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">Our Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    User Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Help Centre
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">Get in touch</h3>

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
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2023 Consultia by fleexstudio. All Rights Reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="#"
                title="LinkedIn"
                className="text-gray-600 hover:text-white transition text-lg"
              >
                <i className="fa-brands fa-linkedin-in" />
              </Link>
              <Link
                href="#"
                title="Facebook"
                className="text-gray-600 hover:text-white transition text-lg"
              >
                <i className="fa-brands fa-facebook-f" />
              </Link>
              <Link
                href="#"
                title="Instagram"
                className="text-gray-600 hover:text-white transition text-lg"
              >
                <i className="fa-brands fa-instagram" />
              </Link>
              <Link
                href="#"
                title="TikTok"
                className="text-gray-600 hover:text-white transition text-lg"
              >
                <i className="fa-brands fa-tiktok" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
