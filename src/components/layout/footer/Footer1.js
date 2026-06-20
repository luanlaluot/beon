import Link from "next/link";
export default function Footer1() {
  return (
    <>
      <footer className="bg-foreground text-white/80 pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
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
                Đồng hành cùng SME Việt Nam trên chặng đường số hóa đào tạo và tối ưu hóa vận hành nội bộ. Giải pháp tinh gọn, hiệu quả đo lường được.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-display font-semibold mb-6 text-lg tracking-wide">
                Khám Phá
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#about" className="text-white/60 hover:text-primary transition-colors duration-300">
                    Về Chúng Tôi
                  </Link>
                </li>
                <li>
                  <Link href="#philosophy" className="text-white/60 hover:text-primary transition-colors duration-300">
                    Triết Lý Dịch Vụ
                  </Link>
                </li>
                <li>
                  <Link href="#solutions" className="text-white/60 hover:text-primary transition-colors duration-300">
                    Giải Pháp Đào Tạo
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="text-white/60 hover:text-primary transition-colors duration-300">
                    Quy Trình Triển Khai
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-white font-display font-semibold mb-6 text-lg tracking-wide">
                Liên Hệ
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <Link href="tel:+84123456789" className="text-white/60 hover:text-primary transition-colors duration-300">
                    +84 123 456 789
                  </Link>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <Link href="mailto:hello@beon.vn" className="text-white/60 hover:text-primary transition-colors duration-300">
                    hello@beon.vn
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
                &copy; {new Date().getFullYear()} Beon. Tất cả quyền được bảo lưu.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: "fa-linkedin-in", label: "LinkedIn", hover: "hover:bg-[#0A66C2]" },
                  { icon: "fa-facebook-f", label: "Facebook", hover: "hover:bg-[#1877F2]" },
                  { icon: "fa-tiktok", label: "TikTok", hover: "hover:bg-[#000000]" },
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
