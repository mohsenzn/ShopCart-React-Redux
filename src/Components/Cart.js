import "./Cart.css";
import formatCurrency from "format-currency";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";

import { showHideCart } from "./Redux/cartSlice";

const Cart = () => {
  let opts = { format: "%s%v", symbol: "€" };
  const showCart = useSelector((state) => state.carts.showCart);
  const cartItems = useSelector((state) => state.carts.cartItems);
  const dispatch = useDispatch();

  return (
    <>
      {showCart && (
        <div className="cart__wrapper">
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={() => dispatch(showHideCart())}
            ></i>
          </div>
          <div className="cart__innerWrapper">
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="Cart__cartTotal">
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce((amount, item) => item.price + amount, 0),
                opts
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
