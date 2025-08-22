import { Scissors, Users, Sprout, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "SewHerSpace",
    description: "Empowering women through fashion entrepreneurship, providing skills training and market access for sustainable livelihoods.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    icon: Scissors,
    tags: ["Fashion", "Empowerment", "Skills Training"]
  },
  {
    title: "1Million&1",
    description: "Co-founded with my daughter, this initiative focuses on youth education and empowerment through innovative learning approaches.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    icon: Users,
    tags: ["Education", "Youth", "Innovation"]
  },
  {
    title: "Farm-to-School Dubai",
    description: "Pioneering healthy eating initiatives in Dubai schools, connecting local agriculture with educational nutrition programs.",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    icon: Sprout,
    tags: ["Health", "Education", "Sustainability"]
  },
  {
    title: "AI Certifications & Advocacy",
    description: "Leading AI adoption and education advocacy, ensuring Africa's voice in global technology conversations and innovation.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    icon: Bot,
    tags: ["AI", "Innovation", "Advocacy"]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">Projects & Initiatives</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformative projects spanning fashion, education, technology, and social impact across continents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index} 
                className="bg-card rounded-lg overflow-hidden shadow-lg hover-lift group"
                data-testid={`card-project-${index}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-project-${index}`}
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Icon className="text-zim-gold mr-2" size={20} />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className={`${
                          tagIndex === 0 ? 'bg-zim-gold/20 text-zim-gold' :
                          tagIndex === 1 ? 'bg-zim-green/20 text-zim-green' :
                          'bg-zim-red/20 text-zim-red'
                        }`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
