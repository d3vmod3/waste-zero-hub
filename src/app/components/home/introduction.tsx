"use client";
import Link from "next/link";
import Globe from "@/assets/globe.png";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Introduction = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (headingRef.current) {
        gsap.from(headingRef.current, {
          y: -50,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
        });
      }
    });

    return () => mm.revert(); // clean up matchMedia listeners
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-12">
        <div className="space-y-6 mx-auto self-center">
          <h1 className="text-8xl font-bold text-primary" ref={headingRef}>
            Waste Zero Hub
          </h1>
          <p className="text-2xl font-semibold">
            Waste Zero Hub is a global online community where waste is
            redirected from trash bins to useful purposes through sharing,
            upcycling/recycling, and community help.
          </p>
          <Link
            href="/how-it-works"
            className="bg-primary text-white px-8 py-4 uppercase"
          >
            Start Now
          </Link>
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
