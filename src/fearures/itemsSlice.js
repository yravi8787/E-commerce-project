import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addtoCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((i) => i.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
    clearCart(state) {
      state.items = []
    },
    deleteItem(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    }
  },
});

export const { addtoCart, removeFromCart, clearCart, deleteItem } = itemsSlice.actions;

export const getItems = (state) => {
  return state.items.items;
};

export const getItemByID = (state, id) => {
  return state.items.items.find((item) => item.id === Number(id));
};

export default itemsSlice.reducer;
