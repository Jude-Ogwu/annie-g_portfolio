import { Brain, Lightbulb, Users, GraduationCap } from "lucide-react";

const expertiseAreas = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Early adopter and advocate for AI integration in African education systems, leading certification programs and innovation initiatives.",
    highlights: [
      "AI Certification Leadership",
      "Educational Technology Integration",
      "Future-ready Learning Solutions"
    ],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pioneering creative solutions that bridge traditional African values with cutting-edge global practices for sustainable impact.",
    highlights: [
      "Cross-cultural Innovation",
      "Sustainable Development",
      "Creative Problem Solving"
    ],
    gradient: "from-zim-gold to-orange-500"
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Transformational leadership across multiple sectors, building bridges between communities, organizations, and continents.",
    highlights: [
      "Multi-sector Expertise",
      "Global-local Balance",
      "Inclusive Leadership"
    ],
    gradient: "from-zim-green to-emerald-500"
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Reimagining education through equity, empowerment, and innovation, creating pathways for holistic human development.",
    highlights: [
      "Educational Policy Reform",
      "Youth Empowerment",
      "Holistic Learning Approaches"
    ],
    gradient: "from-zim-red to-red-500"
  }
];

export default function StrategicExcellenceSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">Strategic Excellence</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Core competencies that drive transformational impact across industries, communities, and continents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div 
                key={index} 
                className="group bg-card rounded-xl p-8 shadow-lg hover-lift transition-all duration-300"
                data-testid={`card-expertise-${index}`}
              >
                {/* Icon Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${area.gradient} p-4 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{area.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {area.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Key Highlights</h4>
                  {area.highlights.map((highlight, highlightIndex) => (
                    <div 
                      key={highlightIndex} 
                      className="flex items-center text-sm"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${area.gradient} mr-3`}></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-zim-green via-zim-gold to-zim-red rounded-full">
            <p className="text-white font-medium">
              "Excellence is not a destination, but a continuous journey of impact and innovation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}