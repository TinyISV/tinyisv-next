import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QRCodeSVG } from "qrcode.react";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import contactName from "@/assets/contact-name.png";
import contactEmail from "@/assets/contact-email.png";
import contactPhone from "@/assets/contact-phone.png";

export default function Contact() {
  // vCard format for contact QR code
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Shahzada Hatim Mushtaq
EMAIL:geoaxis@gmail.com
TEL:+46763275401
URL:https://www.linkedin.com/in/shahzadahatim
END:VCARD`;

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
              {/* Name Card */}
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm mb-8 text-center">
                <img src={contactName} alt="Shahzada Hatim Mushtaq" className="mx-auto max-w-full h-auto" />
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
                    <img src={contactEmail} alt="Email" className="w-full h-auto" />
                  </div>

                  {/* Phone */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                    </div>
                    <img src={contactPhone} alt="Phone" className="w-full h-auto" />
                  </div>

                  {/* LinkedIn */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">LinkedIn</h3>
                    </div>
                    <a 
                      href="https://www.linkedin.com/in/shahzadahatim" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline break-all"
                    >
                      linkedin.com/in/shahzadahatim
                    </a>
                  </div>

                  {/* GitHub */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Github className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">GitHub</h3>
                    </div>
                    <a 
                      href="https://github.com/geoaxis" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      github.com/geoaxis
                    </a>
                  </div>
                </div>

                {/* QR Codes */}
                <div className="space-y-6">
                  {/* vCard QR Code */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <h3 className="font-semibold text-lg mb-4 text-center">Save Contact</h3>
                    <div className="flex justify-center">
                      <QRCodeSVG 
                        value={vCardData} 
                        size={200}
                        level="H"
                        className="border-4 border-background p-2 rounded-lg"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      Scan to add to contacts
                    </p>
                  </div>

                  {/* LinkedIn QR Code */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <h3 className="font-semibold text-lg mb-4 text-center">LinkedIn Profile</h3>
                    <div className="flex justify-center">
                      <QRCodeSVG 
                        value="https://www.linkedin.com/in/shahzadahatim" 
                        size={200}
                        level="H"
                        className="border-4 border-background p-2 rounded-lg"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      Scan to connect on LinkedIn
                    </p>
                  </div>

                  {/* GitHub QR Code */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                    <h3 className="font-semibold text-lg mb-4 text-center">GitHub Profile</h3>
                    <div className="flex justify-center">
                      <QRCodeSVG 
                        value="https://github.com/geoaxis" 
                        size={200}
                        level="H"
                        className="border-4 border-background p-2 rounded-lg"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      Scan to follow on GitHub
                    </p>
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
