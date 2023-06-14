import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Asus Vivobook X515MA",
      quantity: 20,
      price: 35500,
      count: 0,
    },
    {
      id: 2,
      name: "Dell E1916HV 18.5 Inch",
      quantity: 35,
      price: 9300,
      count: 0,
    },
    {
      id: 3,
      name: "Canon Eos 4000D 18MP",
      quantity: 72,
      price: 36500,
      count: 0,
    },
  ],
  totalItem: 0,
  totalPrice: 0,
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addproduct: (state, action) => {
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

export const { addproduct, removeproduct } = productSlice.actions;

export default productSlice.reducer;
