"use client";
import { useState, ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AddDonation = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const router = useRouter();
  const notify = () => {
    toast.success("Donation have been listed successfully!");
    setTimeout(() => {
      router.push("/waste-exchange-board");
    }, 3000);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prev) => [...prev, ...filesArray]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-primary">Add Donation</h1>

      <form className="space-y-6">
        {/* Title */}
        <div>
          <label className="label font-semibold">Title</label>
          <input
            type="text"
            placeholder="Enter donation title"
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Upload Images */}
        <div>
          <label className="label font-semibold">Upload Images</label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          {images.length > 0 && (
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={img}
                    alt={`Preview ${idx}`}
                    className="w-full h-32 object-cover rounded-lg shadow"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="label font-semibold">Description</label>
          <textarea
            placeholder="Describe your donation..."
            className="textarea textarea-bordered w-full min-h-[120px]"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            onClick={notify}
            className="btn text-white btn-primary w-full"
          >
            Submit Donation
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default AddDonation;
