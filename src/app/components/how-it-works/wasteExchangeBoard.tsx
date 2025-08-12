import Image from "next/image";
import Instagram from "@/assets/waste-exchanged-logo.png";
import Link from "next/link";

const WasteExchangeBoard = () => {
  return (
    <div className="bg-primary p-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="self-center mx-auto">
            <Image
              src={Instagram}
              className="w-96"
              alt=""
              width={1000}
              quality={100}
              height={1000}
            />
          </div>
          <div className="self-center mx-auto space-y-12">
            <h1 className="text-5xl font-semibold text-white">
              POST OR FIND WASTE
            </h1>
            <p className="text-3xl text-white">
              Share the waste materials you have or browse what others are
              offering in the{" "}
              <Link
                href="/waste-exchange-board"
                className="cursor-pointer underline"
              >
                {" "}
                Waste Exchange Board
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteExchangeBoard;
