"use client";

import Navbar from "@/navbar/page";
import FeaturedProducts from "./components/FeaturedProducts";
import Image from "next/image";
import Footer from "./footer/page";
import Link from "next/link";
import UserProfile from "@/components/UserProfile/UserProfile";
import Notification from "@/components/notification/notification";
import AnalyticDashboard from "@/components/dashboard/AnalyticDashboard";
import { useState, FormEvent } from "react";

const Home = () => {
    const [user, setUser] = useState(null);
    const [signupError, setSignupError] = useState<string | null>(null);

    const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            name: { value: string };
            email: { value: string };
            password: { value: string };
        };

        const name = target.name.value;
        const email = target.email.value;
        const password = target.password.value;

        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
                setSignupError(null);
                console.log("Signup successful!", userData);
            } else {
                const errorData = await response.json();
                setSignupError(errorData.message || "Signup failed.");
                console.error("Signup failed:", errorData);
            }
        } catch (error) {
            setSignupError("An unexpected error occurred.");
            console.error("Signup error:", error);
        }
    };

    return (
        <div className="bg-gray-50">
            <Navbar />

            <div className="header flex justify-between items-center p-6 bg-indigo-600 text-white">
                <div></div>
                <div>
                    <UserProfile user={user} />
                </div>
            </div>

            <div className="hero flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
                <h1 className="text-4xl font-bold mb-4">Welcome to Comforty</h1>
                <p className="text-lg mb-6">
                    Discover the perfect furniture for your space with free shipping over $50.
                </p>
                <Image src="/hero.jpg" width={500} height={300} priority alt="Hero" />
            </div>

            <div className="container mx-auto my-12 px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Signup</h2>
                {signupError && <p className="text-red-500 text-center">{signupError}</p>}
                <form onSubmit={handleSignup} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="johndoe@example.com"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Signup
                    </button>
                </form>
            </div>

            <div className="container mx-auto my-12">
                <FeaturedProducts />
            </div>

            <div className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link href="/product" className="block">
                        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <div className="relative h-64 w-full">
                                <Image src="/category.jpg" alt="Products" fill className="object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Our Products</h3>
                                <p className="text-gray-600">Explore our wide range of products.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <Notification />
            </div>

            <div className="container mx-auto px-6 py-12">
                <AnalyticDashboard sales={10000} traffic={5000} />
            </div>

            <Footer />
        </div>
    );
};

export default Home;
