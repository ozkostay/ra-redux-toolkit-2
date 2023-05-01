import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
}

export const starWarsSlice = createSlice({
  name: 'starWars',
  initialState,
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    }
  }
}) 

export const { setCount } = starWarsSlice.actions;
export default starWarsSlice.reducer;
