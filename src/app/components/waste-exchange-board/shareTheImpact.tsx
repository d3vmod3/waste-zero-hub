"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const impacts = [
  {
    name: "Maria Santos",
    description:
      "Transformed collected plastic bottles into eco-bricks, which were used to help build a community garden bench.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ecobricks-are-bottles-packed-with-non-biological-waste.jpg/640px-Ecobricks-are-bottles-packed-with-non-biological-waste.jpg",
      "https://ecobricks.org/wp-content/uploads/2020/05/circle-planter.png",
      "https://journal.com.ph/wp-content/uploads/2022/03/DSWD-Brick-Wall-1200x800.jpg",
    ],
  },
  {
    name: "Sheena Cruz",
    description:
      "Cut and shaped bottles into vertical planters, now growing herbs and vegetables for the local feeding program.",
    images: [
      "https://images.pexels.com/photos/8193441/pexels-photo-8193441.jpeg",
      "https://i.ytimg.com/vi/DgHvEUfCAEU/maxresdefault.jpg",
      "https://media.greenmatters.com/brand-img/Et06VxwPi/2160x1130/how-to-make-a-plastic-bottle-garden-1674241803665.jpg",
    ],
  },
  {
    name: "Ana Reyes",
    description:
      "Shredded bottles to create recycled plastic filament for 3D printing school supplies.",
    images: [
      "https://static1.xdaimages.com/wordpress/wp-content/uploads/2025/01/3d-printing-filament-photo.jpg?q=70&fit=crop&w=1100&h=618&dpr=1",
      "https://center3dprint.com/image/cache/catalog/magazin/spectrum/r-pla/recycled-r-pla-1-75mm-2kg-basalt-grey_1-1100x1100w.jpg",
      "https://img.favpng.com/21/21/9/pet-bottle-recycling-plastic-3d-printing-filament-png-favpng-9uUyBTJ53LN0v01GJkRMmrn0u.jpg",
    ],
  },
];

export default function ShareTheImpact() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [uploadFiles, setUploadFiles] = useState<File[]>([]);
  const [description, setDescription] = useState("");

  const dialogRef = useRef<HTMLDialogElement>(null);
  const addImpactRef = useRef<HTMLDialogElement>(null);

  const openModal = (images: string[], index: number) => {
    setSelectedImages(images);
    setCurrentIndex(index);
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (uploadFiles.length < 3) {
      alert("Please upload at least 3 images.");
      return;
    }
    console.log("Description:", description);
    console.log("Files:", uploadFiles);
    addImpactRef.current?.close();
    setUploadFiles([]);
    setDescription("");
  };

  return (
    <div className="mt-12">
      {/* Trigger Button */}
      <button
        className="btn btn-primary mb-6 text-white"
        onClick={() => addImpactRef.current?.showModal()}
      >
        Share the Impact
      </button>

      <div className="space-y-6">
        {impacts.map((impact, i) => (
          <div key={i} className="border p-4 shadow-sm bg-secondary">
            <p className="font-semibold">{impact.name}</p>
            <p className="text-gray-700 mt-2">{impact.description}</p>

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

      {/* View Image Modal */}
      <dialog id="impact_modal" className="modal" ref={dialogRef}>
        <form
          method="dialog"
          className="modal-box max-w-5xl max-h-[90vh] p-4 bg-white rounded-lg shadow-lg relative"
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle"
              aria-label="Close modal"
              type="button"
            >
              ✕
            </button>
          </div>

          {/* Image Container */}
          <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
            {selectedImages.length > 0 && (
              <Image
                src={`${selectedImages[currentIndex]}?auto=compress&cs=tinysrgb&w=1200`}
                alt={`Modal image ${currentIndex + 1}`}
                fill
                className="object-contain p-4"
              />
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-4 px-2 text-gray-700">
            <button
              type="button"
              className="btn btn-ghost btn-circle"
              onClick={prevImage}
              aria-label="Previous image"
            >
              ‹
            </button>
            <span>
              {currentIndex + 1} / {selectedImages.length}
            </span>
            <button
              type="button"
              className="btn btn-ghost btn-circle"
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </form>
      </dialog>

      {/* Add Impact Modal */}
      <dialog id="add_impact_modal" className="modal" ref={addImpactRef}>
        <form
          onSubmit={handleSubmit}
          className="modal-box max-w-lg p-6 bg-white rounded-lg shadow-lg"
        >
          <div className="flex justify-end">
            <button
              type="button"
              className="btn btn-sm btn-circle"
              onClick={() => addImpactRef.current?.close()}
            >
              ✕
            </button>
          </div>

          <h3 className="font-bold text-lg mb-4">Share Your Impact</h3>

          {/* File Upload */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Upload Images (at least 3)</span>
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="file-input file-input-bordered w-full"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Describe your project..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="modal-action">
            <button type="submit" className="btn btn-primary text-white">
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
