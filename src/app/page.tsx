"use client";

import Navbar from "@/navbar/page";
import FeaturedProducts from "./components/FeaturedProducts";
import Image from "next/image";
import Footer from "./footer/page";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center text-4xl font-bold my-8">Welcome to My Store</h1>

      {/* Hero Section */}
      <div className="flex justify-center items-center w-full bg-white py-12">
        <Image
          src="/hero.jpg"
          alt="Hero Component Image"
          width={1200}
          height={400}
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Top Categories */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <Link href="/product" className="block cursor-pointer">
            <div className="cursor-pointer border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src="/category.jpg"
                  alt="Products"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Our Products</h3>
                <p className="text-gray-600">Explore our wide range of products.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
