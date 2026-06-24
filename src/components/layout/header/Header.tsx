"use client";

import Link from "next/link";
import { useState } from "react";

type MenuItem = {
  label: string;
  target: string;
};

type MenuGroup = {
  label: string;
  items: MenuItem[];
};

const MENU: MenuGroup[] = [
  {
    label: "BEON Solutions",
    items: [
      { label: "Corporate Training", target: "process-corporate" },
      { label: "E-learning Solutions", target: "solutions" },
      { label: "Learning Media as Service", target: "benefits" },
    ],
  },
  {
    label: "Client Stories",
    items: [
      { label: "E-learning Products", target: "who-we-help" },
      { label: "Resources", target: "pricing" },
    ],
  },
  {
    label: "About BEON",
    items: [
      { label: "Our Vision, Mission", target: "about" },
      { label: "Our People & Value", target: "team" },
      { label: "Our Service philosophy", target: "philosophy" },
    ],
  },
];

const HEADER_OFFSET = 96;

function scrollToSection(target: string) {
  const el = document.getElementById(target);
  if (!el) return;
  const top =
    el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Header({ scroll, isMobileMenu, handleMobileMenu }) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const handleSelect = (target: string) => {
    scrollToSection(target);
    if (isMobileMenu) handleMobileMenu();
  };

  return (
    <header
      id="header"
      className={`block fixed top-0 left-0 right-0 z-40 bg-white transition-all duration-300 ${
        scroll ? "shadow-sm" : ""
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

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {MENU.map((group) => (
              <div key={group.label} className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-base font-semibold text-foreground rounded-lg transition-colors group-hover:text-primary"
                >
                  {group.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  <div className="min-w-[260px] rounded-2xl border border-border bg-white p-2 shadow-xl shadow-black/5">
                    {group.items.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => handleSelect(item.target)}
                        className="flex w-full items-center rounded-xl px-4 py-3 text-left text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleSelect("contact");
              }}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-base text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1"
            >
              Đặt lịch ngay
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={handleMobileMenu}
              aria-label="Toggle menu"
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg border border-border text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenu && (
        <div className="lg:hidden border-t border-border bg-white max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {MENU.map((group) => (
              <div key={group.label} className="border-b border-border/60 last:border-0">
                <button
                  type="button"
                  onClick={() =>
                    setOpenGroup(openGroup === group.label ? null : group.label)
                  }
                  className="flex w-full items-center justify-between py-3 text-base font-semibold text-foreground"
                >
                  {group.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openGroup === group.label ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {openGroup === group.label && (
                  <div className="pb-3 pl-2 space-y-1">
                    {group.items.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => handleSelect(item.target)}
                        className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-primary"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleSelect("contact");
              }}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-primary text-base text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300"
            >
              Đặt lịch ngay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
