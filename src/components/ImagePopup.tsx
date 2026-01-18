import { useState } from 'react';
import { X, Eye } from 'lucide-react';

interface ImagePopupProps {
  images: string[];
  title: string;
  description: string;
}

export default function ImagePopup({ images, title, description }: ImagePopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openPopup = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openPopup(index)}
            className="relative group cursor-pointer overflow-hidden rounded-xl border border-blue-600/20 hover:border-blue-600/40 transition-all"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-blue-200">
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Eye className="h-8 w-8 text-white" />
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <button
                onClick={closePopup}
                className="text-slate-500 hover:text-slate-700 p-2 rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-100 to-blue-200 mb-4">
                <img
                  src={images[currentImageIndex]}
                  alt={`${title} ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                {description}
              </p>
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={prevImage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Previous
                </button>
                <span className="text-sm text-slate-500">
                  {currentImageIndex + 1} / {images.length}
                </span>
                <button
                  onClick={nextImage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
