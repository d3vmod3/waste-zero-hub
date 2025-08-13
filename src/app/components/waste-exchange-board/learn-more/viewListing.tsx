"use client";

import { useState } from "react";
import Image from "next/image";
import ShareTheImpact from "@/components/waste-exchange-board/shareTheImpact";
import ChatWidget from "@/components/waste-exchange-board/learn-more/chatWidget"; // <-- import the chat widget component

const itemImages: string[] = [
  "https://images.pexels.com/photos/31101941/pexels-photo-31101941.jpeg",
  "https://images.pexels.com/photos/5719816/pexels-photo-5719816.jpeg",
  "https://images.pexels.com/photos/4568698/pexels-photo-4568698.jpeg",
  "https://images.pexels.com/photos/8054397/pexels-photo-8054397.jpeg",
  "https://images.pexels.com/photos/5719839/pexels-photo-5719839.jpeg",
  "https://images.pexels.com/photos/7767741/pexels-photo-7767741.jpeg",
];

const ViewListing = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Item Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Gallery */}
        <div>
          <div className="relative">
            <Image
              src={itemImages[currentIndex]}
              alt={`Item image ${currentIndex + 1}`}
              width={500}
              height={500}
              className="object-cover w-full h-[400px]"
            />
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === 0 ? itemImages.length - 1 : currentIndex - 1
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2"
            >
              ◀
            </button>
            <button
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % itemImages.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2"
            >
              ▶
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            {itemImages.map((img, i) => (
              <div
                key={i}
                className={`border cursor-pointer ${
                  currentIndex === i ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setCurrentIndex(i)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  width={80}
                  height={80}
                  className="object-cover h-32"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Recycled Plastic Bottles</h1>
            <button
              onClick={() => setIsChatOpen(true)}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              💬 Chat
            </button>
          </div>

          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Listed by:</span> Juan Dela Cruz
            </p>
            <p>
              <span className="font-semibold">Address:</span> 123 Barangay St.,
              Quezon City
            </p>
            <p>
              <span className="font-semibold">Email:</span> juan@example.com
            </p>
          </div>

          {/* Item description */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            <b>Description:</b>
            <br />I have a large collection of empty plastic bottles, mostly
            from soft drinks and bottled water, that have been piling up in my
            garage. Instead of letting them end up in the landfill, I’m hoping
            someone can repurpose them — whether it’s for making eco-bricks,
            turning them into planters, or any other creative recycling project.
            They’re clean, sorted by size, and ready to be reused.
          </p>
        </div>
      </div>

      <ShareTheImpact />

      {/* Chat Widget */}
      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default ViewListing;
