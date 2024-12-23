// app/page.tsx
"use client";

import Navbar from "@/src/navbar/page";
import FeaturedProducts from "@/src/app/components/FeaturedProducts";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from 'next/link';
import productsData from 'data/products.json';
console.log("Products Data:", productsData);

interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
    isNew?: boolean;
    isOnSale?: boolean;
}

const categories = [
    {
        id: 'wing-chair',
        name: 'Wing Chair',
        image: '/wing-chair.jpg',
        height: 400,
        width: 200,
        products: 3584,
    },
    {
        id: 'wooden-chair',
        name: 'Wooden Chair',
        image: '/wooden-chair.jpg',
        height: 700,
        width: 200,
        products: 157,
    },
    {
        id: 'desk-chair',
        name: 'Desk Chair',
        image: '/desk-chair.jpg',
        height: 600,
        width: 100,
        products: 154,
    },
];

export default function Home() {
    const router = useRouter();

    const handleCategoryClick = (id: string) => {
        router.push(`/category/${id}`);
    };

    return (
        <div>
            <Navbar />

            {/* Hero Section */}
            <div className="flex justify-center items-center w-full bg-white">
                <Image
                    src="/pictures/herocomponent.jpg"
                    alt="Hero Component Image"
                    width={700}
                    height={300}
                    style={{ objectFit: 'contain' }} // Use style for objectFit
                />
            </div>

            <div className="my-8"></div>

            {/* Partnerships Section */}
            <div className="flex justify-center items-center w-full bg-white">
                <Image
                    src="/pictures/partnerships.jpg"
                    alt="Partnership Image"
                    width={700}
                    height={300}
                    style={{ objectFit: 'contain' }} // Use style for objectFit
                />
            </div>

            <FeaturedProducts />

            {/* Top Categories Section */}
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-6">Top Categories</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            onClick={() => handleCategoryClick(category.id)}
                            className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-lg"
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                width={700}
                                height={400}
                                style={{ objectFit: 'cover' }} // Use style for objectFit
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{category.name}</h2>
                                <p className="text-gray-500">{category.products} Products</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4 text-center">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {productsData.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const ProductCard = ({ product }: { product: Product }) => (
    <Link href={`/product/${product.id}`} className="block">
    <div className="border rounded-lg shadow-sm overflow-hidden relative">
        {product.isNew && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
        )}
        {product.isOnSale && (
            <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">Sale</span>
        )}
        <div className="relative h-64 w-full">
            <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className="p-4">
            <h2 className="text-lg font-medium truncate">{product.name}</h2>
            <div className="flex items-center">
                <p className="text-gray-700 mr-2">${product.price}</p>
                {product.originalPrice && <p className="text-gray-500 line-through">${product.originalPrice}</p>}
            </div>
        </div>
    </div>
</Link>
);