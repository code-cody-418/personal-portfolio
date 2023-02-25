/*
Store keeps the state of the app
*/

import { configureStore } from "@reduxjs/toolkit";
import {accountItemsSlice} from './Account/accountItemsSlice.js'

export const store = configureStore({
    reducer: {
        accountItems: accountItemsSlice.reducer 
    }
})