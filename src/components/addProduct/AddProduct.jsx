import React, { useState } from "react";
import { addProduct } from "../../rtk/product/productSlice";
import { useDispatch } from "react-redux";

export const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const clearState = () => {
    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
    setUrl("");
  };
  return (
    <div>
      <div class="formContainer">
        <h4 class="formTitle">Add New Product</h4>
        <form class="space-y-4 text-[#534F4F]" id="lws-addProductForm">
          <div class="space-y-2">
            <label for="lws-inputName">Product Name</label>
            <input
              class="addProductInput"
              id="lws-inputName"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div class="space-y-2">
            <label for="lws-inputCategory">Category</label>
            <input
              class="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div class="space-y-2">
            <label for="lws-inputImage">Image Url</label>
            <input
              class="addProductInput"
              id="lws-inputImage"
              type="text"
              required
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div class="grid grid-cols-2 gap-8 pb-4">
            <div class="space-y-2">
              <label for="ws-inputPrice">Price</label>
              <input
                class="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div class="space-y-2">
              <label for="lws-inputQuantity">Quantity</label>
              <input
                class="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            id="lws-inputSubmit"
            disabled={!name || !url || !category || !price || !quantity}
            class="submit"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addProduct({ name, url, category, price, quantity }));
              clearState();
            }}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};
