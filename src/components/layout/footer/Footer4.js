import Link from "next/link";
export default function Footer4() {
  return (
    <>
      <footer className="bg-blue-900 text-white">
        {/* Newsletter Section */}
        <div className="bg-blue-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <h3 className="text-xl font-semibold">
                Join Us today and let us help you to grow your business.
              </h3>
              <Link
                href="#"
                className="btn-primary inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                Get a Free Consultaion
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <img
                  src="/assets/img/logo/site-logo-1.svg"
                  alt="Logo"
                  className="max-w-xs"
                />
              </Link>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>

              {/* Social Links */}
              <div className="flex gap-3 mb-4">
                <Link
                  href="#"
                  title="LinkedIn"
                  className="text-blue-200 hover:text-white transition text-lg"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </Link>
                <Link
                  href="#"
                  title="Facebook"
                  className="text-blue-200 hover:text-white transition text-lg"
                >
                  <i className="fa-brands fa-facebook-f" />
                </Link>
                <Link
                  href="#"
                  title="Instagram"
                  className="text-blue-200 hover:text-white transition text-lg"
                >
                  <i className="fa-brands fa-instagram" />
                </Link>
                <Link
                  href="#"
                  title="TikTok"
                  className="text-blue-200 hover:text-white transition text-lg"
                >
                  <i className="fa-brands fa-tiktok" />
                </Link>
              </div>
              <p className="text-blue-200 text-sm">© 2023 Consultia Limited.</p>
            </div>

            {/* Learn Section */}
            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-4">Learn</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-blue-100 hover:text-white transition"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-100 hover:text-white transition"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-100 hover:text-white transition"
                  >
                    Schedule a demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-100 hover:text-white transition"
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
                    className="text-blue-100 hover:text-white transition"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-100 hover:text-white transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-100 hover:text-white transition"
                  >
                    User Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-blue-100 hover:text-white transition"
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
                    src="/assets/img/icons/contact-phone.svg"
                    alt="Phone"
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <div className="flex flex-col gap-1">
                    <Link
                      href="#"
                      className="text-blue-100 hover:text-white text-sm transition"
                    >
                      USA: +91 02 2585 0556
                    </Link>
                    <Link
                      href="#"
                      className="text-blue-100 hover:text-white text-sm transition"
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
                    src="/assets/img/icons/contact-email.svg"
                    alt="Email"
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <div className="flex flex-col gap-1">
                    <Link
                      href="#"
                      className="text-blue-100 hover:text-white text-sm transition"
                    >
                      Contacthelp@Demoui.co
                    </Link>
                    <Link
                      href="#"
                      className="text-blue-100 hover:text-white text-sm transition"
                    >
                      Info@Demoui.co
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
