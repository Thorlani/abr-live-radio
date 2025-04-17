// components/Footer.tsx
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPeriscope,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-start justify-between gap-6 md:gap-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src={"/images/logo.png"}
            alt="ABR Logo"
            width={140}
            height={64}
            className=" grayscale"
          />
        </div>

        <div className="max-w-7xl flex flex-row items-start justify-between my-[2%] gap-6 md:gap-10">
          {/* Nav Links */}
          <ul className="flex flex-wrap items-center justify-center text-sm font-semibold gap-4 md:gap-6 text-gray-200">
            <li>
              <a href="#">HOME</a>
            </li>
            <li className="hidden md:inline">|</li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li className="hidden md:inline">|</li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
            <li className="hidden md:inline">|</li>
            <li>
              <a href="#">ALL PODCAST</a>
            </li>
            <li className="hidden md:inline">|</li>
            <li>
              <a href="#">ADVERTISE</a>
            </li>
            <li className="hidden md:inline">|</li>
            <li>
              <a href="#">RESOURCES</a>
            </li>
            <li className="hidden md:inline">|</li>
            <li>
              <a href="#">CONNECT WITH ABR</a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 text-white text-xl">
            <a href="#">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="#">
              <FaFacebookF className="hover:text-blue-600" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-blue-400" />
            </a>
            <a href="#">
              <FaPeriscope className="hover:text-red-500" />
            </a>
            <a href="#">
              <FaLinkedinIn className="hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="text-xs text-gray-400 mt-6 text-center md:text-left md:flex md:items-center md:justify-between">
        <span>© Copyright 2021. All Rights Reserved.</span>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Terms & conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
}
