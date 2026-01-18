import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  removeBorder?: boolean;
}

export default function OptimizedImage({ src, alt, className, style }: OptimizedImageProps) {
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
      <div className={`bg-transparent flex items-center justify-center ${className || ''}`} style={style}>
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className || ''} image-no-border`} style={style}>
      <img
        src={optimizedSrc}
        alt={alt}
        className={`transition-all duration-400 ${isLoaded ? 'opacity-100' : 'opacity-0'} w-full h-full object-cover rounded-xl`}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          border: 'none',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 25%, #93c5fd 50%, #60a5fa 75%, #3b82f6 100%)',
          boxShadow: '0 12px 40px rgba(37, 99, 235, 0.15), 0 4px 20px rgba(59, 130, 246, 0.1)',
          padding: '8px',
        }}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 animate-pulse rounded-xl" />
      )}
    </div>
  );
}
