import type { ComponentType, SVGProps } from "react";
import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import profilePhoto from "@/assets/profile-photo.jpg";

const contacts: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}[] = [
  { icon: Mail, label: "Email", value: "geoaxis@gmail.com", href: "mailto:geoaxis@gmail.com" },
  { icon: Phone, label: "Phone", value: "+46 76 327 5401", href: "tel:+46763275401" },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/shahzadahatim",
    href: "https://www.linkedin.com/in/shahzadahatim",
    external: true,
  },
  { icon: GithubIcon, label: "GitHub", value: "github.com/geoaxis", href: "https://github.com/geoaxis", external: true },
];

export default function Contact() {
  // vCard format for "Add to Contacts"
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Shahzada Hatim Mushtaq
EMAIL:geoaxis@gmail.com
TEL:+46763275401
URL:https://www.linkedin.com/in/shahzadahatim
END:VCARD`;

  const handleDownloadVCard = () => {
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "shahzada-hatim-mushtaq.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      <div className="aurora -z-10 opacity-60" />

      <div className="shell max-w-4xl!">
        <p className="animate-rise mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
        <h1
          className="animate-rise mb-10 text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl"
          style={{ animationDelay: "60ms" }}
        >
          Let's <span className="font-serif font-normal italic tracking-normal">talk.</span>
        </h1>

        {/* Profile */}
        <div className="animate-rise glass rounded-[2rem] p-6 md:p-10" style={{ animationDelay: "120ms" }}>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
            <img
              src={profilePhoto}
              alt="Shahzada Hatim Mushtaq"
              width={112}
              height={112}
              className="size-28 shrink-0 rounded-full object-cover ring-4 ring-primary/15 ring-offset-4 ring-offset-background"
            />
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl">Shahzada Hatim Mushtaq</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                A hands-on software engineering leader who loves learning new technologies. Fascinated with
                AI-assisted systems and exploring how they can transform the way we build and deliver software.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                <Button onClick={handleDownloadVCard} variant="primary" className="col-span-2 sm:col-span-1">
                  <Download />
                  Add to Contacts
                </Button>
                <Button asChild variant="outline" className="sm:hidden">
                  <a href="tel:+46763275401">
                    <Phone /> Call
                  </a>
                </Button>
                <Button asChild variant="outline" className="sm:hidden">
                  <a href="mailto:geoaxis@gmail.com">
                    <Mail /> Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact channels */}
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {contacts.map(({ icon: Icon, label, value, href, external }, i) => (
            <li key={label} className="animate-rise min-w-0" style={{ animationDelay: `${180 + i * 60}ms` }}>
              <a
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="glass group flex items-center gap-4 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/10 active:scale-[0.98] md:p-6"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-muted-foreground">{label}</span>
                  <span className="block truncate font-medium">{value}</span>
                </span>
                <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
