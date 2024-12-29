import ShoppingCartIcon from "@heroicons/react/20/solid/ShoppingCartIcon";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 bg-white z-10">
      {/* Top bar */}
      <div className="bg-indigo-900 text-white text-xs flex justify-between items-center px-6 py-2">
        <p>Free Shipping On All Orders Over $50</p>
        <div className="flex items-center gap-4">
          <div className="cursor-pointer">Eng</div>
          <Link href="/faq" className="hover:underline">FAQs</Link>
          <Link href="/help" className="hover:underline">Need Help</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
            C
          </div>
          <span className="font-bold text-xl">Comforty</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-gray-600 text-sm">
          <li>
            <Link href="/" className="hover:text-teal-500 transition">Home</Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-teal-500 transition">Shop</Link>
          </li>
          <li>
            <Link href="/productt" className="hover:text-teal-500 transition">Product</Link>
          </li>
          <li>
            <Link href="/pages" className="hover:text-teal-500 transition">Pages</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-teal-500 transition">About</Link>
          </li>
        </ul>

        {/* Contact and Cart */}
        <div className="flex items-center gap-6">
          <p className="hidden md:block text-gray-600 text-sm">Contact: 0333-0205238</p>
          <div className="relative bg-gray-100 border border-gray-300 rounded px-2 py-1 flex items-center">
            <ShoppingCartIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
