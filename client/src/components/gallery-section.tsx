import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Annie speaking at Global Wealth Forum",
    category: "Leadership"
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Fashion design workshop with AnnieG Couture",
    category: "Fashion"
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Networking at international conference",
    category: "Leadership"
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Educational workshop with youth participants",
    category: "Education"
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "AI and technology innovation session",
    category: "Innovation"
  },
  {
    src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Farm-to-School project in Dubai",
    category: "Projects"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Leadership", "Fashion", "Education", "Innovation", "Projects"];
  
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">Creative Excellence</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visual moments capturing leadership, innovation, and impact across continents and communities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-zim-gold text-charcoal shadow-lg'
                  : 'bg-card hover:bg-zim-gold/20 text-muted-foreground hover:text-zim-gold'
              }`}
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover-lift"
              onClick={() => openLightbox(index)}
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="inline-block px-3 py-2 bg-zim-gold text-charcoal rounded-md text-sm font-bold mb-3 shadow-lg">
                    {image.category}
                  </span>
                  <p className="text-sm font-semibold bg-black/50 backdrop-blur-sm px-3 py-2 rounded-md shadow-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-zim-gold transition-colors"
                data-testid="button-close-lightbox"
              >
                <X size={32} />
              </button>
              
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-zim-gold transition-colors"
                data-testid="button-prev-image"
              >
                <ChevronLeft size={40} />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-zim-gold transition-colors"
                data-testid="button-next-image"
              >
                <ChevronRight size={40} />
              </button>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <span className="inline-block px-3 py-1 bg-zim-gold/80 text-charcoal rounded text-sm font-medium mb-2">
                  {filteredImages[selectedImage].category}
                </span>
                <p className="text-sm">{filteredImages[selectedImage].alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}