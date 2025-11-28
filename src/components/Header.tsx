import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">TinyISV</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="default">
              Contact
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
