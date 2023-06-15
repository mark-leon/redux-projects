import React from "react";

export const AddProduct = () => {
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
            />
          </div>

          <div class="space-y-2">
            <label for="lws-inputCategory">Category</label>
            <input
              class="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
            />
          </div>

          <div class="space-y-2">
            <label for="lws-inputImage">Image Url</label>
            <input
              class="addProductInput"
              id="lws-inputImage"
              type="text"
              required
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
              />
            </div>

            <div class="space-y-2">
              <label for="lws-inputQuantity">Quantity</label>
              <input
                class="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
              />
            </div>
          </div>

          <button type="submit" id="lws-inputSubmit" class="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};