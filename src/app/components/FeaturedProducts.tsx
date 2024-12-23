import styles from "../../../styles/FeaturedProducts.module.css";
import ProductCard from "./ProductCard";

interface Product {
  image: string;
  title: string;
  price: number;
  tag?: string;
}

const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    { image: "/chair1.jpeg", title: "White Chair", price: 20, tag: "New" },
    { image: "/chair2.jpeg", title: "Pink Tufted Chair", price: 50, tag: "Sale" },
    { image: "/chair3.jpeg", title: "Orange Chair", price: 20 },
    { image: "/chair4.jpeg", title: "White Wing Chair", price: 35 },
  ];

  return (
    <section className={styles.container}>
      <h2>Featured Products</h2>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
