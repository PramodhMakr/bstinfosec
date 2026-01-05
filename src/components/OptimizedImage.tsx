import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  removeBorder?: boolean;
}

export default function OptimizedImage({ src, alt, className, style, removeBorder = false }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  // Generate a higher quality image path
  const optimizedSrc = src.replace('/src/assets/', '/assets/');

  if (error) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className || ''}`} style={style}>
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className || ''} ${removeBorder ? 'image-no-border' : 'optimized-image'}`} style={style}>
      <img
        src={optimizedSrc}
        alt={alt}
        className={`transition-all duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} w-full h-full object-cover`}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}
