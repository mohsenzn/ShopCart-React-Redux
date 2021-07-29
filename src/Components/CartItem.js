import "./CartItem.css";
import formatCurrency from "format-currency";
import { useDispatch } from "react-redux";
import { removeItem } from "./Redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeItems = (id) => {
    dispatch(removeItem(item._id));
  };
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <li className="CartItem__item">
      <img src={item.image} alt="" />
      <div>
        {item.name} {formatCurrency(`${item.price}`, opts)}
      </div>
      <button className="CartItem__button" onClick={removeItems}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;
