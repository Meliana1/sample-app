// store.js

import {configureStore} from '@reduxjs/toolkit';
import imageReducer from './reducer/imageReducer';

const store = configureStore({
  reducer: {
    image: imageReducer,
    // Add other reducers here if needed
  },
});

export default store;
