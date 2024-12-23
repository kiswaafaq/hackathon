"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/src/navbar/page";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import productsData from "data/products.json";
import Footer from "../../footer/page";

interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
    description: string;
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null);

    // Unwrap the params promise to retrieve the product ID
    useEffect(() => {
        params.then(({ id }) => {
            const foundProduct = productsData.find((p: Product) => p.id === id);
            if (!foundProduct) {
                notFound();
            } else {
                setProduct(foundProduct);
            }
        });
    }, [params]);

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
        return <div>Loading...</div>; // Display a loading state while retrieving the product
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
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="100vw"
                            priority
                        />
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <p className="text-lg font-bold mb-2">${product.price}</p>
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
