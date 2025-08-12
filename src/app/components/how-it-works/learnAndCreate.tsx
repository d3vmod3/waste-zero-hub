import Image from "next/image";
import LearnAndCreateImg from "@/assets/learn-and-create.png";
import Link from "next/link";

const LearnAndCreate = () => {
  return (
    <div className="bg-primary p-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="self-center mx-auto">
            <Image
              src={LearnAndCreateImg}
              className="w-96"
              alt=""
              width={1000}
              quality={100}
              height={1000}
            />
          </div>
          <div className="self-center mx-auto space-y-12">
            <h1 className="text-5xl uppercase font-semibold text-white">
              Learn and Create
            </h1>
            <p className="text-3xl text-white">
              Follow our{" "}
              <Link
                href="/learn-and-create"
                className="cursor-pointer underline"
              >
                {" "}
                Upcycling and Recycling Guides
              </Link>{" "}
              with videos and step-by-step instructions to turn waste into
              useful products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnAndCreate;
