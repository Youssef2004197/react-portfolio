import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg-deep/80 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto flex items-center gap-4 px-5 md:px-8 py-3">
        <img
          src="/assets/YR.png"
          alt="Youssef Rezgui"
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
        />
        <span className="text-lg font-semibold">Youssef Rezgui</span>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="ml-auto md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-0.5 w-6 bg-ink-primary transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink-primary transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink-primary transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

        <nav className="hidden md:flex ml-auto items-center gap-10">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[17px] text-ink-primary hover:text-accent-soft transition-colors py-1 px-1"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line px-5 pb-4">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-ink-primary hover:text-accent-soft transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
