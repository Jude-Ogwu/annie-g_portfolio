const events = [
  {
    title: "Global Wealth Forum",
    subtitle: "Host Country Announcement",
    description: "Moderated the prestigious announcement ceremony, facilitating discussions on Africa's economic potential.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    title: "Funders & Fundees Dubai",
    subtitle: "Dialogue & Fund Launch",
    description: "Facilitated crucial conversations between investors and entrepreneurs, launching new funding initiatives.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    title: "MSF Atelier",
    subtitle: "Brand Relaunch",
    description: "Led the strategic relaunch of MSF Atelier, elevating African fashion and design on the global stage.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  }
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">Events & Moderations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading conversations and moderating high-impact events that shape the future of education, technology, and African development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg overflow-hidden shadow-lg hover-lift group"
              data-testid={`card-event-${index}`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                data-testid={`img-event-${index}`}
              />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{event.subtitle}</p>
                <p className="text-muted-foreground text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
