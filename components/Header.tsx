"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col">

        {/* Download App and Sign Up/Sign In Section */}
        <div className="flex justify-between items-center mb-2 w-full">
          <Link href="/download-app" className="flex items-center">
          
            <Image src="/image.png" alt="Download App" width={18} height={18} className="inline-block ml-2" />
            <span className="text-gray-300 text-sm">Download App via SMS</span>
          </Link>

          {/* Sign Up and Sign In Section */}
          <div className="flex items-center space-x-4"> {/* Adjust spacing between links */}
            <Link href="/sign-up" className="text-gray-300 hover:text-white">Sign Up</Link>
            <span className="text-gray-300">|</span> {/* Span line */}
            <Link href="/sign-in" className="text-gray-300 hover:text-white">Sign In</Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-700 mb-2" />

        {/* Logo Section */}
        <div className="flex items-center space-x-3 mb-2">
          <Image src="/pwlogo.png" alt="PakWheels Logo" width={140} height={40} />
          <span className="text-white text-xl font-bold"></span>

          {/* Navigation Links */}
          <div className="w-full flex justify-center">
            <ul className="flex space-x-10 mt-0">
              <li>
                <Link href="/used-cars" className="text-gray-300 hover:text-white">Used Cars</Link>
              </li>
              <li>
                <Link href="/new-cars" className="text-gray-300 hover:text-white">New Cars</Link>
              </li>
              <li>
                <Link href="/bikes" className="text-gray-300 hover:text-white">Bikes</Link>
              </li>
              <li>
                <Link href="/auto-store" className="text-gray-300 hover:text-white">Auto Store</Link>
              </li>
              <li>
                <Link href="/videos" className="text-gray-300 hover:text-white">Videos</Link>
              </li>
              <li>
                <Link href="/forums" className="text-gray-300 hover:text-white">Forums</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link href="/more" className="text-gray-300 hover:text-white">More</Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
