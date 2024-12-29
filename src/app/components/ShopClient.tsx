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
    // Your product listings here
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