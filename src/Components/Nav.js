import "./Nav.css";
import { useDispatch } from "react-redux";
import { showHideCart } from "./Redux/cartSlice";

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="nav__left">Store</div>
      <div className="nav__middle">
        <div className="input__wrapper">
          <input type="text" />
          <i className="fas fa-search" />
        </div>
      </div>
      <div className="nav__right">
        <div className="cart__icon">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            onClick={() => dispatch(showHideCart())}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
