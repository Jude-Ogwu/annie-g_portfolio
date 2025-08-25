import { ExternalLink, Calendar, Award } from "lucide-react";

const mediaItems = [
  {
    title: "Marine Foundation Minister of Education Announcement",
    publication: "Marine Foundation Press",
    date: "January 2024",
    type: "Press Release",
    description: "Official announcement of Annie's appointment as Minister of Education, highlighting her vision for transformational leadership.",
    image: "/annie_gonyora3.png",
    icon: Award
  },
  {
    title: "Leading AI Innovation in African Education",
    publication: "Tech Africa Today",
    date: "November 2023",
    type: "Feature Article",
    description: "In-depth interview discussing Annie's role in advancing artificial intelligence adoption across African educational institutions.",
    image: "/annie_gonyora6i.png",
    icon: ExternalLink
  },
  {
    title: "From Fashion to Global Leadership",
    publication: "African Women Leaders",
    date: "September 2016",
    type: "Profile Interview",
    description: "Exploring Annie's journey from fashion entrepreneur to global education leader and her impact on women's empowerment.",
    image: "/fashion_to_global.png",
    icon: Calendar
  }
];

export default function MediaSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">Media & Recognition</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Featured stories, interviews, and press coverage highlighting transformational leadership and global impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article 
                key={index} 
                className="bg-card rounded-lg overflow-hidden shadow-lg hover-lift group"
                data-testid={`card-media-${index}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-50 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-media-${index}`}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      item.type === 'Press Release' ? 'bg-zim-green/20 text-zim-green' :
                      item.type === 'Feature Article' ? 'bg-zim-gold/20 text-zim-gold' :
                      'bg-zim-red/20 text-zim-red'
                    }`}>
                      {item.type}
                    </span>
                    <Icon className="text-muted-foreground" size={16} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.publication} • {item.date}</p>
                  <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}