import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import propsReducer from './propsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    props: propsReducer,
  },
});
