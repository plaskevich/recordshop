import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const propsSlice = createSlice({
  name: 'props',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, stopLoading } = propsSlice.actions;

export default propsSlice.reducer;
