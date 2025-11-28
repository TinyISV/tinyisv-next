import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Target, TrendingUp, Shield, Sparkles } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-muted/50 via-background to-background">
          <div className="container px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                AI Consultancy for
                <span className="text-primary"> Modern Businesses</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
                Transform your business with cutting-edge artificial intelligence solutions. 
                We help companies leverage AI to drive innovation, efficiency, and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                About TinyISV
              </h2>
              <p className="text-lg text-muted-foreground">
                We're a team of AI experts dedicated to helping businesses of all sizes 
                harness the power of artificial intelligence. With years of experience in 
                machine learning, data science, and business transformation, we deliver 
                practical AI solutions that drive real results.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>AI Strategy</CardTitle>
                  <CardDescription>
                    Develop comprehensive AI strategies aligned with your business goals
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>ML Implementation</CardTitle>
                  <CardDescription>
                    Build and deploy custom machine learning models for your specific use cases
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Process Automation</CardTitle>
                  <CardDescription>
                    Automate repetitive tasks and streamline workflows with intelligent automation
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Data Analytics</CardTitle>
                  <CardDescription>
                    Extract actionable insights from your data with advanced analytics
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>AI Governance</CardTitle>
                  <CardDescription>
                    Ensure responsible AI implementation with robust governance frameworks
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>AI Training</CardTitle>
                  <CardDescription>
                    Empower your team with comprehensive AI training and workshops
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Features/Advantages Section */}
        <section id="features" className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Why Choose TinyISV
                </h2>
                <p className="text-lg text-muted-foreground">
                  Advantages that set us apart
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                      <p className="text-muted-foreground">
                        Our team consists of seasoned AI experts with proven track records in delivering successful projects
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
                      <p className="text-muted-foreground">
                        We don't believe in one-size-fits-all. Every solution is customized to your unique business needs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Rapid Deployment</h3>
                      <p className="text-muted-foreground">
                        Get from concept to production quickly with our agile development methodology
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                      <p className="text-muted-foreground">
                        We're with you every step of the way, providing continuous support and optimization
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can help you leverage AI to achieve your business goals
              </p>
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
