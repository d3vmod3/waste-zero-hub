"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
// import gsap from "gsap";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Avatar from "@/assets/avatar.png";

const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Hide Nav if on /register or /login
  if (pathname === "/register" || pathname === "/login") {
    return null;
  }

  return (
    <div ref={navRef} className="sticky top-0 z-50 bg-accent shadow-sm">
      <div className="navbar bg-secondary shadow-sm py-6">
        <div className="container mx-auto flex">
          <div className="navbar-start">
            <a className="btn btn-ghost btn-no-bg-hover">
              <Image src={Logo} alt="logo" width={100} height={100} />
            </a>
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase text-primary font-semibold">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <div className="dropdown dropdown-hover">
                  <Link href="/how-it-works">How it works</Link>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <Link href="/waste-exchange-board">
                        Waste Exchange Board
                      </Link>
                    </li>
                    <li>
                      <Link href="/find-waste-collector">
                        Find Waste Collector
                      </Link>
                    </li>
                    <li>
                      <Link href="/learn-and-create">Learn and Create</Link>
                    </li>
                    <li>
                      <Link href="/share-the-impact">How it works</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link href="/login" className="flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden border-gray-300">
                    <Image
                      src={Avatar}
                      alt="Profile"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
