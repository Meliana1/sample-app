// features/counterSlice.js

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const imageReducer = createSlice({
  name: 'imageReducer',
  initialState: {
    imageData: null,
    showLoader:false
  },
  reducers: {
    setImageData(state,action:PayloadAction<any>) {
      state.imageData = action.payload
    },
    setShowLoader(state, action:PayloadAction<boolean>){
      state.showLoader = action.payload
    }
  },
});

export const { setImageData, setShowLoader } = imageReducer.actions;

export default imageReducer.reducer;
