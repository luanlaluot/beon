"use client";

import { type ReactNode, useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer1 from "./footer/Footer";
import Breadcrumb from "./Breadcrumb";
import Header from "./header/Header";

type LayoutProps = {
  headerStyle?: number;
  footerStyle?: number;
  headTitle?: string;
  breadcrumbTitle?: string;
  children: ReactNode;
};

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  children,
}: LayoutProps) {
  const [scroll, setScroll] = useState(false);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init();
    });

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      {/* Fixed grid backdrop: stays still while content scrolls over it */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-background"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.045) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Soft light accents */}
        <div className="absolute -top-[10%] right-[12%] h-[45%] w-[45%] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-[5%] -left-[8%] h-[40%] w-[40%] rounded-full bg-primary/[0.06] blur-[120px]" />
      </div>

      <Header
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
      {children}
      <Footer1 />
      <BackToTop scroll={scroll} />
    </>
  );
}
