import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import icon from "../../assets/shopping.png";
const CartBtn = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/store" && (
        <Link to="cart">
          <button id="cartBtn">
            <img src={icon} />
          </button>
        </Link>
      )}
    </>
  );
};

export default CartBtn;
