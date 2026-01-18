interface GalleryProps {
    images: string[]
  }
  
  export default function Gallery({ images }: GalleryProps) {
    return (
      <section id="gallery" className="py-16 bg-[var(--beige)]">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 text-center text-3xl font-serif ">
            Notre galerie
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  