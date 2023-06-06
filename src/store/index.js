import {configureStore} from "@reduxjs/toolkit";
import exchangeReducer from "./exchange/exchange";
const store = configureStore({
    reducer:{
        exchange:exchangeReducer,
    }
})
export default store;