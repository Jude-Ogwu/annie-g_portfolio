import { GraduationCap, Globe, Users, Palette } from "lucide-react";

const timelineItems = [
  {
    title: "Minister of Education",
    organization: "Marine Foundation",
    description: "Leading global education reform initiatives focused on equity, empowerment, and opportunity for all children.",
    icon: GraduationCap,
    color: "zim-green",
    side: "right"
  },
  {
    title: "Continent Lead (Africa)",
    organization: "Mpowa DAO",
    description: "Driving blockchain-powered sustainable energy and youth empowerment projects across Africa.",
    icon: Globe,
    color: "zim-gold",
    side: "left"
  },
  {
    title: "Co-Founder & Visionary",
    organization: "1Million&1",
    description: "A bold initiative co-created with her daughter, Uzuri, to empower youth through skills in tech, creative arts, agriculture, and leadership.",
    icon: Users,
    color: "zim-red",
    side: "right"
  },
  {
    title: "Founder",
    organization: "Borrowed Bestie",
    description: "Mental health and awareness platform creating safe spaces for women and youth.",
    icon: Palette,
    color: "zim-green",
    side: "left"
  },
  {
    title: "Founder & Designer",
    organization: "AnnieG Couture",
    description: "Award-winning fashion label promoting African design and creativity globally.",
    icon: Palette,
    color: "zim-gold",
    side: "right"
  },
  {
    title: "Founder & Director",
    organization: "Bulawayo Board of Designers",
    description: "Established to nurture and amplify Zimbabwean fashion talent.",
    icon: Users,
    color: "zim-red",
    side: "left"
  },
  {
    title: "Director of Strategic Education",
    organization: "FirstNational Supermarket",
    description: "Integrating innovative educational initiatives into corporate and retail systems.",
    icon: GraduationCap,
    color: "zim-green",
    side: "right"
  }
];

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">Leadership & Impact</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading transformative initiatives across education, technology, and social impact with strategic vision and cultural authenticity.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-zim-gold to-zim-green"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center justify-between">
                  {item.side === "right" ? (
                    <>
                      <div className="w-full sm:w-5/12 text-right pr-0 sm:pr-8">
                        <div className="bg-card rounded-lg p-6 shadow-lg hover-lift">
                          <h3 className={`text-xl font-bold text-${item.color} mb-2`}>{item.title}</h3>
                          <p className="text-muted-foreground font-medium">{item.organization}</p>
                          <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                        </div>
                      </div>
                      <div className="w-2/12 flex justify-center">
                        <div className={`w-4 h-4 bg-${item.color} rounded-full border-4 border-background shadow-lg`}></div>
                      </div>
                      <div className="w-full sm:w-5/12 pl-0 sm:pl-8">
                        <div className={`bg-gradient-to-br from-${item.color}/10 to-${item.color}/20 rounded-lg p-4 text-center`}>
                          <Icon className={`text-3xl text-${item.color} mx-auto`} size={48} />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-full sm:w-5/12 text-right pr-0 sm:pr-8">
                        <div className={`bg-gradient-to-br from-${item.color}/10 to-${item.color}/20 rounded-lg p-4 text-center`}>
                          <Icon className={`text-3xl text-${item.color} mx-auto`} size={48} />
                        </div>
                      </div>
                      <div className="w-2/12 flex justify-center">
                        <div className={`w-4 h-4 bg-${item.color} rounded-full border-4 border-background shadow-lg`}></div>
                      </div>
                      <div className="w-full sm:w-5/12 pl-0 sm:pl-8">
                        <div className="bg-card rounded-lg p-6 shadow-lg hover-lift">
                          <h3 className={`text-xl font-bold text-${item.color} mb-2`}>{item.title}</h3>
                          <p className="text-muted-foreground font-medium">{item.organization}</p>
                          <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
