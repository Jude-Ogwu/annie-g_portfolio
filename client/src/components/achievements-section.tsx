import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    number: 500,
    label: "Youth Mentored+",
    description: "Through 1Million&1 and educational programs"
  },
  {
    number: 250,
    label: "Women Empowered+",
    description: "Via SewHerSpace and entrepreneurship initiatives"
  },
  {
    number: 15,
    label: "Major Events Moderated",
    description: "High-impact conferences and dialogue forums"
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
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    achievements.forEach((achievement, index) => {
      let start = 0;
      const end = achievement.number;
      const duration = 2000;
      const increment = end / (duration / 50);

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
      }, 50);
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
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-lg rounded-lg p-8 hover-lift"
              data-testid={`card-achievement-${index}`}
            >
              <div 
                className="text-5xl font-bold mb-2"
                data-testid={`text-count-${index}`}
              >
                {counts[index]}
              </div>
              <div className="text-xl font-medium opacity-90">{achievement.label}</div>
              <p className="text-sm opacity-75 mt-2">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
