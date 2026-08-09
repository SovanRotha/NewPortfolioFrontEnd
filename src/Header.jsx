import { useState, useEffect } from "react";

const NAV_LINKS = [
//   { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Awards", href: "#awards" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Apply dark class to <html> and save preference
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Shrink nav on scroll
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }

    setOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');
        .font-serif { font-family: 'Playfair Display', serif !important; }
        body { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-white/90 dark:bg-stone-950/90 backdrop-blur-xl shadow-sm border-b border-transparent
          ${scrolled ? "py-3 border-amber-200/60 dark:border-stone-700/60" : "py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState(null, "", "#home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-serif text-xl font-black tracking-tight"
          >
            <span className="text-amber-600">My</span>
            <span className="text-stone-800 dark:text-stone-100">Portfolio</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="relative text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors
                      after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 after:rounded-full after:transition-all hover:after:w-full"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              className="relative w-12 h-6 rounded-full bg-amber-100 dark:bg-stone-700 border border-amber-200 dark:border-stone-600 transition-colors"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-amber-500 dark:bg-amber-400 flex items-center justify-center transition-transform duration-300 ${
                  dark ? "translate-x-6" : ""
                }`}
              >
                <span className="text-white dark:text-stone-900 text-xs leading-none">
                  {dark ? "🌙" : "☀️"}
                </span>
              </span>
            </button>

            {/* Hamburger (mobile) */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="md:hidden p-2 rounded-xl text-stone-700 dark:text-stone-200 hover:bg-amber-100 dark:hover:bg-stone-700 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={open}
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl border-t border-amber-100 dark:border-stone-700`}
        >
          <ul className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="block w-full py-2.5 text-sm font-medium text-stone-700 dark:text-stone-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;