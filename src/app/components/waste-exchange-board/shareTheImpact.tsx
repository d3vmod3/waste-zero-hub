"use client";
import { useState } from "react";
import Image from "next/image";

const impacts = [
  {
    name: "Maria Santos",
    description:
      "Transformed collected plastic bottles into eco-bricks, which were used to help build a community garden bench.",
    images: [
      "https://images.pexels.com/photos/3735215/pexels-photo-3735215.jpeg",
      "https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    ],
  },
  {
    name: "Pedro Cruz",
    description:
      "Cut and shaped bottles into vertical planters, now growing herbs and vegetables for the local feeding program.",
    images: [
      "https://images.pexels.com/photos/4503272/pexels-photo-4503272.jpeg",
      "https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg",
      "https://images.pexels.com/photos/4503270/pexels-photo-4503270.jpeg",
    ],
  },
  {
    name: "Ana Reyes",
    description:
      "Shredded bottles to create recycled plastic filament for 3D printing school supplies.",
    images: [
      "https://images.pexels.com/photos/3735216/pexels-photo-3735216.jpeg",
      "https://images.pexels.com/photos/3735214/pexels-photo-3735214.jpeg",
      "https://images.pexels.com/photos/3735213/pexels-photo-3735213.jpeg",
    ],
  },
];

export default function ShareTheImpact() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images: string[], index: number) => {
    setSelectedImages(images);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImages([]);
    setCurrentIndex(0);
  };

  const nextImage = () =>
    setCurrentIndex((prev) =>
      prev === selectedImages.length - 1 ? 0 : prev + 1
    );
  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Share the Impact</h2>
      <p className="text-gray-600 mb-6">
        See how others have reused or recycled these bottles and made a
        difference.
      </p>

      <div className="space-y-6">
        {impacts.map((impact, i) => (
          <div key={i} className="border rounded-lg p-4 shadow-sm bg-secondary">
            <p className="font-semibold">{impact.name}</p>
            <p className="text-gray-700 mt-2">{impact.description}s</p>

            {/* Image Thumbnails */}
            <div className="flex gap-2 mt-4">
              {impact.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-24 h-24 cursor-pointer"
                  onClick={() => openModal(impact.images, idx)}
                >
                  <Image
                    src={`${img}?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1`}
                    alt={`Impact image ${idx + 1}`}
                    fill
                    className="rounded object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImages.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✕
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-3xl"
          >
            ‹
          </button>
          <div className="relative w-[80%] h-[80%]">
            <Image
              src={`${selectedImages[currentIndex]}?auto=compress&cs=tinysrgb&w=800`}
              alt={`Modal image ${currentIndex + 1}`}
              fill
              className="object-contain rounded"
            />
          </div>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-3xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
