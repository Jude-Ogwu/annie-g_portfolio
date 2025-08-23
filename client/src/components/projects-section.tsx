import { useState } from "react";
import { Scissors, Users, Sprout, Bot, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SewHerSpace",
    shortDesc: "A social impact accelerator empowering women through fashion...",
    fullDescription: "A social impact accelerator and marketplace empowering women through fashion, enterprise, and leadership.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    icon: Scissors,
    tags: ["Fashion", "Empowerment", "Enterprise"],
    link: "https://sewherspace.com"
  },
  {
    title: "1Million&1",
    shortDesc: "Youth-focused program with mentorship and skills development...",
    fullDescription: "A youth-focused program providing mentorship and skills development in technology, arts, agriculture, and leadership. Co-founded with her daughter, Uzuri, it represents intergenerational collaboration and empowerment.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    icon: Users,
    tags: ["Education", "Youth", "Leadership"],
    link: "https://1gen.io"
  },
  {
    title: "Farm-to-School (Dubai)",
    shortDesc: "Healthy eating initiatives in Dubai schools...",
    fullDescription: "Annie collaborated with Nature's Cart to promote healthy eating in schools across Dubai, introducing children to nutritious food choices while supporting local agribusiness.",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    icon: Sprout,
    tags: ["Health", "Education", "Sustainability"],
    link: "#"
  },
  {
    title: "Borrowed Bestie",
    shortDesc: "Mental health awareness project for women and youth...",
    fullDescription: "A mental health awareness project designed to help women and youth prioritize wellness and personal growth.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    icon: Bot,
    tags: ["Mental Health", "Wellness", "Youth"],
    link: "https://borrowedbestie.one"
  },
  {
    title: "AnnieG Couture",
    shortDesc: "Fashion brand blending African heritage with modern design...",
    fullDescription: "Fashion brand blending African heritage with modern design, earning Annie recognition as a leading creative in fashion innovation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    icon: Scissors,
    tags: ["Fashion", "African Heritage", "Innovation"],
    link: "#"
  }
];

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleExpansion = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

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
            const isExpanded = expandedProject === index;
            return (
              <div 
                key={index} 
                className="bg-card rounded-lg overflow-hidden shadow-lg hover-lift group transition-all duration-300"
                data-testid={`card-project-${index}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-project-${index}`}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <Icon className="text-zim-gold mr-2" size={20} />
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    {project.link !== "#" && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zim-gold hover:text-zim-green transition-colors"
                        data-testid={`link-project-${index}`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 transition-all duration-300">
                    {isExpanded ? project.fullDescription : project.shortDesc}
                  </p>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpansion(index)}
                    className="text-zim-gold hover:text-zim-green mb-4 p-0 h-auto font-medium"
                    data-testid={`button-expand-${index}`}
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                  </Button>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
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
                  
                  {project.link !== "#" && (
                    <Button
                      className="w-full bg-gradient-to-r from-zim-green to-zim-gold text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.open(project.link, '_blank')}
                      data-testid={`button-visit-${index}`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Project
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
