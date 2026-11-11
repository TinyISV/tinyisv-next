import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="relative isolate grid min-h-[80dvh] place-items-center overflow-hidden pt-24">
      <div className="aurora -z-10 opacity-60" />
      <div className="shell text-center">
        <p className="font-serif text-[clamp(6rem,25vw,12rem)] italic leading-none text-primary">404</p>
        <p className="mb-8 mt-2 text-xl text-muted-foreground">Oops! Page not found</p>
        <Button asChild>
          <Link to="/">
            <ArrowLeft /> Return to Home
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
