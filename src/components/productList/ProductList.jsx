import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtk/product/productSlice";

export const ProductList = ({ product }) => {
  const { id, url, name, quantity, price, category } = product;
  const dispatch = useDispatch();
  return (
    <div class="lws-productCard">
      <img class="lws-productImage" src={url} alt="product" />
      <div class="p-4 space-y-2">
        <h4 class="lws-productName">{name}</h4>
        <p class="lws-productCategory">{category}</p>
        <div class="flex items-center justify-between pb-2">
          <p class="productPrice">
            BDT <span class="lws-price">{price}</span>
          </p>
          <p class="productQuantity">
            QTY <span class="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          class="lws-btnAddToCart"
          onClick={() => quantity > 0 && dispatch(addToCart(id))}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
