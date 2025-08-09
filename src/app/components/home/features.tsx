import Tree from "@/assets/tree.svg";
import Human from "@/assets/human.svg";
import Trashbin from "@/assets/trashbin.svg";
import Image from "next/image";

const Features = () => {
  return (
    <div className="container mx-auto">
      <div className="space-y-8 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary">
            Making Suitable Choices
          </h1>
          <span className="text-2xl text-primary">
            Discover eco-conscious choices for your community.
          </span>
        </div>

        <div className="grid grid-cols-3 gap-12">
          <div className="mx-auto text-center">
            <Image
              className="mx-auto w-24"
              src={Tree}
              alt="logo"
              width={100}
              height={100}
            />
            <span className="text-xl font-semibold">
              Promote Waste Production
            </span>
            <p>
              Encourage communities to reduce, reuse, and recycle through
              sharing and upcycling.
            </p>
          </div>
          <div className="mx-auto text-center">
            <Image
              className="mx-auto w-20"
              src={Human}
              alt="logo"
              width={100}
              height={100}
            />
            <span className="text-xl font-semibold">Connect People</span>
            <p>
              Link waste sources with upcyclers and recyclers using our
              interactive map and Waste Exchange Board.
            </p>
          </div>
          <div className="mx-auto text-center">
            <Image
              className="mx-auto w-16"
              src={Trashbin}
              alt="logo"
              width={100}
              height={100}
            />
            <span className="text-xl font-semibold">Educate and Motivate</span>
            <p>
              Share simple guides, tips, and creative ideas to encourage people
              to turn waste into something useful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
