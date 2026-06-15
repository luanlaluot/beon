"use client";

import { type ReactNode, useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import DemoSidebar from "./DemoSidebar";
import MobileMenu from "./MobileMenu";
import PageHead from "./PageHead";
import Footer1 from "./footer/Footer1";
import Header1 from "./header/Header1";

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
      <Header1
        scroll={scroll}
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />
      {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
      {children}
      <Footer1 />
      <DemoSidebar />
      <BackToTop scroll={scroll} />
    </>
  );
}
