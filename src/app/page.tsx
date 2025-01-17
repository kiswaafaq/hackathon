"use client";
import Navbar from "@/src/navbar/page"; // Adjust path if needed
import FeaturedProducts from "@/src/app/components/FeaturedProducts"; // Adjust path if needed
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import productsData from 'data/products.json'; // Ensure correct path to your data
import Footer from "./footer/page";

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
  const router = useRouter();

  const handleCategoryClick = (id: string) => {
    router.push(`/category/${id}`); // Adjust route if needed
  };

  return (
    <div>
      <Navbar />

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
        <h1 className="text-3xl font-bold mb-8 text-center">Top Categories</h1>
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
                <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                <p className="text-gray-600">{category.products} Products</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsData.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
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
        <h2 className="text-xl font-medium truncate mb-2">{product.name}</h2>
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
