import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    number: 1500,
    label: "Youth Mentored+",
    description: "Through 1Million&1 and educational programs",
    suffix: "+"
  },
  {
    number: 800,
    label: "Women Empowered+", 
    description: "Via SewHerSpace and entrepreneurship initiatives",
    suffix: "+"
  },
  {
    number: 25,
    label: "Major Events & Counting",
    description: "High-impact conferences and dialogue forums",
    suffix: "+"
  },
  {
    number: 7,
    label: "Organizations Founded",
    description: "Creating lasting impact across sectors",
    suffix: ""
  }
];

export default function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(achievements.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    achievements.forEach((achievement, index) => {
      let start = 0;
      const end = achievement.number;
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = end;
            return newCounts;
          });
          clearInterval(timer);
        } else {
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(start);
            return newCounts;
          });
        }
      }, duration / steps);
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-zim-green to-zim-gold text-white african-pattern"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Impact in Numbers</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Measurable impact across communities, continuously growing and evolving with each initiative.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-lg rounded-lg p-8 hover-lift transform hover:scale-105 transition-all duration-300"
              data-testid={`card-achievement-${index}`}
            >
              <div 
                className="text-4xl lg:text-5xl font-bold mb-2 text-white"
                data-testid={`text-count-${index}`}
              >
                {counts[index]?.toLocaleString() || 0}{achievement.suffix}
              </div>
              <div className="text-lg font-medium opacity-90 mb-2">{achievement.label}</div>
              <p className="text-sm opacity-75">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
