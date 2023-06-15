import React from "react";
import { useDispatch } from "react-redux";
import { addproduct } from "../../rtk/product/productSlice";

export const ProductList = ({ product }) => {
  // const { id, name, quantity, price } = product;
  const dispatch = useDispatch();
  return (
    // <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
    //   <div class="flex justify-between px-4 items-center">
    //     <div class="text-lg font-semibold">
    //       <p>
    //         {name} {quantity}
    //       </p>
    //       <p class="text-gray-400 text-base">Tk {price}</p>
    //     </div>
    //     <div class="text-lg font-semibold">
    //       <button
    //         class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
    //         onClick={() => quantity > 0 && dispatch(addproduct(id))}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           class="h-6 w-6"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div class="productContainer" id="lws-productContainer">
      <div class="lws-productCard">
        <img
          class="lws-productImage"
          src="https://i.dummyjson.com/data/products/59/thumbnail.jpg"
          alt="product"
        />
        <div class="p-4 space-y-2">
          <h4 class="lws-productName">Spring and summershoes</h4>
          <p class="lws-productCategory">Mens shoes</p>
          <div class="flex items-center justify-between pb-2">
            <p class="productPrice">
              BDT <span class="lws-price">400</span>
            </p>
            <p class="productQuantity">
              QTY <span class="lws-quantity">10</span>
            </p>
          </div>
          <button class="lws-btnAddToCart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
