"use client";
import { useState } from "react";

interface Video {
  id: number;
  title: string;
  url: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "32 GENIUS WAYS TO RECYCLE PLASTIC",
    url: "https://youtu.be/Sr6DgQ18drA",
  },
  {
    id: 2,
    title:
      "CARDBOARD DESK CALENDAR | DIY Creative Minimalist Calendar | Cardboard Craft Ideas | Arts & Crafts",
    url: "https://youtu.be/CrngKvTJagk",
  },
  {
    id: 3,
    title:
      "15 Clever Ways to Upcycle Everything Around You!! Recycling Life Hacks and DIY Crafts by Blossom",
    url: "https://youtu.be/fGqfWvm4TnQ",
  },
  {
    id: 4,
    title: "10 WONDERFUL RECYCLE DIY CRAFTS THAT WILL BRIGHTEN YOUR ROOM",
    url: "https://youtu.be/HkHEJEzMKwc",
  },
  {
    id: 5,
    title: "10 Min DIY Tote bag made with unused Jeans",
    url: "https://youtu.be/Nulpilk4WYw",
  },
  {
    id: 6,
    title: "38 Creative Ideas With Plastic Bottles | Thaitrick",
    url: "https://youtu.be/xEAOvFG1AmM",
  },
  {
    id: 7,
    title:
      "How to reuse Shoe Boxes at home | 3 Amazing Ideas | Best out of waste",
    url: "https://youtu.be/y1r0c-V7GIk",
  },
  {
    id: 8,
    title: "3 SUPER EASY TIN CAN DESIGNS! Tin Can Recycle Crafts",
    url: "https://youtu.be/nnOeZTqqp60",
  },
  {
    id: 9,
    title:
      "15 Clever Ways to Upcycle Everything Around You!! Recycling Life Hacks and DIY Crafts by Blossom",
    url: "https://youtu.be/fGqfWvm4TnQ",
  },
  {
    id: 10,
    title: "21 Surprising Ways To Upcycle Old Plastic Products",
    url: "https://youtu.be/rEaqfA-1JnM",
  },
  {
    id: 11,
    title:
      " Regret Not Learning These 100 Plastic Bottle Recycling Ideas At Age 40",
    url: "https://youtu.be/I2SHX0Fa0fs",
  },
  {
    id: 12,
    title: "Beginners' Guide to Plastic Bag Recycling - How to Make a Wallet",
    url: "https://youtu.be/j-7grMXIXs0",
  },
  {
    id: 13,
    title: "Turning Trash into Treasure: The Art of Upcycling Plastic",
    url: "https://youtu.be/i5_fEnNuRZ8",
  },
  {
    id: 14,
    title: "How to make recycled paper (+ mould & deckle diy) | Tutorial",
    url: "https://youtu.be/5xrWrKIVBgo",
  },
  {
    id: 15,
    title: "Making Unique Moulds from Trash - You Won't Believe the Results!",
    url: "https://youtu.be/6kO1qYtfA8U",
  },
];

const getYoutubeId = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : "";
};

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const itemsPerPage = 8;
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredVideos.length / itemsPerPage);

  const paginatedVideos = filteredVideos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleWatch = (video: Video) => {
    setSelectedVideo(video);
    const modal = document.getElementById("video_modal") as HTMLDialogElement;
    modal?.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("video_modal") as HTMLDialogElement;
    modal?.close();
    setSelectedVideo(null);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-primary">Learn and Create</h1>
      <div className="form-control mb-6">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full p-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2"
        />
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {paginatedVideos.map((video) => {
          const videoId = getYoutubeId(video.url);
          return (
            <div
              key={video.id}
              className="overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-mb mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <button
                  onClick={() => handleWatch(video)}
                  className="bg-primary hover:opacity-70 cursor-pointer text-white px-4 py-2"
                >
                  Watch
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 cursor-pointer py-1 ${
              currentPage === i + 1
                ? "bg-primary text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* DaisyUI Modal */}
      <dialog id="video_modal" className="modal">
        <div className="modal-box max-w-4xl">
          <div className="flex justify-end pb-4">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle"
              aria-label="Close modal"
              type="button"
            >
              ✕
            </button>
          </div>
          {selectedVideo && (
            <div className="aspect-video mb-4">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${getYoutubeId(
                  selectedVideo.url
                )}`}
                title={selectedVideo.title}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Videos;
