import React from "react";
import { useSelector } from "react-redux";
import { SingleCartItem } from "../singleCartItem/SingleCartItem";

export const CartItem = () => {
  const cart = useSelector((state) => state.product.cart);
  return (
    <div class="space-y-6">
      {cart?.map((item) => {
        if (item) {
          return <SingleCartItem cart={item} />;
        } else {
          return <h2>No Items</h2>;
        }
      })}
    </div>
  );
};
