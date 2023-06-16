import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 9.3,
      url: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
      name: "Spring and summershoes",
      category: "Mens shoes",
      price: 400,
      quantity: 10,
    },
  ],
  cart: [],
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
        price: parseInt(action.payload.price),
        quantity: parseInt(action.payload.quantity),
      };
      state.products.push(product);
    },
    addToCart: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      product.quantity -= 1;
      const cartItem = state.cart.find((item) => item.id === product.id);
      if (cartItem) {
        cartItem.count++;
        cartItem.quantity--;
        cartItem.cartPrice = cartItem.price * cartItem.count;
      } else {
        var newItem = { ...product };
        newItem.count = 1;
        newItem.cartPrice = newItem.price * newItem.count;
        state.cart.push(newItem);
      }
      state.totalPrice += product.price;
      state.totalItem += 1;
    },
    subProduct: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      product.quantity += 1;
      const cartItem = state.cart.find((item) => item.id === product.id);
      cartItem.count--;
      cartItem.quantity++;
      cartItem.cartPrice = cartItem.price * cartItem.count;
      state.totalPrice -= cartItem.price;
      state.totalItem -= 1;
    },
    removeProduct: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      const cartItem = state.cart.find((item) => item.id === product.id);
      product.quantity += cartItem.count;
      state.totalPrice -= cartItem.price * cartItem.count;
      state.totalItem -= cartItem.count;
      state.cart = state.cart.filter((item) => item.id !== cartItem.id);
    },
  },
});

export const { addToCart, removeProduct, addProduct, subProduct } =
  productSlice.actions;

export default productSlice.reducer;
