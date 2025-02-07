import React from "react";
import { GiSofa } from "react-icons/gi";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaPinterest  } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* main div */}
      <footer className="bg-white w-full mt-10">
      {/* Top Section */}
      <div className="max-w-[1320px] mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Section 1 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <GiSofa className="text-[#029FAE] w-10 h-10" />
            <h1 className="text-[#272343] text-2xl font-medium">Comforty</h1>
          </div>
          <p className="text-[#272343] opacity-60 text-sm leading-6 mb-4">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <ul className="flex gap-4">
            <li className="w-10 h-10 flex items-center justify-center rounded-full border border-transparent hover:border-[#007580]">
             <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
             <FaFacebook className="text-[#272343] opacity-70 w-6 h-6 hover:text-[#007580]" />
             </Link>
            </li>
            <li className="w-10 h-10 flex items-center justify-center rounded-full border border-transparent hover:border-[#007580]">
            <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-[#272343] opacity-70 w-6 h-6 hover:text-[#007580]" />
              </Link>
            </li>
            <li className="w-10 h-10 flex items-center justify-center rounded-full border border-transparent hover:border-[#007580]">
              <FaInstagram className="text-[#272343] opacity-70 w-6 h-6 hover:text-[#007580]" />
            </li>
            <li className="w-10 h-10 flex items-center justify-center rounded-full border border-transparent hover:border-[#007580]">
              <FaPinterest className="text-[#272343] opacity-70 w-6 h-6 hover:text-[#007580]" />
            </li>
            <li className="w-10 h-10 flex items-center justify-center rounded-full border border-transparent hover:border-[#007580]">
              <FaYoutube className="text-[#272343] opacity-70 w-6 h-6 hover:text-[#007580]" />
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h6 className="text-[#9A9CAA] uppercase text-sm font-medium mb-4">Category</h6>
          <ul className="space-y-3">
            {[
              "Sofa",
              "Armchair",
              "Wing Chair",
              "Desk Chair",
              "Wooden Chair",
              "Park Bench",
            ].map((category) => (
              <li key={category}>
                <Link
                  href="/"
                  className="text-[#272343] hover:text-[#007580] hover:underline"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h6 className="text-[#9A9CAA] uppercase text-sm font-medium mb-4">Support</h6>
          <ul className="space-y-3">
            {[
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((support) => (
              <li key={support}>
                <Link
                  href="/"
                  className="text-[#272343] hover:text-[#007580] hover:underline"
                >
                  {support}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h6 className="text-[#9A9CAA] uppercase text-sm font-medium mb-4">
            Newsletter
          </h6>
          <form className="space-y-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email."
                className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:border-[#007580]"
              />
              <button
                type="submit"
                className="bg-[#029FAE] text-white px-4 py-2 rounded-r-md hover:bg-[#007580]"
              >
                Subscribe
              </button>
            </div>
            <p className="text-[#272343] opacity-60 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Nullam tincidunt erat enim.
            </p>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#F9FAFB] text-[#9A9CAA] text-sm py-4 mt-8 shadow-inner">
        <div className="max-w-[1320px] mx-auto flex justify-between items-center px-8">
          <p>
            @ 2021 - Blogy - Designed & Developed by
            <span className="text-black"> Zakirsoft</span>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}