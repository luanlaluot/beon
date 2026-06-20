"use client";

import { type ReactNode, useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import PageHead from "./PageHead";
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
      <PageHead headTitle={headTitle} />
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
