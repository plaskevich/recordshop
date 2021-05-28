import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    // email: '',
    // name: '',
    // shop: { id: '', name: '' },
    // role: '',
  },
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
