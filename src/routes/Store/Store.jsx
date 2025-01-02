import { useEffect, useState } from "react";
import styles from "./store.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";

const Store = ({ cart, setCart }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("name");
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const [furniture, home, kitchen] = await Promise.all([
          fetch("https://dummyjson.com/products/category/furniture").then(
            (res) => res.json()
          ),
          fetch("https://dummyjson.com/products/category/home-decoration").then(
            (res) => res.json()
          ),
          fetch(
            "https://dummyjson.com/products/category/kitchen-accessories?limit=10"
          ).then((res) => res.json()),
        ]);
        const allProducts = [
          ...furniture.products,
          ...home.products,
          ...kitchen.products,
        ];

        // Set the combined products to the filtered state
        setFiltered(allProducts);
        setData({
          furniture,
          home,
          kitchen,
        });
      } catch (error) {
        console.error(`Error fetching categories: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (category !== "all") {
      setFiltered([...data[category]?.products]);
    } else if (
      category === "all" &&
      data.furniture &&
      data.home &&
      data.kitchen
    ) {
      setFiltered([
        ...data.furniture.products,
        ...data.home.products,
        ...data.kitchen.products,
      ]);
    }
    if (sort === "name") {
      setFiltered((prev) =>
        prev.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }

          return 0;
        })
      );
    } else if (sort === "price") {
      setFiltered((prev) =>
        prev.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }

          return 0;
        })
      );
    } else if (sort === "rating") {
      setFiltered((prev) =>
        prev.sort((a, b) => {
          if (a.rating < b.rating) {
            return -1;
          }
          if (a.rating > b.rating) {
            return 1;
          }

          return 0;
        })
      );
    }
  }, [sort, category, data]);

  return (
    <div className="main--cont">
      {loading && <span className={styles.loader}></span>}
      {loading || (
        <section className={styles.storeMain}>
          <section className={styles.bar}>
            <label htmlFor="category">Category: </label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="all">All Categories</option>
              <option value="kitchen">Kitchen Accessories</option>
              <option value="home">Home Decor</option>
              <option value="furniture">Furniture</option>
            </select>
            <label htmlFor="sort">Sort by: </label>
            <select
              name="sort"
              id="sort"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </section>
          <section className={styles.productGrid}>
            {filtered?.map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  title={product.title}
                  images={product.images}
                  price={product.price}
                  rating={product.rating}
                  id={product.id}
                  setCart={setCart}
                  cart={cart}
                  thumbnail={product.thumbnail}
                />
              );
            })}
          </section>
        </section>
      )}
    </div>
  );
};

export default Store;
