import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filter-slice';
import shopSlice from './shoplist-slice';

const store = configureStore({
  reducer: { shopLists: shopSlice.reducer, filterLists: filterSlice.reducer },
});

export default store;
