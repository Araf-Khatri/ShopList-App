import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filter-slice';
import shopSlice from './shoplist-slice';

// A store that has all states
// which can be accessible from one place i.e.store 
// we use Provider from 'react-redux' to make it accessible to
// Component inside a Provider

const store = configureStore({
  reducer: { shopLists: shopSlice.reducer, filterLists: filterSlice.reducer },
});

export default store;
