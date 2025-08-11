"use client"; // Needed in Next.js for GSAP animations on client side

import { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.from(titleRef.current, { y: 50, opacity: 0 }).from(
      textRef.current,
      { y: 50, opacity: 0 },
      "-=0.5"
    );
  }, []);

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
