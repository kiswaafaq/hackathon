import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {/* Logo and Social Media */}
        <div>
          <h2 className="text-xl font-bold flex items-center">
            <span className="mr-2 text-teal-500">🛋️</span> Comforty
          </h2>
          <p className="mt-2">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          <div className="flex items-center mt-4 space-x-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square text-xl"></i>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter-square text-xl"></i>
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-xl"></i>
            </Link>
            <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-pinterest-square text-xl"></i>
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube text-xl"></i>
            </Link>
          </div>
        </div>

        {/* Category Section */}
        <div>
          <h3 className="font-bold text-lg">Category</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/images/white-chair" className="hover:text-teal-500">Sofa</Link></li>
            <li><Link href="/desk-chair" className="hover:text-teal-500">Armchair</Link></li>
            <li><Link href="/images/orange-chair.jpeg" className="hover:text-teal-500">Wing Chair</Link></li>
            <li><Link href="/images/black-chair" className="hover:text-teal-500">Desk Chair</Link></li>
            <li><Link href="/images/brown-up.jpeg" className="hover:text-teal-500">Wooden Chair</Link></li>
            <li><Link href="/images/white-tuf.jpeg" className="hover:text-teal-500">Park Bench</Link></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-bold text-lg">Support</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/support/help" className="hover:text-teal-500">Help & Support</Link></li>
            <li><Link href="/support/terms" className="hover:text-teal-500">Terms & Conditions</Link></li>
            <li><Link href="/support/privacy-policy" className="hover:text-teal-500">Privacy Policy</Link></li>
            <li><Link href="/support/help-center" className="hover:text-teal-500">Help</Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-lg">Newsletter</h3>
          <p className="mt-2">Subscribe to stay updated.</p>
          <form className="mt-4 flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-6 text-sm text-gray-500">
        © 2021 Comforty - Designed & Developed by Zakirsoft
        <div className="mt-2">
          <Image
            src="/payment-icons.jpg"
            alt="Payment Methods"
            height={100}
            width={100}
            className="inline-block"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
