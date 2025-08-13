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

interface Message {
  text: string;
  sender: "user" | "collector";
}

const collectorsData: Collector[] = [
  {
    id: 1,
    name: "Eco Junk Shop",
    image: "https://images.pexels.com/photos/2566826/pexels-photo-2566826.jpeg",
    address: "12 Green Street, London, UK",
    email: "contact@ecojunk.com",
    phone: "+63 912 345 6789",
    locationUrl: "https://maps.google.com/?q=12+Green+Street,+London,+UK",
  },
  {
    id: 2,
    name: "Green Cycle Junkyard",
    image: "https://images.pexels.com/photos/6689778/pexels-photo-6689778.jpeg",
    address: "45 Market Road, Sydney, Australia",
    email: "greencycle@example.com",
    phone: "+63 917 234 5678",
    locationUrl: "https://maps.google.com/?q=45+Market+Road,+Sydney,+Australia",
  },
  {
    id: 3,
    name: "Recyclers Hub",
    image:
      "https://images.pexels.com/photos/18598464/pexels-photo-18598464.jpeg",
    address: "200 Recycle Avenue, Toronto, Canada",
    email: "hub@recyclers.com",
    phone: "+63 915 876 5432",
    locationUrl:
      "https://maps.google.com/?q=200+Recycle+Avenue,+Toronto,+Canada",
  },
  {
    id: 4,
    name: "Metro Waste Solutions",
    image:
      "https://images.pexels.com/photos/33388380/pexels-photo-33388380.jpeg",
    address: "88 Clover Lane, Dublin, Ireland",
    email: "info@metrowaste.com",
    phone: "+63 920 111 2233",
    locationUrl: "https://maps.google.com/?q=88+Clover+Lane,+Dublin,+Ireland",
  },
  {
    id: 5,
    name: "Urban Eco Trade",
    image: "https://images.pexels.com/photos/6641641/pexels-photo-6641641.jpeg",
    address: "17 Sunrise Boulevard, Auckland, New Zealand",
    email: "urbaneco@trade.com",
    phone: "+63 927 444 5566",
    locationUrl:
      "https://maps.google.com/?q=17+Sunrise+Boulevard,+Auckland,+New+Zealand",
  },
  {
    id: 6,
    name: "Manila Scrap Center",
    image: "https://images.pexels.com/photos/8961077/pexels-photo-8961077.jpeg",
    address: "50 Dela Cruz Street, Madrid, Spain",
    email: "manilascrap@center.com",
    phone: "+63 913 678 9012",
    locationUrl:
      "https://maps.google.com/?q=50+Dela+Cruz+Street,+Madrid,+Spain",
  },
  {
    id: 7,
    name: "Eco Reclaim Hub",
    image:
      "https://images.pexels.com/photos/19598833/pexels-photo-19598833.jpeg",
    address: "23 Rizal Avenue, Singapore",
    email: "reclaim@eco.com",
    phone: "+63 926 112 2334",
    locationUrl: "https://maps.google.com/?q=23+Rizal+Avenue,+Singapore",
  },
  {
    id: 8,
    name: "Green Recovery Point",
    image: "https://images.pexels.com/photos/3735211/pexels-photo-3735211.jpeg",
    address: "101 Park Boulevard, Cape Town, South Africa",
    email: "green@recovery.com",
    phone: "+63 928 223 3445",
    locationUrl:
      "https://maps.google.com/?q=101+Park+Boulevard,+Cape+Town,+South+Africa",
  },
  {
    id: 9,
    name: "Zero Waste Depot",
    image: "https://images.pexels.com/photos/3735215/pexels-photo-3735215.jpeg",
    address: "45 Greenfield Lane, New York, USA",
    email: "contact@zerowaste.com",
    phone: "+63 917 555 6677",
    locationUrl: "https://maps.google.com/?q=45+Greenfield+Lane,+New+York,+USA",
  },
  {
    id: 10,
    name: "Circular Economy Traders",
    image: "https://images.pexels.com/photos/3735219/pexels-photo-3735219.jpeg",
    address: "18 San Pedro Street, Lisbon, Portugal",
    email: "circular@economy.com",
    phone: "+63 916 777 8899",
    locationUrl:
      "https://maps.google.com/?q=18+San+Pedro+Street,+Lisbon,+Portugal",
  },
  {
    id: 11,
    name: "Eco Warrior Collectors",
    image:
      "http://images.pexels.com/photos/18153234/pexels-photo-18153234.jpeg",
    address: "30 Mabini Road, Tokyo, Japan",
    email: "warriors@eco.com",
    phone: "+63 912 888 9900",
    locationUrl: "https://maps.google.com/?q=30+Mabini+Road,+Tokyo,+Japan",
  },
  {
    id: 12,
    name: "Planet Saver Scrap",
    image:
      "https://images.pexels.com/photos/33404810/pexels-photo-33404810.jpeg",
    address: "44 Greenway Drive, Berlin, Germany",
    email: "planetsaver@scrap.com",
    phone: "+63 919 999 1122",
    locationUrl:
      "https://maps.google.com/?q=44+Greenway+Drive,+Berlin,+Germany",
  },
  {
    id: 13,
    name: "EcoLink Resources",
    image: "https://images.pexels.com/photos/4551310/pexels-photo-4551310.jpeg",
    address: "60 Maginhawa Street, Paris, France",
    email: "info@ecolink.com",
    phone: "+63 915 123 4567",
    locationUrl:
      "https://maps.google.com/?q=60+Maginhawa+Street,+Paris,+France",
  },
];

