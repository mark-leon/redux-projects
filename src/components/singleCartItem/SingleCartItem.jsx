import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeProduct,
  subProduct,
} from "../../rtk/product/productSlice";

export const SingleCartItem = ({ cart }) => {
  const { id, url, name, quantity, price, category, count, cartPrice } = cart;
  const dispatch = useDispatch();
  return (
    <div class="cartCard">
      <div class="flex items-center col-span-6 space-x-6">
        <img class="lws-cartImage" src={url} alt="product" />

        <div class="space-y-2">
          <h4 class="lws-cartName">{name}</h4>
          <p class="lws-cartCategory">{category}</p>
          <p>
            BDT <span class="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div class="flex items-center space-x-4">
          <button
            class="lws-incrementQuantity"
            onClick={() => quantity > 0 && dispatch(addToCart(id))}
          >
            <i class="text-lg fa-solid fa-plus"></i>
          </button>
          <span class="lws-cartQuantity">{count}</span>
          <button
            class="lws-decrementQuantity"
            onClick={() => count > 0 && dispatch(subProduct(id))}
          >
            <i class="text-lg fa-solid fa-minus"></i>
          </button>
        </div>

        <p class="text-lg font-bold">
          BDT <span class="lws-calculatedPrice">{cartPrice}</span>
        </p>
      </div>

      <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          class="lws-removeFromCart"
          onClick={() => dispatch(removeProduct(id))}
        >
          <i class="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};
