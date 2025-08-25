"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Category = "Leadership" | "Fashion" | "Education" | "Innovation" | "Projects";
type Img = { src: string; alt: string; category: Category };

const galleryImages: Img[] = [
  { src: "/event2.png", alt: "Annie speaking at Global Wealth Forum", category: "Leadership" },
  { src: "/Black and Beige Meet Me Instagram.png", alt: "Fashion design workshop with AnnieG Couture", category: "Fashion" },
  { src: "/networking.png", alt: "Networking at international conference", category: "Leadership" },
  { src: "/youth_p.png", alt: "Educational workshop with youth participants", category: "Education" },
  { src: "/ai_innovation.png", alt: "AI and technology innovation session", category: "Innovation" },
  { src: "/event5.png", alt: "Farm-to-School project in Dubai", category: "Projects" },
];

const categories = ["All", "Leadership", "Fashion", "Education", "Innovation", "Projects"] as const;

function Row({
  images,
  direction,                // "left" | "right"
  onOpen,
}: {
  images: Img[];
  direction: "left" | "right";
  onOpen: (index: number) => void;
}) {
  // small nudge when clicking arrows (we pause animation briefly)
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  const duration = Math.max(15, images.length * 4); // slower with fewer items, scales with more

  const nudge = (dir: "left" | "right") => {
  setPaused(true);

  // card width + gap (px)
  const step = 320; 
  const trackWidth = images.length * step;

  setOffset((o) => {
    const next = o + (dir === "left" ? -step : step);

    // Wrap the offset so it never goes out of range
    if (next <= -trackWidth) return 0;          // loop back to start
    if (next >= trackWidth) return 0;           // loop back if too far right
    return next;
  });

  setTimeout(() => setPaused(false), 600);
};


  const card = (image: Img, idx: number) => (
    <figure
      key={`${image.src}-${idx}`}
      className="relative flex-shrink-0 w-64 sm:w-72 md:w-80 h-48 sm:h-56 cursor-pointer rounded-lg overflow-hidden shadow-lg group/img"
      onClick={() => onOpen(idx)}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
      />
      {/* Hover overlay with header + paragraph (category + alt) */}
      <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 text-white">
          <span className="inline-block px-3 py-2 bg-zim-gold text-charcoal rounded-md text-sm font-bold mb-3 shadow-lg">
            {image.category}
          </span>
          <p className="text-sm font-semibold bg-black/50 backdrop-blur-sm px-3 py-2 rounded-md shadow-lg">
            {image.alt}
          </p>
        </div>
      </figcaption>
    </figure>
  );

  return (
    <div className="relative group">
      {/* Left arrow */}
      <button
        onClick={() => nudge("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-zim-gold hover:text-charcoal transition"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Viewport */}
      <div className="overflow-hidden px-10">
        {/* Offset wrapper (for manual arrows) */}
        <div
          className="will-change-transform"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {/* Animated strip */}
          <div
            className={[
              "marquee",                            // base (for pause on hover)
              direction === "left" ? "marquee-left" : "marquee-right",
              paused ? "marquee-paused" : "",
              "flex gap-6"
            ].join(" ")}
            style={
              {
                // @ts-ignore – custom property for duration
                "--marquee-duration": `${duration}s`,
              }
            }
          >
            {/* We duplicate once to create a seamless loop */}
            {images.map(card)}
            {images.map(card)}
          </div>
        </div>
      </div>

      {/* Right arrow */}
      <button
        onClick={() => nudge("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-zim-gold hover:text-charcoal transition"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default function GallerySection() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = useMemo(
    () => (filter === "All" ? galleryImages : galleryImages.filter((i) => i.category === filter)),
    [filter]
  );

  // If very few images, repeat to avoid empty space
  const imagesForRow = filteredImages.length >= 3 ? filteredImages : [...filteredImages, ...filteredImages, ...filteredImages];

  const openLightbox = (trackIndex: number) => {
    if (filteredImages.length === 0) return;
    // Map from duplicated track index back to real index
    setSelectedImage(trackIndex % filteredImages.length);
  };

  const closeLightbox = () => setSelectedImage(null);
  const navigateImage = (dir: "prev" | "next") => {
    if (selectedImage === null) return;
    const len = filteredImages.length;
    setSelectedImage(dir === "prev" ? (selectedImage - 1 + len) % len : (selectedImage + 1) % len);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 gradient-text">Creative Excellence</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visual moments capturing leadership, innovation, and impact across continents and communities.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === c ? "bg-zim-gold text-charcoal shadow-lg" : "bg-card hover:bg-zim-gold/20 text-muted-foreground hover:text-zim-gold"
              }`}
              data-testid={`filter-${c.toLowerCase()}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* TOP row (auto → left) */}
        <Row images={imagesForRow} direction="left" onOpen={openLightbox} />

        {/* BOTTOM row (auto → right) */}
        <div className="mt-10">
          <Row images={imagesForRow} direction="right" onOpen={openLightbox} />
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-zim-gold transition-colors"
              data-testid="button-close-lightbox"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-zim-gold transition-colors"
              data-testid="button-prev-image"
              aria-label="Previous"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-zim-gold transition-colors"
              data-testid="button-next-image"
              aria-label="Next"
            >
              <ChevronRight size={40} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center flex flex-col items-center gap-2">
              <span className="inline-block px-3 py-2 bg-zim-gold text-charcoal rounded-md text-sm font-bold mb-1 shadow-lg">
                {filteredImages[selectedImage].category}
              </span>
              <p className="text-sm font-semibold bg-black/50 backdrop-blur-sm px-3 py-2 rounded-md shadow-lg inline-block">
                {filteredImages[selectedImage].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
