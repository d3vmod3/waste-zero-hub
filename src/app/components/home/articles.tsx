import Leaf from "@/assets/leaf.jpeg";
import Image from "next/image";
import Link from "next/link";

const Articles = () => {
  return (
    <div>
      {/* Background div */}
      <div
        className="mx-auto bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${Leaf.src})` }}
      >
        <Link
          href="#"
          className="bg-white bg-opacity-80 text-4xl px-8 py-6 text-green-800 hover:bg-opacity-100 transition"
        >
          See Related Articles
        </Link>
      </div>
    </div>
  );
};

export default Articles;
