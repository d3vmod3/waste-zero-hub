"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        gsap.to(nav, { y: -150, duration: 0.3, ease: "power2.out" }); // Hide nav
      } else {
        gsap.to(nav, { y: 0, duration: 0.3, ease: "power2.out" }); // Show nav
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={navRef} className="sticky top-0 z-50 bg-base-100 shadow-sm mb-6">
      <div className="navbar bg-secondary shadow-sm py-6">
        <div className="container mx-auto flex">
          <div className="navbar-start">
            <a className="btn btn-ghost btn-no-bg-hover">Logo</a>
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/how-it-works">How it works</Link>
              </li>
              <li>
                <Link href="/get-involved">Get involved</Link>
              </li>
              <li>
                <Link href="#">Login/Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
