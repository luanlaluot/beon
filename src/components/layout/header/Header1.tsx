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
            <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-base text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1"
              >
                Liên hệ ngay
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
          </div>
        </div>
      </header>
    </>
  );
}
