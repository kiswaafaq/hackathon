import Image from "next/image"; // Import the Next.js Image component
import styles from "../../../styles/FeaturedProducts.module.css";


interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  tag?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, tag }) => {
  return (
    <div className={styles.card}>
      {tag && (
        <span
          className={`${styles.tag} ${tag === "New" ? styles.new : styles.sale}`}
        >
          {tag}
        </span>
      )}
      {/* Use Next.js Image */}
      <Image 
        src={image} 
        alt={title} 
        className={styles.image} 
        width={200} 
        height={50} 
      />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
