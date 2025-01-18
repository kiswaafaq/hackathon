"use client";

import Navbar from "@/navbar/page";
import FeaturedProducts from "./components/FeaturedProducts";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Footer from "./footer/page";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  isNew?: boolean;
  isOnSale?: boolean;
}

interface RawProduct {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  image?: { asset: { url: string } };
  badge?: string;
}

const categories = [
  {
    id: "wing-chair",
    name: "Wing Chair",
    image: "/wing-chair.jpg",
    products: 3584,
  },
  {
    id: "wooden-chair",
    name: "Wooden Chair",
    image: "/wooden-chair.jpg",
    products: 157,
  },
  {
    id: "desk-chair",
    name: "Desk Chair",
    image: "/desk-chair.jpg",
    products: 154,
  },
];

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  const fetchProducts = async () => {
    const query = `*[_type == "products"]{
      _id,
      title,
      price,
      "originalPrice": priceWithoutDiscount,
      "imageUrl": image.asset->url,
      badge
    }`;

    try {
      const data: RawProduct[] = await client.fetch(query);
      const formattedData = data
        .filter((product) => product.title && product.price) // Ensure required fields exist
        .map((product) => ({
          id: product._id,
          name: product.title,
          price: product.price,
          originalPrice: product.priceWithoutDiscount,
          imageUrl: product.image?.asset?.url || "/placeholder.jpg", // Default image if missing
          isNew: product.badge === "New",
          isOnSale: product.badge === "Sale",
        }));
      setProducts(formattedData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategoryClick = (id: string) => {
    router.push(`/category/${id}`);
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-center text-4xl font-bold my-8">Welcome to My Store</h1>

      {/* Products Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

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

      {/* Partnerships Section */}
      <div className="flex justify-center items-center w-full bg-white py-12">
        <Image
          src="/partnership.jpg"
          alt="Partnership Image"
          width={1200}
          height={400}
          style={{ objectFit: "contain" }}
        />
      </div>

      <FeaturedProducts />

      {/* Top Categories Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="cursor-pointer border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.products} Products</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => (
  <Link href={`/product/${product.id}`} className="block">
    <div className="border rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden relative">
      {product.isNew && (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          New
        </span>
      )}
      {product.isOnSale && (
        <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
          Sale
        </span>
      )}
      <div className="relative h-64 w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium truncate mb-2">{product.name}</h3>
        <div className="flex items-center">
          <p className="text-gray-700 mr-2 bg-gray-100 px-3 py-1 rounded-md">
            ${product.price}
          </p>
          {product.originalPrice && (
            <p className="text-gray-500 line-through">${product.originalPrice}</p>
          )}
        </div>
      </div>
    </div>
  </Link>
);

export default Home;
