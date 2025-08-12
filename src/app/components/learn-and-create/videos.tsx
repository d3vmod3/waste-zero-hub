"use client";
import { useState } from "react";

interface Video {
  id: number;
  title: string;
  url: string;
}

const videos: Video[] = [
  { id: 1, title: "Video 1", url: "https://youtu.be/Sr6DgQ18drA" },
  { id: 2, title: "Video 2", url: "https://youtu.be/CrngKvTJagk" },
  { id: 3, title: "Video 3", url: "https://youtu.be/fGqfWvm4TnQ" },
  { id: 4, title: "Video 4", url: "https://youtu.be/HkHEJEzMKwc" },
  { id: 5, title: "Video 5", url: "https://youtu.be/Nulpilk4WYw" },
  { id: 6, title: "Video 6", url: "https://youtu.be/xEAOvFG1AmM" },
  { id: 7, title: "Video 7", url: "https://youtu.be/y1r0c-V7GIk" },
  { id: 8, title: "Video 8", url: "https://youtu.be/nnOeZTqqp60" },
  { id: 9, title: "Video 9", url: "https://youtu.be/fGqfWvm4TnQ" },
  { id: 10, title: "Video 10", url: "https://youtu.be/rEaqfA-1JnM" },
  { id: 11, title: "Video 11", url: "https://youtu.be/I2SHX0Fa0fs" },
  { id: 12, title: "Video 12", url: "https://youtu.be/j-7grMXIXs0" },
  { id: 13, title: "Video 13", url: "https://youtu.be/i5_fEnNuRZ8" },
  { id: 14, title: "Video 14", url: "https://youtu.be/5xrWrKIVBgo" },
  { id: 15, title: "Video 15", url: "https://youtu.be/6kO1qYtfA8U" },
];

const getYoutubeId = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : "";
};

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const itemsPerPage = 6;

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
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full p-2 border"
        />
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedVideos.map((video) => {
          const videoId = getYoutubeId(video.url);
          return (
            <div
              key={video.id}
              className="overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                {/* Thumbnail instead of iframe */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
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

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white overflow-hidden w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${getYoutubeId(
                  selectedVideo.url
                )}`}
                title={selectedVideo.title}
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 text-right">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
