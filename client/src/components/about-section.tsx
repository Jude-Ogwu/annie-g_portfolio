export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">My Story</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From the heart of Zimbabwe to global stages, my journey weaves together motherhood, innovation, 
            and an unwavering commitment to empowering communities through education and entrepreneurship.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                As a mother of three beautiful children, I understand the profound responsibility we have to create 
                a better world for the next generation. This personal mission drives my professional endeavors across 
                education, technology, and social impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey began in fashion design with AnnieG Couture and SewHerSpace, empowering women through 
                creative entrepreneurship. This evolved into the Farm-to-School Project in Dubai, promoting healthy 
                eating in educational institutions, and later to founding 1Million&1 with my daughter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, as Minister of Education at the Marine Foundation and Continent Lead for Mpowa DAO, I'm at 
                the forefront of educational innovation and AI advocacy, ensuring Africa's voice is heard in the 
                global conversation about the future of learning.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Education Workshop"
              className="rounded-lg shadow-lg hover-lift"
              data-testid="img-education-workshop"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Professional Networking"
              className="rounded-lg shadow-lg hover-lift"
              data-testid="img-professional-networking"
            />
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Fashion Design Studio"
              className="rounded-lg shadow-lg hover-lift"
              data-testid="img-fashion-studio"
            />
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
              alt="Innovation Workshop"
              className="rounded-lg shadow-lg hover-lift"
              data-testid="img-innovation-workshop"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
