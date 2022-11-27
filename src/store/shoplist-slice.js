import { createSlice, current } from '@reduxjs/toolkit';
import { data } from 'autoprefixer';

const state = {
  bool: false,
  array: [],
};

const shopSlice = createSlice({
  name: 'shopList',
  initialState: state,

  reducers: {
    refreshState(state, { payload }) {
      state.array = state.array.filter((data) => data.id !== payload);
    },

    addShop(state, { payload }) {
      state.array.push(payload.data);
    },

    addToState(state, { payload }) {
      if (state.array.length === 0) {
        payload.array.forEach((data) => state.array.push(data));
      } else {
        state = {
          ...state,
          array: payload,
          bool: payload.bool,
        };
      }
    },
  },
});

export const shopActions = shopSlice.actions;

export default shopSlice;
