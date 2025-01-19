"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/navbar/page";
import Image from "next/image";
import { notFound, useRouter, useParams } from "next/navigation";
import Footer from "../../footer/page";

interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
    description: string;
}

export default function ProductPage() {
    const router = useRouter();
    const params = useParams(); // Use the `useParams` hook to retrieve route parameters
    const id = params?.id; // Extract the `id` parameter safely
    const [product, setProduct] = useState<Product | null>(null);

    // Fetch product data from the API
    const fetchProduct = async (id: string) => {
        try {
            const response = await fetch(`/api/products/${id}`); // Replace with your API endpoint
            if (!response.ok) {
                notFound();
            } else {
                const data: Product = await response.json();
                setProduct(data);
            }
        } catch (error) {
            console.error("Error fetching product data:", error);
            notFound();
        }
    };

    useEffect(() => {
        if (id) {
            fetchProduct(id); // Use the product ID from params
        }
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const productIndex = cart.findIndex((item: Product) => item.id === product.id);

            // Update quantity if the product is already in the cart
            if (productIndex > -1) {
                cart[productIndex].quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));

            // Redirect to the cart page
            router.push("/cart");
        }
    };

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                {/* Add a loading spinner */}
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="relative aspect-square md:aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            layout="responsive"
                            width={500} // Set a base width
                            height={500} // Set a base height
                            priority
                            objectFit="cover"
                        />
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <p className="text-lg font-bold mb-2">${product.price}</p>
                        {product.originalPrice && (
                            <p className="line-through text-gray-500 text-sm mb-2">
                                ${product.originalPrice}
                            </p>
                        )}
                        <p className="text-gray-700 mb-6">{product.description}</p>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
