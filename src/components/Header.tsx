import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/#about", label: "About" },
  { to: "/#services", label: "Services" },
  { to: "/#why", label: "Why us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route or hash changes
  const [lastLocation, setLastLocation] = useState(location);
  if (location !== lastLocation) {
    setLastLocation(location);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[max(0.75rem,env(safe-area-inset-top))]">
      <div className="shell">
        <nav
          className={cn(
            "glass flex h-14 items-center justify-between rounded-full pl-5 pr-1.5 transition-shadow duration-300",
            scrolled && "shadow-lg shadow-foreground/5",
          )}
        >
          <Link to="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="grid size-7 place-items-center rounded-lg bg-foreground text-xs font-bold text-background">
              t
            </span>
            TinyISV
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Button key={link.to} asChild variant="ghost" size="sm">
                <Link to={link.to}>{link.label}</Link>
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <NavLink to="/contact">
                Contact <ArrowUpRight />
              </NavLink>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5!" /> : <Menu className="size-5!" />}
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            "glass mt-2 origin-top overflow-hidden rounded-3xl p-2 shadow-2xl shadow-foreground/10 transition-all duration-300 md:hidden",
            open ? "visible scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0",
          )}
        >
          {[...links, { to: "/contact", label: "Contact" }].map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-medium transition-colors hover:bg-secondary active:bg-secondary"
              style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
            >
              {link.label}
              <ArrowUpRight className="size-5 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </div>

      {open && (
        <button
          aria-label="Close menu"
          tabIndex={-1}
          className="fixed inset-0 -z-10 bg-background/40 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
