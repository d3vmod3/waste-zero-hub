"use client";

import { useState } from "react";
import Image from "next/image";

interface Collector {
  id: number;
  name: string;
  image: string;
  address: string;
  email: string;
  locationUrl: string;
  phone: string;
}

const collectorsData: Collector[] = [
  {
    id: 1,
    name: "Eco Junk Shop",
    image: "https://images.pexels.com/photos/6276787/pexels-photo-6276787.jpeg",
    address: "123 Main Street, Quezon City",
    email: "contact@ecojunk.com",
    phone: "+63 912 345 6789",
    locationUrl: "https://maps.google.com/?q=123+Main+Street,+Quezon+City",
  },
  {
    id: 2,
    name: "Green Cycle Junkyard",
    image: "https://images.pexels.com/photos/8473939/pexels-photo-8473939.jpeg",
    address: "456 Market Avenue, Manila",
    email: "greencycle@example.com",
    phone: "+63 917 234 5678",
    locationUrl: "https://maps.google.com/?q=456+Market+Avenue,+Manila",
  },
  {
    id: 3,
    name: "Recyclers Hub",
    image: "https://images.pexels.com/photos/8473934/pexels-photo-8473934.jpeg",
    address: "789 Recycle Road, Makati",
    email: "hub@recyclers.com",
    phone: "+63 915 876 5432",
    locationUrl: "https://maps.google.com/?q=789+Recycle+Road,+Makati",
  },
  {
    id: 4,
    name: "Metro Waste Solutions",
    image: "https://images.pexels.com/photos/3735217/pexels-photo-3735217.jpeg",
    address: "22 Clover Street, Caloocan",
    email: "info@metrowaste.com",
    phone: "+63 920 111 2233",
    locationUrl: "https://maps.google.com/?q=22+Clover+Street,+Caloocan",
  },
  {
    id: 5,
    name: "Urban Eco Trade",
    image: "https://images.pexels.com/photos/1549000/pexels-photo-1549000.jpeg",
    address: "88 Sunrise Avenue, Taguig",
    email: "urbaneco@trade.com",
    phone: "+63 927 444 5566",
    locationUrl: "https://maps.google.com/?q=88+Sunrise+Avenue,+Taguig",
  },
  {
    id: 6,
    name: "Manila Scrap Center",
    image: "https://images.pexels.com/photos/8961077/pexels-photo-8961077.jpeg",
    address: "12 Dela Cruz Street, Manila",
    email: "manilascrap@center.com",
    phone: "+63 913 678 9012",
    locationUrl: "https://maps.google.com/?q=12+Dela+Cruz+Street,+Manila",
  },
  {
    id: 7,
    name: "Eco Reclaim Hub",
    image: "https://images.pexels.com/photos/3735213/pexels-photo-3735213.jpeg",
    address: "56 Rizal Avenue, Pasay",
    email: "reclaim@eco.com",
    phone: "+63 926 112 2334",
    locationUrl: "https://maps.google.com/?q=56+Rizal+Avenue,+Pasay",
  },
  {
    id: 8,
    name: "Green Recovery Point",
    image: "https://images.pexels.com/photos/3735211/pexels-photo-3735211.jpeg",
    address: "101 Park Boulevard, Mandaluyong",
    email: "green@recovery.com",
    phone: "+63 928 223 3445",
    locationUrl: "https://maps.google.com/?q=101+Park+Boulevard,+Mandaluyong",
  },
  {
    id: 9,
    name: "Zero Waste Depot",
    image: "https://images.pexels.com/photos/3735215/pexels-photo-3735215.jpeg",
    address: "45 Greenfield Lane, Quezon City",
    email: "contact@zerowaste.com",
    phone: "+63 917 555 6677",
    locationUrl: "https://maps.google.com/?q=45+Greenfield+Lane,+Quezon+City",
  },
  {
    id: 10,
    name: "Circular Economy Traders",
    image: "https://images.pexels.com/photos/3735219/pexels-photo-3735219.jpeg",
    address: "18 San Pedro Street, Las Piñas",
    email: "circular@economy.com",
    phone: "+63 916 777 8899",
    locationUrl: "https://maps.google.com/?q=18+San+Pedro+Street,+Las+Piñas",
  },
  {
    id: 11,
    name: "Eco Warrior Collectors",
    image: "https://images.pexels.com/photos/3735221/pexels-photo-3735221.jpeg",
    address: "30 Mabini Road, Marikina",
    email: "warriors@eco.com",
    phone: "+63 912 888 9900",
    locationUrl: "https://maps.google.com/?q=30+Mabini+Road,+Marikina",
  },
  {
    id: 12,
    name: "Planet Saver Scrap",
    image: "https://images.pexels.com/photos/3735225/pexels-photo-3735225.jpeg",
    address: "44 Greenway Drive, Valenzuela",
    email: "planetsaver@scrap.com",
    phone: "+63 919 999 1122",
    locationUrl: "https://maps.google.com/?q=44+Greenway+Drive,+Valenzuela",
  },
  {
    id: 13,
    name: "EcoLink Resources",
    image: "https://images.pexels.com/photos/3735227/pexels-photo-3735227.jpeg",
    address: "60 Maginhawa Street, Quezon City",
    email: "info@ecolink.com",
    phone: "+63 915 123 4567",
    locationUrl: "https://maps.google.com/?q=60+Maginhawa+Street,+Quezon+City",
  },
];

const WasteCollectors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCollector, setSelectedCollector] = useState<Collector | null>(
    null
  );

  const itemsPerPage = 9;

  const filteredCollectors = collectorsData.filter((collector) =>
    collector.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCollectors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCollectors = filteredCollectors.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Find Waste Collector</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for a junk shop..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full p-3  shadow-sm focus:outline-none focus:ring-2"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentCollectors.map((collector) => (
          <div
            key={collector.id}
            className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <Image
              src={collector.image}
              alt={collector.name}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-1">{collector.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{collector.address}</p>
              <p className="text-sm text-gray-500 mb-4">{collector.email}</p>
              <button
                onClick={() => setSelectedCollector(collector)}
                className="bg-primary text-white px-4 py-2 hover:opacity-70 transition"
              >
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCollectors.length === 0 && (
        <p className="text-gray-500 mt-4">No collectors found.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border ${
                currentPage === i + 1
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedCollector && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setSelectedCollector(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {selectedCollector.name}
            </h2>
            <p className="mb-2">
              <span className="font-semibold">Address:</span>{" "}
              {selectedCollector.address}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span>{" "}
              {selectedCollector.email}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Phone:</span>{" "}
              {selectedCollector.phone}
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              <a
                href={selectedCollector.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WasteCollectors;
