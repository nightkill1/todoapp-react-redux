import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const store = configureStore({
    reducer: reducer,
})

export default store;
// connect store to react app 