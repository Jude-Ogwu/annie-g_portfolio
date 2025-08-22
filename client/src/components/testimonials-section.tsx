import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    content: "Annie's vision for African education and her commitment to innovation make her an exceptional leader. Her work with the Marine Foundation is transforming how we approach learning across the continent.",
    author: "Farouk Khailann",
    role: "Education Leader",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    content: "Working with Annie on the Global Wealth Forum was inspiring. Her ability to moderate complex discussions while maintaining cultural sensitivity and professional excellence is remarkable.",
    author: "Ambassador P Dunston",
    role: "Diplomatic Leader",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    content: "Annie's entrepreneurial spirit and dedication to empowering women through SewHerSpace has created lasting change in our community. She's a true changemaker.",
    author: "Dr. Sarah Mbeki",
    role: "Community Development",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">What Leaders Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Endorsements from partners, collaborators, and leaders who've witnessed the transformative impact of our work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 shadow-lg hover-lift"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <Quote className="text-zim-gold text-2xl mr-3" size={24} />
                <div className="flex text-zim-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                  data-testid={`img-testimonial-${index}`}
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
