import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token'),
  // id: null,
  // email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      // state.id = id;
      // state.email = email;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
