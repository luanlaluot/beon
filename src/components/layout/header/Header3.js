import Link from "next/link";
import Menu from "../Menu";
export default function Header3({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header
        id="header"
        className={`hidden lg:flex fixed top-0 left-0 right-0 z-40 bg-gray-100 transition-all duration-300 ${
          scroll ? "shadow-lg" : ""
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/assets/img/logo/site-logo-4.svg"
                  alt="Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Main Menu */}
            <nav className="flex-1 mx-8">
              <Menu />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
