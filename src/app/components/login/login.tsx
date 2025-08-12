"use client";

import Image from "next/image";
import Logo from "@/assets/logo.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-screen w-full">
        {/* Left Side - Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg px-4 py-2 w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-lg px-4 py-2 w-full"
              required
            />

            {/* Remember Me Switch */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 rounded border-gray-300 focus:ring-green-500"
              />
              <label htmlFor="rememberMe" className="text-sm select-none">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                router.push("/home");
              }}
              className="w-full py-2 rounded-lg bg-primary text-white hover:opacity-70a transition"
            >
              Login
            </button>
          </form>

          {/* Social Login Buttons */}
          <div className="mt-6">
            <p className="text-center text-gray-500 mb-4">Or login with</p>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
              >
                {/* You can add icons here */}
                <span>Continue with Google</span>
              </button>
              <button
                type="button"
                className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
              >
                <span>Facebook</span>
              </button>
              <button
                type="button"
                className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
              >
                <span>LinkedIn</span>
              </button>
            </div>
          </div>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/register" className="text-green-600 underline">
              Create one here
            </Link>
            .
          </p>
        </div>

        {/* Right Side - Logo and Title */}
        <div className="bg-accent flex flex-col items-center justify-center p-8">
          <div className="bg-white p-6 rounded-full shadow-md">
            <Image
              src={Logo}
              alt="Waste Zero Hub Logo"
              width={100}
              height={100}
            />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-green-800">
            Waste Zero Hub
          </h1>
          <p className="text-green-700 mt-2 text-center max-w-xs">
            Join our mission to reduce waste and build a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
