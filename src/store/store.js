import { configureStore } from "@reduxjs/toolkit";
import starWarsSlice from "./starWarsSlice";

export const store = configureStore({
    reducer: {
      starWars: starWarsSlice,
    }
  }) 
