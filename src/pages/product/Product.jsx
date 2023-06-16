import React from "react";
import { useSelector } from "react-redux";
import { AddProduct } from "../../components/addProduct/AddProduct";
import { Navbar } from "../../components/navbar/Navbar";
import { ProductList } from "../../components/productList/ProductList";

export const Product = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <div>
      <Navbar />
      <main class="py-16">
        <div class="productWrapper">
          <div class="productContainer" id="lws-productContainer">
            {products.map((product) => {
              return <ProductList product={product} />;
            })}
          </div>
          <AddProduct />
        </div>
      </main>
    </div>
  );
};
