import { createSlice } from '@reduxjs/toolkit';

const state = {
  bool: false,
  array: [],
  filter: []
};
const filterSlice = createSlice({
  name: 'FilterList',
  initialState: state,

  reducers: {
    filtering(state, { payload }) {
      state.filter[payload.idx] = payload.toAdd;
    },

    deleteData(state, { payload }) {

      state.array = state.array.filter((data) => data.id !== payload.id);
      state = {
        ...state,
        bool: payload.bool,
      };
    },

    addState(state, { payload }) {
      
      if (state.array.length !== 0) {
        if (!payload.data) return
        state.array.push(payload.data);
        state.bool = payload.bool;
        
        return;
      }
      return {
        ...state,
        bool: payload.bool,
        array: payload.array,
      };
    },

    addFilter(state, { payload }) {
      // state.array = payload.stateToCopy;
      const arr = payload.stateToCopy.filter((data) => {
        if (payload.toUpdate[0] && data.name !== payload.toUpdate[0])
          return false;
        if (payload.toUpdate[1] && data.category !== payload.toUpdate[1])
          return false;

        if (payload.toUpdate[2] && data.location !== payload.toUpdate[2])
          return false;
        return true;
      });

      return {
        ...state,
        array: arr,
        bool: payload.bool,
      };
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice;
