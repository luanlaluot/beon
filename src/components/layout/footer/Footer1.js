import Link from "next/link";
export default function Footer1() {
  return (
    <>
      <footer className="bg-foreground text-white/80 pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <img
                    src="/assets/img/logo/logo.png"
                    style={{ height: 60 }}
                    alt="Beon Logo"
                    className="brightness-0 invert"
                  />
                </Link>
              </div>
              <p className="text-white/60 text-base leading-relaxed max-w-sm">
                Giải pháp học tập & đào tạo thông minh cho doanh nghiệp SME Việt
                Nam
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-white font-display font-semibold mb-6 text-lg tracking-wide">
                Liên Hệ
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-phone text-base" />
                  </div>
                  <Link
                    href="tel:+84123456789"
                    className="text-white/60  text-sm hover:text-primary transition-colors duration-300"
                  >
                    +84 938 510 268
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-at text-base" />
                  </div>
                  <Link
                    href="mailto:hello@beon.vn"
                    className="text-white/60 text-sm hover:text-primary transition-colors duration-300"
                  >
                    consultant@beon.edu.vn
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-location-dot text-base" />
                  </div>
                  <Link
                    href="mailto:hello@beon.vn"
                    className="text-white/60 text-sm hover:text-primary transition-colors duration-300"
                  >
                    64 Le Cong Kieu St. Ben Thanh Ward, HCMC
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <p className="text-white/40 text-sm">
                &copy; {new Date().getFullYear()} Beon. Tất cả quyền được bảo
                lưu.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  {
                    icon: "fa-linkedin-in",
                    label: "LinkedIn",
                    hover: "hover:bg-[#0A66C2]",
                  },
                  {
                    icon: "fa-facebook-f",
                    label: "Facebook",
                    hover: "hover:bg-[#1877F2]",
                  },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href="#"
                    title={social.label}
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/60 hover:text-white transition-all duration-300 border border-white/5 ${social.hover}`}
                  >
                    <i className={`fa-brands ${social.icon}`} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
