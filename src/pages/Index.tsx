import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Brain, Shield, Sparkles, Target, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Brain,
    title: "AI Strategy",
    description: "Develop comprehensive AI strategies aligned with your business goals",
    className: "md:col-span-2",
  },
  {
    icon: Zap,
    title: "ML Implementation",
    description: "Build and deploy custom machine learning models for your specific use cases",
  },
  {
    icon: Target,
    title: "Process Automation",
    description: "Automate repetitive tasks and streamline workflows with intelligent automation",
  },
  {
    icon: TrendingUp,
    title: "Data Analytics",
    description: "Extract actionable insights from your data with advanced analytics",
    className: "md:col-span-2",
  },
  {
    icon: Shield,
    title: "AI Governance",
    description: "Ensure responsible AI implementation with robust governance frameworks",
    className: "md:col-span-2",
  },
  {
    icon: Sparkles,
    title: "AI Training",
    description: "Empower your team with comprehensive AI training and workshops",
  },
];

const reasons = [
  {
    title: "Expert Team",
    description:
      "Our team consists of seasoned AI experts with proven track records in delivering successful projects",
  },
  {
    title: "Tailored Solutions",
    description:
      "We don't believe in one-size-fits-all. Every solution is customized to your unique business needs",
  },
  {
    title: "Rapid Deployment",
    description: "Get from concept to production quickly with our agile development methodology",
  },
  {
    title: "Ongoing Support",
    description: "We're with you every step of the way, providing continuous support and optimization",
  },
];

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="reveal mb-10 max-w-2xl md:mb-14">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="text-4xl leading-[1.05] md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-muted-foreground">{children}</p>}
    </div>
  );
}

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pb-20 pt-36 md:pb-32 md:pt-48">
        <div className="aurora -z-10" />
        <div className="grid-fade absolute inset-0 -z-10" />

        <div className="shell text-center">
          <p className="animate-rise glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4 text-sm text-muted-foreground">
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">AI</span>
            Consultancy for the next wave of software
          </p>

          <h1
            className="animate-rise mx-auto max-w-4xl text-[clamp(2.75rem,9vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
            style={{ animationDelay: "80ms" }}
          >
            AI Consultancy for{" "}
            <span className="font-serif font-normal italic tracking-normal text-primary">Modern Businesses</span>
          </h1>

          <p
            className="animate-rise mx-auto mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            Transform your business with cutting-edge artificial intelligence solutions. We help companies leverage AI
            to drive innovation, efficiency, and growth.
          </p>

          <div
            className="animate-rise mx-auto mt-10 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
            style={{ animationDelay: "240ms" }}
          >
            <Button asChild size="lg">
              <Link to="/contact">
                Get Started <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/#services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24">
        <div className="shell">
          <div className="reveal glass relative overflow-hidden rounded-[2rem] p-8 md:p-14">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">About TinyISV</p>
            <p className="max-w-4xl text-2xl font-medium leading-snug tracking-tight md:text-4xl md:leading-tight">
              We're a team of AI experts dedicated to helping businesses of all sizes harness the power of artificial
              intelligence.{" "}
              <span className="text-muted-foreground">
                With years of experience in machine learning, data science, and business transformation, we deliver
                practical AI solutions that drive real results.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            eyebrow="Our Services"
            title={
              <>
                Everything you need to <span className="font-serif font-normal italic">ship AI</span>
              </>
            }
          >
            Comprehensive AI solutions tailored to your business needs
          </SectionHeading>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description, className }) => (
              <article
                key={title}
                className={cn(
                  "reveal glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 md:p-8",
                  className,
                )}
              >
                <div className="absolute -right-16 -top-16 size-48 rounded-full bg-primary/0 blur-3xl transition-colors duration-500 group-hover:bg-primary/20" />
                <div className="mb-10 grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 md:mb-16">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-xl md:text-2xl">{title}</h3>
                <p className="mt-2 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="py-16 md:py-24">
        <div className="shell">
          <SectionHeading eyebrow="Why Choose TinyISV" title="Advantages that set us apart" />

          <ol className="grid gap-px overflow-hidden rounded-3xl border bg-border md:grid-cols-2">
            {reasons.map(({ title, description }, i) => (
              <li key={title} className="reveal flex gap-5 bg-background p-6 md:p-10">
                <span className="font-serif text-5xl italic leading-none text-primary md:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl">{title}</h3>
                  <p className="mt-2 text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="shell">
          <div className="reveal relative isolate overflow-hidden rounded-[2rem] bg-foreground px-6 py-16 text-center text-background md:px-12 md:py-24">
            <div className="aurora -z-10 opacity-70" />
            <h2 className="mx-auto max-w-3xl text-4xl leading-[1.05] md:text-6xl">
              Ready to Transform Your Business with{" "}
              <span className="font-serif font-normal italic text-accent dark:text-primary">AI?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg opacity-70">
              Let's discuss how we can help you leverage AI to achieve your business goals
            </p>
            <Button asChild size="lg" className="mt-10 bg-background text-foreground hover:bg-background/90">
              <Link to="/contact">
                Schedule a Consultation <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
