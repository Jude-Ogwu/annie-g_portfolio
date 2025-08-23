import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import LeadershipSection from "@/components/leadership-section";
import ProjectsSection from "@/components/projects-section";
import EventsSection from "@/components/events-section";
import AchievementsSection from "@/components/achievements-section";
import MediaSection from "@/components/media-section";
import GallerySection from "@/components/gallery-section";
import StrategicExcellenceSection from "@/components/strategic-excellence-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import SectionSeparator from "@/components/section-separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <SectionSeparator />
      <AboutSection />
      <SectionSeparator />
      <LeadershipSection />
      <SectionSeparator />
      <ProjectsSection />
      <SectionSeparator />
      <EventsSection />
      <SectionSeparator />
      <AchievementsSection />
      <SectionSeparator />
      <MediaSection />
      <SectionSeparator />
      <GallerySection />
      <SectionSeparator />
      <StrategicExcellenceSection />
      <SectionSeparator />
      <TestimonialsSection />
      <SectionSeparator />
      <ContactSection />
      <Footer />
    </div>
  );
}
