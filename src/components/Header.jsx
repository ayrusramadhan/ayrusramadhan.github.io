import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAME } from "../data.js";

const menus = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const linkClass = ({ isActive }) =>
  [
    "flex min-h-[44px] items-center rounded-full px-4 py-2",
    "text-[15px] font-semibold transition-colors",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-tang",
    isActive ? "bg-ink text-ground" : "text-ink hover:bg-lilac",
  ].join(" ");

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(scrollTop > 8);
      setProgress(
        height > 0 ? Math.min(1, Math.max(0, scrollTop / height)) : 0,
      );
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Tutup menu setelah berpindah halaman.
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Tutup menu saat masuk ukuran desktop.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const onChange = () => {
      if (mediaQuery.matches) setMenuOpen(false);
    };

    onChange();
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  // Tutup menu ketika klik di luar header atau menekan Escape.
  useEffect(() => {
    if (!menuOpen) return;

    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-tang"
        style={{ transform: `scaleX(${progress})` }}
      />

      <header
        ref={headerRef}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setMenuOpen(false);
          }
        }}
        className={[
          "sticky top-0 z-50 w-full bg-ground font-sans",
          "transition-shadow duration-200",
          scrolled || menuOpen ? "shadow-[0_6px_24px_rgba(18,17,43,0.10)]" : "",
        ].join(" ")}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between gap-4 px-5 md:h-[76px] md:px-8">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex min-w-0 items-center gap-2.5 rounded-md text-[18px] font-extrabold tracking-[-0.02em] text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tang md:text-[20px]"
          >
            <span
              aria-hidden="true"
              className="size-4 shrink-0 rounded-full bg-tang"
            />

            <span className="truncate">{NAME}</span>
          </Link>

          {/* Menu desktop */}
          <nav
            aria-label="Main navigation"
            className="hidden shrink-0 items-center gap-2 md:flex"
          >
            {menus.map((menu) => (
              <NavLink key={menu.to} to={menu.to} className={linkClass}>
                {menu.label}
              </NavLink>
            ))}
          </nav>

          {/* Tombol menu mobile */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-lilac focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tang md:hidden"
          >
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Dropdown mobile: tidak mendorong konten halaman */}
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
          className="absolute inset-x-0 top-full border-t border-line bg-ground px-5 py-3 shadow-[0_12px_24px_rgba(18,17,43,0.10)] md:hidden"
        >
          <div className="flex flex-col gap-1">
            {menus.map((menu) => (
              <NavLink
                key={menu.to}
                to={menu.to}
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                {menu.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
