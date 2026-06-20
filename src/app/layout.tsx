import type { ReactNode } from "react";
import "./globals.css";
import "./master.css";
import "./aos.css";
// Import plugin styles as needed
import "public/assets/css/plugins/fontawesome.css";
import "public/assets/css/plugins/nice-select.css";

import "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata = {
  title: "Beon || Giải Pháp Toàn Diện Cho Doanh Nghiệp",
  description: "Trang đích hiện đại và ấn tượng của Beon, chuyên cung cấp các giải pháp tăng trưởng mạnh mẽ.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="vi" id="#top">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
