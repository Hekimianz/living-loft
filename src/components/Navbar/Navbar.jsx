import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <nav>
      <img src={logo} />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="store">Store</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
