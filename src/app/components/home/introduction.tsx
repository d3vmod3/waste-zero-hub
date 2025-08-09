import Globe from "@/assets/globe.png";
import Image from "next/image";

const Introduction = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-6 mx-auto self-center">
          <h1 className="text-8xl font-bold text-primary">Waste Zero Hub</h1>
          <p className="text-2xl font-semibold">
            Waste Zero Hub is a global online community where waste is
            redirected from trash bins to useful purposes through sharing,
            upcycling/recycling, and community help.
          </p>
          <button className="bg-primary text-white px-8 py-4 uppercase">
            Start Now
          </button>
        </div>
        <div className="mx-auto self-center">
          <Image
            src={Globe}
            className=""
            alt="logo"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
