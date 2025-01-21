"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Navbar from "@/navbar/page";
import Footer from "../footer/page";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: { asset: { _ref: string } }): string {
  return builder.image(source).url();
}

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
  image?: { asset: { _ref: string } };
  badge?: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const fetchProducts = async () => {
    const query = `*[_type == "products"]{
      _id,
      title,
      price,
      "originalPrice": priceWithoutDiscount,
      image,
      badge
    }`;

    try {
      const data = await client.fetch<RawProduct[]>(query);
      const formattedProducts = data.map((product) => ({
        id: product._id,
        name: product.title,
        price: product.price,
        originalPrice: product.priceWithoutDiscount,
        imageUrl: product.image ? urlFor(product.image) : "/placeholder.jpg",
        isNew: product.badge === "New",
        isOnSale: product.badge === "Sale",
      }));
      setProducts(formattedProducts);
      setFilteredProducts(formattedProducts);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filterProducts(query, selectedCategory);
  };

  // Handle category change
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterProducts(searchQuery, category);
  };

  // Filter products based on search query and selected category
  const filterProducts = (query: string, category: string) => {
    let filtered = products;

    if (query) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query)
      );
    }

    if (category && category !== "all") {
      // Assuming you have a way to categorize products, adjust this logic accordingly
      filtered = filtered.filter(product => product.isNew && category === "new" || product.isOnSale && category === "sale");
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Navbar />
      <h1>Shop page with search bar and filter page!</h1>
      {/* Search Bar */}
      <div className="container mx-auto p-8">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border rounded-lg p-2 w-full mb-4"
        />
        
        {/* Category Filter */}
        <select value={selectedCategory} onChange={handleCategoryChange} className="border rounded-lg p-2 mb-4">
          <option value="all">All Categories</option>
          <option value="new">New Arrivals</option>
          <option value="sale">On Sale</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      <h1 className="text-center text-4xl font-bold my-8">Our Products</h1>

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
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
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
