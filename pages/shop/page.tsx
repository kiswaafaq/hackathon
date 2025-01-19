import React, { useState } from 'react';
import FilterPanel from '@/components/FilterPanel/FilterPanel';
import RelatedProducts from '@/components/FilterPanel/RelatedProducts';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
}

const categories = ['Chairs', 'Sofas', 'Tables'];

const allProducts: Product[] = [
  { id: 1, name: 'Chair', category: 'Furniture', description: 'A comfortable chair ', price: 1200 },
  { id: 2, name: 'Sofas', category: 'Furniture', description: 'A comfortable sofa', price: 15 },
  // Add more products here
];

const ShopPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);

  const handleFilter = (category: string) => {
    const filtered = allProducts.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <FilterPanel categories={categories} onFilter={handleFilter} />
      <RelatedProducts products={filteredProducts} />
    </div>
  );
};

export default ShopPage;
