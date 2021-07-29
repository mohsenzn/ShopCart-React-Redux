import React from "react";
import "./ProductCard.css";
import formatCurrency from "format-currency";
import Rating from "./Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/cartSlice";

const ProductCard = ({ product }) => {
  let opts = { format: "%s%v", symbol: "€" };
  const dispatch = useDispatch();
  const addToCarts = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <h4>{product.name}</h4>
        <div className="ProductCard__price">
          <h5>{formatCurrency(`${product.price}`, opts)}</h5>
        </div>
        <div className="ProductCard__Rateing">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
        <button className="ProductCard__button" onClick={addToCarts}>
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
