import type { ReactNode } from "react";
import "./globals.css";
import "public/assets/css/master.css";
import "public/assets/css/aos.css";
// Import plugin styles as needed
import "public/assets/css/nice-select.css";
import "public/assets/css/plugins/fontawesome.css";

import "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://beon.vn"),
  title: {
    default: "Beon | Giải Pháp Đào Tạo & E-Learning Toàn Diện",
    template: "%s | Beon",
  },
  description:
    "Trang đích hiện đại và ấn tượng của Beon, chuyên cung cấp các giải pháp tăng trưởng mạnh mẽ, chuyển đổi số E-learning và đào tạo doanh nghiệp SME Việt Nam.",
  keywords: [
    "E-learning",
    "Đào tạo doanh nghiệp",
    "Chuyển đổi số",
    "Beon Academy",
    "SME Việt Nam",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beon | Giải Pháp Đào Tạo & E-Learning Toàn Diện",
    description:
      "Giải pháp học tập & đào tạo thông minh cho doanh nghiệp SME Việt Nam. Powering Elearning Transformation.",
    url: "https://beon.vn",
    siteName: "Beon",
    images: [
      {
        url: "/assets/img/bg/main2.jpg", // Default OG image
        width: 1200,
        height: 630,
        alt: "Beon Team Workspace",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beon | Giải Pháp Đào Tạo & E-Learning Toàn Diện",
    description:
      "Giải pháp học tập & đào tạo thông minh cho doanh nghiệp SME Việt Nam. Powering Elearning Transformation.",
    images: ["/assets/img/bg/main2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="vi" id="top">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
