import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // products: [
  //   {
  //     id: 1,
  //     name: "Asus Vivobook X515MA",
  //     quantity: 20,
  //     price: 35500,
  //     count: 0,
  //   },
  // ],
  products: [],
  totalItem: 0,
  totalPrice: 0,
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = {
        id: Math.floor(Math.random() * 100),
        url: action.payload.url,
        name: action.payload.name,
        category: action.payload.category,
        amount: parseInt(action.payload.amount),
        quantity: parseInt(action.payload.quantity),
      };
      state.products.push(product);
    },
    addToCart: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      product.quantity -= 1;
      product.count += 1;
      state.totalPrice += product.price;
      state.totalItem += 1;
    },
    removeproduct: (state, action) => {
      //Never used filter here
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      product.quantity += 1;
      product.count -= 1;
      state.totalPrice -= product.price;
      state.totalItem -= 1;
    },
  },
});

export const { addToCart, removeproduct, addProduct } = productSlice.actions;

export default productSlice.reducer;
