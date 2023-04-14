import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";



export default store = configureStore({
    reducer:appSlice,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})