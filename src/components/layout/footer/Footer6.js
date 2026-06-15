export default function Footer6() {
  return (
    <>
      <footer className="bg-gray-950 text-gray-100">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 pb-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  src="/assets/img/logo/home6-header-logo-w.svg"
                  alt="Logo"
                  className="h-auto"
                />
              </a>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-300 hover:text-white transition">
                Our Services
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Tax Preparation
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Our History
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                Contact Us
              </a>
            </nav>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-lg"
              >
                <i className="fa-brands fa-twitter" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-lg"
              >
                <i className="fa-brands fa-facebook" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition text-lg"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-gray-500 text-sm">
              © Copyright 2021, All Rights Reserved
            </p>
            <div className="flex flex-col md:flex-row gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
