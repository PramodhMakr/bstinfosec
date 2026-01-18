import { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageSlider({ images, autoPlay = false, interval = 3000 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, images.length]);

  return (
    <div className="slider-container relative w-full h-80 md:h-96 overflow-hidden">
      <div className="slider-track flex transition-transform duration-500 ease-in-out h-full" 
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slider-slide w-full h-full flex-shrink-0">
            <img
              src={image}
              alt={`Security slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Enhanced Dots Indicator - No arrows */}
      <div className="slider-dots absolute bottom-8 left-1/2 -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`slider-dot ${index === currentIndex ? 'active' : ''} transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: index === currentIndex ? '24px' : '8px',
              height: '8px',
              borderRadius: index === currentIndex ? '4px' : '50%',
              background: index === currentIndex 
                ? 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)' 
                : '#cbd5e1',
              transform: index === currentIndex ? 'scale(1.1)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
