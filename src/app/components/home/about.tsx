"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const About = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/home") {
      gsap.set([titleRef.current, textRef.current], { opacity: 0, y: 50 });

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
      });
      tl.to(titleRef.current, { y: 0, opacity: 1 }).to(
        textRef.current,
        { y: 0, opacity: 1 },
        "-=0.5"
      );
    }
  }, [pathname]);

  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-2 gap-12 text-white overflow-hidden">
        <div ref={titleRef} className="text-6xl font-bold">
          TURNING WASTE INTO WORTH
        </div>
        <div ref={textRef} className="text-2xl">
          We believe in making conscious choices that benefit both people and
          the planet. Through recycling and upcycling, waste is transformed into
          useful products, reducing environmental impact and promoting a more
          sustainable, circular economy.
        </div>
      </div>
    </div>
  );
};

export default About;
