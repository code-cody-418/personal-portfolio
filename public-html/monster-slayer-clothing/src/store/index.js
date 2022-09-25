// import misquotes from "./misquote"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

// const reducer =  combineReducers({misquotes})
const reducer =  combineReducers({})

export const store = configureStore({reducer})
