"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Leaf from "@/assets/leaf.jpeg";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Articles = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        { scale: 1 },
        {
          scale: 1.1,
          scrollTrigger: {
            trigger: bgRef.current,
            start: "top 80%", // start when top of bg hits 80% viewport height
            end: "bottom 20%", // end when bottom of bg hits 20% viewport height
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    if (btnRef.current) {
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: btnRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse", // only active in view
          },
        }
      );
    }
  }, []);

  return (
    <div>
      {/* Background div */}
      <div
        ref={bgRef}
        className="mx-auto bg-cover bg-center h-96 flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${Leaf.src})` }}
      >
        <Link
          ref={btnRef}
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
