import { Button } from "@/components/ui/button";
import { Eye, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center african-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/60 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 fade-in">
            <div className="inline-block px-4 py-2 bg-zim-gold/20 text-zim-gold rounded-full text-sm font-medium mb-6">
              Minister of Education • Changemaker • Visionary Leader
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
              <span className="gradient-text">Weaving Impact</span><br />
              Across Continents
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Zimbabwean changemaker, mother of 3, and global innovator bridging education, technology, and empowerment. 
              From fashion visionary to AI advocate, I'm dedicated to creating sustainable impact across Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="px-8 py-4 bg-zim-green hover:bg-zim-green/80 text-white hover-lift"
                data-testid="button-view-work"
              >
                <Eye className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-4 border-2 border-zim-gold text-zim-gold hover:bg-zim-gold hover:text-charcoal"
                data-testid="button-contact"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-zim-gold to-zim-green rounded-full blur-3xl opacity-30 glow"></div>
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
                alt="Annie Gonyora Professional Portrait"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-zim-gold/50 shadow-2xl"
                data-testid="img-hero-portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
