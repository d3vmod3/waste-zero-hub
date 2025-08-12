"use client";

import Image from "next/image";
import Logo from "@/assets/logo.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Registration = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const router = useRouter();
  // Close modal on "Escape" key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowTerms(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-screen w-full">
        {/* Left Side - Form */}
        <div className="p-8 md:p-12 self-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Register</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-lg px-4 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-lg px-4 py-2 w-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Age"
                className="border rounded-lg px-4 py-2 w-full"
              />
              <select className="border rounded-lg px-4 py-2 w-full">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Location"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="url"
              placeholder="Google Map Link"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg px-4 py-2 w-full"
            />

            {/* Terms of Use Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <button
                  type="button"
                  className="text-green-600 underline"
                  onClick={() => setShowTerms(true)}
                >
                  Terms of Use
                </button>
              </label>
            </div>

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                router.push("/home");
              }}
              disabled={!isAgreed}
              className={`w-full py-2 rounded-lg transition ${
                isAgreed
                  ? "bg-primary text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Register
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?
            <Link href="/login" className="text-green-600 underline">
              Login here
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
              className="w-96"
              width={1000}
              height={1000}
            />
          </div>
          <p className="text-green-700 mt-2 text-center max-w-xs">
            Join our mission to reduce waste and build a sustainable future.
          </p>
        </div>
      </div>

      {/* Modal for Terms */}
      {showTerms && (
        <div
          className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && setShowTerms(false)}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setShowTerms(false)}
            >
              ✖
            </button>

            <h2 className="text-xl font-bold mb-4">Terms of Use</h2>
            <div className="overflow-y-auto border border-primary p-2 rounded-lg max-h-[70vh] pr-2 text-sm space-y-4">
              <p>
                <strong>Waste Zero Hub – Terms of Use</strong>
              </p>

              <p>
                <strong>Lawful and Respectful Use</strong>
              </p>
              <ul className="list-disc ml-6">
                <li>
                  Use this site only for legal, respectful, and
                  community-friendly purposes.
                </li>
                <li>
                  Do not post, share, or transmit any harmful, misleading,
                  defamatory, or offensive content.
                </li>
              </ul>

              <p>
                <strong>Intellectual Property Rights</strong>
              </p>
              <ul className="list-disc ml-6">
                <li>
                  All content, designs, and materials on this site are owned by
                  Waste Zero Hub or its content creators.
                </li>
                <li>
                  You may not copy, reproduce, distribute, or modify any content
                  without prior written permission.
                </li>
              </ul>

              <p>
                <strong>User Contributions</strong>
              </p>
              <ul className="list-disc ml-6">
                <li>
                  By submitting any content, you grant Waste Zero Hub a
                  non-exclusive, royalty-free license to use, display, and share
                  it.
                </li>
                <li>
                  You are responsible for ensuring your submissions do not
                  violate laws or third-party rights.
                </li>
              </ul>

              <p>
                <strong>Limitation of Liability</strong>
              </p>
              <ul className="list-disc ml-6">
                <li>
                  Waste Zero Hub will not be liable for any damages arising from
                  your use of the website.
                </li>
                <li>Use this site at your own risk.</li>
              </ul>

              <p>
                <strong>Privacy</strong>
              </p>
              <p>
                Your personal information will be handled according to our
                Privacy Policy.
              </p>

              <p>
                <strong>Prohibited Activities</strong>
              </p>
              <ul className="list-disc ml-6">
                <li>Upload viruses, malware, or harmful code.</li>
                <li>Hack, disrupt, or interfere with site operations.</li>
                <li>Misuse the site for spam or fraudulent activities.</li>
              </ul>

              <p>
                <strong>Changes to Terms</strong>
              </p>
              <p>
                Waste Zero Hub reserves the right to modify or update these
                Terms at any time. Continued use means acceptance of changes.
              </p>

              <p>
                By clicking “I Agree,” you confirm you have read and accepted
                these Terms of Use.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
