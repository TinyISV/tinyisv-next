import { Link } from "react-router";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export function Footer() {
  return (
    <footer className="border-t pb-[max(2rem,env(safe-area-inset-bottom))] pt-10">
      <div className="shell flex flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} TinyISV. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="rounded-full px-3 py-2 transition-colors hover:text-foreground">
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/shahzadahatim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-full transition-colors hover:bg-secondary hover:text-foreground"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href="https://github.com/geoaxis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full transition-colors hover:bg-secondary hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
