"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Listings = () => {
  const products = [
    {
      id: 1,
      name: "Recycled Plastic Bottle",
      price: 5,
      image:
        "https://images.pexels.com/photos/31101941/pexels-photo-31101941.jpeg",
    },
    {
      id: 2,
      name: "Used Cardboard Box",
      price: 10,
      image:
        "https://images.pexels.com/photos/4568698/pexels-photo-4568698.jpeg",
    },
    {
      id: 3,
      name: "Aluminum Can",
      price: 2,
      image:
        "https://images.pexels.com/photos/8287259/pexels-photo-8287259.jpeg",
    },
    {
      id: 4,
      name: "Glass Jar",
      price: 7,
      image:
        "https://images.pexels.com/photos/8970996/pexels-photo-8970996.jpeg",
    },
    {
      id: 5,
      name: "Metal Scrap",
      price: 15,
      image:
        "https://images.pexels.com/photos/5846097/pexels-photo-5846097.jpeg",
    },
    {
      id: 6,
      name: "Old Tires",
      price: 20,
      image:
        "https://images.pexels.com/photos/6156594/pexels-photo-6156594.jpeg",
    },
    {
      id: 7,
      name: "Electronic Circuit Boards",
      price: 25,
      image:
        "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
    },
    {
      id: 8,
      name: "Wood Pallet",
      price: 12,
      image:
        "https://images.pexels.com/photos/6485420/pexels-photo-6485420.jpeg",
    },
    {
      id: 9,
      name: "Plastic Crates",
      price: 8,
      image:
        "https://images.pexels.com/photos/10041334/pexels-photo-10041334.jpeg",
    },
    {
      id: 10,
      name: "Copper Wires",
      price: 18,
      image:
        "https://images.pexels.com/photos/11133641/pexels-photo-11133641.jpeg",
    },
    {
      id: 11,
      name: "Glass Bottles",
      price: 6,
      image:
        "https://images.pexels.com/photos/33389716/pexels-photo-33389716.jpeg",
    },
    {
      id: 12,
      name: "Metal Pipes",
      price: 14,
      image:
        "https://images.pexels.com/photos/1466667/pexels-photo-1466667.jpeg",
    },
    {
      id: 13,
      name: "Old Newspapers",
      price: 3,
      image:
        "https://images.pexels.com/photos/29556472/pexels-photo-29556472.jpeg",
    },
    {
      id: 14,
      name: "Wooden Furniture Scrap",
      price: 22,
      image:
        "https://images.pexels.com/photos/5370040/pexels-photo-5370040.jpeg",
    },
  ];

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filtered products
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Change page
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">♻ Waste Zero Hub</h1>

      {/* Search Bar */}
      <div className="form-control mb-6">
        <input
          type="text"
          placeholder="Search for an item..."
          className="w-full p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1); // reset to first page on search
          }}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div key={product.id} className="card bg-base-100 shadow-xl">
              <figure>
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  width={300}
                  height={200}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>₱{product.price}</p>
                <div className="card-actions justify-end">
                  <Link
                    href="/waste-exchange-board/learn-more"
                    className="btn btn-primary text-white hover:opacity-70"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            className="btn btn-outline"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-outline"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Listings;
