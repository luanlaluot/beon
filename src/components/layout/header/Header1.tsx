import Link from "next/link";
import Menu from "../Menu";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header
        id="header"
        className={`hidden lg:block fixed top-0 left-0 right-0 z-40 bg-white transition-all duration-300 ${
          scroll ? "shadow-sm sticky top-0" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/assets/img/logo/logo.png"
                  alt="Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-2 bg-[#007CD8] text-lg hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300 h-12 leading-none"
              >
                Liên hệ ngay
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
