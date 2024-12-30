'use client';

import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import Footer from '../footer/page';
import Navbar from "@/src/navbar/page";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ShopClient = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "White Wooden Chair",
      price: 20,
      image: "/images/white-chair.jpeg",
    },
    {
      id: 2,
      name: "Pink Velvet Chair",
      price: 30,
      image: "/images/pink-velvet.jpeg",
    },
    {
      id: 3,
      name: "Orange Chair",
      price: 20,
      image: "/images/orange-chair.jpeg",
    },
    {
      id: 4,
      name: "White Tufted Chair",
      price: 20,
      image: "/images/white-tuf.jpeg",
    },
    {
      id: 5,
      name: "Brown Swivel Chair",
      price: 20,
      image: "/images/brown-sw.jpeg",
    },
    {
      id: 6,
      name: "Brown Upholstered Chair",
      price: 20,
      image: "/images/brown-up.jpeg",
    },
    {
      id: 7,
      name: "Black Chair with Pillow",
      price: 20,
      image: "/images/black-chair.jpeg",
    },
    {
      id: 8,
      name: "Simple White Chair",
      price: 20,
      image: "/images/white-chair.jpeg",
    },
  ];

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
      <Navbar />
      <h1>Shop Page</h1>
      <ProductGrid products={products} addToCart={addToCart} />
      <Footer />
      {cart.length > 0 && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h2>Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ShopClient;
