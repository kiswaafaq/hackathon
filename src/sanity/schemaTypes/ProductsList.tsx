import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { client } from '../lib/client';

interface Product {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "product"] {
        name,
        price,
        description,
        "imageUrl": image.asset->url
      }`;

      const data = await client.fetch(query);
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product, index) => (
          <div key={index}>
            <h2>{product.name}</h2>
            {product.imageUrl && (
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
              />
            )}
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
