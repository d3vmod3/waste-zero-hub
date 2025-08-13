"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Tree from "@/assets/tree.svg";
import Human from "@/assets/human.svg";
import Trashbin from "@/assets/trashbin.svg";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const icons =
        document.querySelectorAll<HTMLImageElement>(".feature-icon");
      const items = document.querySelectorAll<HTMLElement>(".feature-item");

      // Hover animation for icons
      icons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, { y: -10, duration: 0.3, ease: "power2.out" });
        });
        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      });

      // Fade in on scroll for each grid item
      items.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ctx.revert(); // removes animations & listeners
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // clears all ScrollTriggers
    };
  }, []);

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="mx-auto text-center feature-item">
            <Image
              className="mx-auto w-24 feature-icon"
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
          <div className="mx-auto text-center feature-item">
            <Image
              className="mx-auto w-20 feature-icon"
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
          <div className="mx-auto text-center feature-item">
            <Image
              className="mx-auto w-16 feature-icon"
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
