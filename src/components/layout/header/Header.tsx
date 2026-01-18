import { useCallback, useEffect, useMemo, useState } from "react";
import { Github, Menu } from "lucide-react";

import { cn } from "../../../lib/utils";
import { useLanguage } from "../../../lib/i18n/LanguageContext";
import { uiText } from "../../../lib/i18n/uiText";
import { useActiveSection } from "../../../lib/hooks/useActiveSection";

import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { MobileDrawer } from "./MobileDrawer";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { RESUME } from "../../../data";


export function Header() {
  const { lang } = useLanguage();
  const t = uiText[lang];
  const r = RESUME[lang];
  // GitHub URL’ini resume’den al
  const githubUrl = r.myNetworks.find((n) => n.name === "Github")?.href || "#";
  

  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const nav = useMemo(
    () => [
      { key: "all", href: "#top", id: "top", title: t.nav.all },
      { key: "about", href: "#about", id: "about", title: t.nav.about },
      {
        key: "education",
        href: "#education",
        id: "education",
        title: t.nav.education,
      },
      {
        key: "experience",
        href: "#experience",
        id: "experience",
        title: t.nav.experience,
      },
      {
        key: "projects",
        href: "#projects",
        id: "projects",
        title: t.nav.projects,
      },
      {
        key: "language",
        href: "#language",
        id: "language",
        title: t.nav.language,
      },
      {
        key: "certificates",
        href: "#certificates",
        id: "certificates",
        title: t.nav.certificates,
      },
    ],
    [t],
  );

  const activeId = useActiveSection(nav.map((x) => x.id));

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setIsScrolled(y > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header className={cn("top-8 sm:top-10 z-50 sticky")}>
        <div
          className={cn(
            "mx-auto max-w-6xl flex justify-between gap-10 items-center transition-all duration-300 p-4 z-50",
            isScrolled
              ? "bg-white/80 backdrop-blur-md md:p-6 dark:bg-zinc-900/80 shadow -translate-y-8 md:rounded-3xl"
              : "bg-transparent",
          )}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="#top" className="text-2xl font-black tracking-tight">
              HDU
            </a>
          </div>

          {/* Desktop nav */}
          <div className="flex-1 items-center justify-center hidden lg:flex whitespace-nowrap gap-1">
            {nav.map((link) => (
              <HeaderLink
                key={link.id}
                title={link.title}
                href={link.href}
                isActive={activeId === link.id}
              />
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* GitHub */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <ThemeToggle />

            {/* dil opsiyonu (desktop’ta göster) */}
            <div>
              <LanguageToggle />
            </div>

            {/* Mobile Menu */}
            <button
              className="border size-10 rounded-xl p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300 lg:hidden"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Menu"
              type="button"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        titleLeft={
          <>
            <span className="text-2xl font-black">HB</span>
            <span className="text-sm opacity-70">yourdomain.com</span>
          </>
        }
        items={nav.map((l) => ({
          label: l.title,
          href: l.href,
        }))}
      />

      {/* Next projede bazı sayfalarda gösteriyordu; biz şimdilik hep gösterelim */}
      <ScrollToTopButton />
    </>
  );
}

function HeaderLink({
  title,
  href,
  isActive,
}: {
  title: string;
  href: string;
  isActive: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-full transition-colors",
        isActive
          ? "dark:bg-white dark:text-black bg-zinc-900 text-white"
          : "dark:hover:bg-zinc-800 hover:bg-zinc-100",
      )}
    >
      <a href={href}>{title}</a>
    </div>
  );
}
