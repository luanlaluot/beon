import Link from "next/link";
import Menu from "../Menu";
export default function Header4({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header
        id="header"
        className={`hidden lg:flex fixed top-0 left-0 right-0 z-40 bg-white transition-all duration-300 ${
          scroll ? "shadow-lg" : ""
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 w-full">
            {/* Logo */}
            <div className="flex-shrink-0 max-w-xs">
              <Link href="/">
                <img
                  src="/assets/img/logo/site-logo-1.svg"
                  alt="Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Main Menu */}
            <nav className="flex-1 mx-8">
              <Menu />
            </nav>

            {/* Quick Contact */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <i className="fa-light fa-phone text-blue-600" />
              </div>
              <div>
                <small className="text-gray-500 text-xs">Hotline 24/7</small>
                <Link
                  href="tel:+49 30 923325544"
                  className="block text-gray-900 font-semibold hover:text-blue-600 transition"
                >
                  +49 30 923325544
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
