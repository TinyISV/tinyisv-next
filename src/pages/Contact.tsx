import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactText } from "@/components/ContactText";
import { Linkedin, Github, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export default function Contact() {
  // vCard format for contact QR code
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Shahzada Hatim Mushtaq
EMAIL:geoaxis@gmail.com
TEL:+46763275401
URL:https://www.linkedin.com/in/shahzadahatim
END:VCARD`;

  const handleDownloadVCard = () => {
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'shahzada-hatim-mushtaq.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Contact
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">
                Connect with me through the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Profile Card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <img 
                    src={profilePhoto} 
                    alt="Shahzada Hatim Mushtaq" 
                    className="w-32 h-32 rounded-full border-4 border-primary/20 flex-shrink-0"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-3">Shahzada Hatim Mushtaq</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      A hands-on software engineering leader who loves learning new technologies. 
                      Fascinated with AI-assisted systems and exploring how they can transform the way we build and deliver software.
                    </p>
                    <Button onClick={handleDownloadVCard} className="gap-2">
                      <Download className="h-4 w-4" />
                      Add to Contacts
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Details */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">Email</h3>
                    </div>
                    <ContactText text="geoaxis@gmail.com" />
                  </div>

                  {/* Phone */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                    </div>
                    <ContactText text="+46 76 327 5401" />
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-6">
                  {/* LinkedIn */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">LinkedIn</h3>
                    </div>
                    <a 
                      href="https://www.linkedin.com/in/shahzadahatim" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors break-all"
                    >
                      linkedin.com/in/shahzadahatim
                    </a>
                  </div>

                  {/* GitHub */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Github className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">GitHub</h3>
                    </div>
                    <a 
                      href="https://github.com/geoaxis" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      github.com/geoaxis
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
