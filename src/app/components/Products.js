import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products'; // Correct import path
import Image from 'next/image';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts();
      setProducts(productData);
    };

    getProducts();
  }, []); // Empty dependency array ensures this runs only once

  if (!products) {
    return <div>Loading products...</div>; // Display a loading message
  }

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product._id}> {/* Use a unique key from Sanity */}
            <h2>{product.name}</h2>
            <Image src={product.imageUrl} alt={product.name} width="200" />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;