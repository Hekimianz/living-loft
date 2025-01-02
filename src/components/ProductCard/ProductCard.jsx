import styles from "./productCard.module.css";
import star from "../../assets/star.png";

const ProductCard = ({ title, images, price, rating, id }) => {
  return (
    <div className={styles.productCard}>
      <img className={styles.image} src={images[0]} />
      <h2 className={styles.title}>{title}</h2>
      <div>
        <span className={styles.price}>${price}</span>
        <span className={styles.rating}>
          <img src={star} />
          {rating}
        </span>
      </div>
      <button className={styles.btn}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
