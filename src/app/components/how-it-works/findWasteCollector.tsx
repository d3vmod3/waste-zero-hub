import Image from "next/image";
import Gmaps from "@/assets/gmaps.jpeg";

const FindWasteCollector = () => {
  return (
    <div className="bg-secondary p-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="self-center mx-auto space-y-12">
            <h1 className="text-5xl font-semibold text-primary">
              Find Waste Collector
            </h1>
            <p className="text-3xl text-primary">
              Use our Interactive Map to see people near you who posted waste
              materials, so you can connect faster.
            </p>
          </div>
          <div className="self-center mx-auto">
            <Image
              src={Gmaps}
              className="w-96"
              alt=""
              width={1000}
              quality={100}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindWasteCollector;
