import React from "react";
import { Bill } from "../../components/bill/Bill";
import { CartItem } from "../../components/cartItem/CartItem";
import { Navbar } from "../../components/navbar/Navbar";

export const Cart = () => {
  return (
    <div>
      <Navbar />
      <main class="py-16">
        <div class="container 2xl:px-8 px-2 mx-auto">
          <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div class="cartListContainer">
            <CartItem />
            <Bill />
          </div>
        </div>
      </main>
    </div>
  );
};
