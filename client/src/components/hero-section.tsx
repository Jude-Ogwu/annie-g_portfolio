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
    <section id="hero" className="relative min-h-screen flex items-center african-pattern pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/60 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Mobile-first layout */}
        <div className="text-center lg:text-left">
          {/* Profile Image - Mobile centered, Desktop right */}
          <div className="flex justify-center lg:float-right lg:ml-12 mb-8 lg:mb-0 lg:mr-16 slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-zim-gold to-zim-green rounded-full blur-3xl opacity-30 glow"></div>
              <img
                src="/annie_gonyora.png"
                alt="Annie Gonyora Professional Portrait"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-zim-gold/50 shadow-2xl"
                data-testid="img-hero-portrait"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="fade-in">
            <div className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-zim-gold/20 text-zim-gold rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Minister of Education • Changemaker • Visionary Leader
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
              <span className="gradient-text">Weaving Impact</span><br />
              Across Continents
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Zimbabwean changemaker, mother of 3, and global innovator bridging education, technology, and empowerment. 
              From fashion visionary to AI advocate, I'm dedicated to creating sustainable impact across Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("#projects")}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-zim-green hover:bg-zim-green/80 text-white hover-lift text-sm sm:text-base"
                data-testid="button-view-work"
              >
                <Eye className="w-4 h-4 mr-2" />
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-zim-gold text-zim-gold hover:bg-zim-gold hover:text-charcoal text-sm sm:text-base"
                data-testid="button-contact"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
