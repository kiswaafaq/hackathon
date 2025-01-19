"use client";

import Navbar from "@/navbar/page";
import FeaturedProducts from "./components/FeaturedProducts";
import Image from "next/image";
import Footer from "./footer/page";
import Link from "next/link";
import UserProfile from "@/components/UserProfile/UserProfile";
import Notification from "@/components/notification/notification";
import AnalyticDashboard from "@/components/dashboard/AnalyticDashboard";

const Home = () => {
  const mockUser = { name: "John Doe", email: "john.doe@example.com" };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="header flex justify-between items-center p-6 bg-indigo-600 text-white">
        <div className="flex space-x-4">
          
         
        </div>
        <div>
          <UserProfile user={mockUser} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to Comforty</h1>
        <p className="text-lg mb-6">
          Discover the perfect furniture for your space with free shipping over $50.
        </p>
        <Image
              src="/hero.jpg"
              width={500}
              height={300}
             priority 
            alt="Hero"
/>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto my-12">
        <FeaturedProducts />
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/product" className="block">
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="relative h-64 w-full">
                <Image
                  src="/category.jpg"
                  alt="Products"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Our Products</h3>
                <p className="text-gray-600">Explore our wide range of products.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Notification Center */}
      <div className="container mx-auto px-6">
        <Notification />
      </div>

      {/* Analytics Dashboard */}
      <div className="container mx-auto px-6 py-12">
        <AnalyticDashboard sales={10000} traffic={5000} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