const ChatBox = ({
  collector,
  onClose,
}: {
  collector: Collector;
  onClose: () => void;
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const professionalReplies = (location: string): string[] => [
    `Thank you for reaching out. We'll get back to you shortly with more details. You may also visit us at ${location}.`,
    `We appreciate your inquiry. Our team will respond as soon as possible. You can also stop by our shop at ${location}.`,
    `Your message has been received. Expect a reply from us soon. Feel free to drop by at ${location}.`,
  ];

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    const replies = professionalReplies(collector.address);
    const randomReply = replies[Math.floor(Math.random() * replies.length)];

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: randomReply, sender: "collector" },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white h-96 shadow-lg rounded-lg overflow-hidden flex flex-col">
      {/* Header */}
      <div className="bg-primary text-white p-3 flex justify-between items-center">
        <span className="font-semibold text-sm">
          Chat with {collector.name}
        </span>
        <button onClick={onClose} className="text-white text-lg leading-none">
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto max-h-60 text-sm">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${
              msg.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <span
              className={`inline-block px-2 py-1 rounded ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex border-t">
        <input
          type="text"
          className="flex-1 p-2 text-sm focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-primary text-white px-3 text-sm hover:opacity-80"
        >
          Send
        </button>
      </div>
    </div>
  );
};

const WasteCollectors = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCollector, setSelectedCollector] = useState<Collector | null>(
    null
  );
  const [chatCollector, setChatCollector] = useState<Collector | null>(null);

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

  const openModal = (collector: Collector) => {
    setSelectedCollector(collector);
    const modal = document.getElementById(
      "collector_modal"
    ) as HTMLDialogElement;
    modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById(
      "collector_modal"
    ) as HTMLDialogElement;
    modal.close();
    setSelectedCollector(null);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-primary">
        Find Waste Collector
      </h1>

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
          className="w-full p-3 shadow-sm focus:outline-none focus:ring-2"
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
                onClick={() => openModal(collector)}
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

      {/* DaisyUI Modal */}
      <dialog id="collector_modal" className="modal">
        <div className="modal-box bg-white">
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
          {selectedCollector && (
            <>
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
              <p className="mb-4">
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
              <button
                className="bg-primary text-white px-4 py-2 hover:opacity-70"
                onClick={() => {
                  setChatCollector(selectedCollector);
                  closeModal();
                }}
              >
                Send Message
              </button>
            </>
          )}
        </div>
      </dialog>

      {/* Floating Chat Box */}
      {chatCollector && (
        <ChatBox
          collector={chatCollector}
          onClose={() => setChatCollector(null)}
        />
      )}
    </div>
  );
};

export default WasteCollectors;
