import { configureStore, combineReducers } from "@reduxjs/toolkit"
import chatReducer from "../reducers/cart"
import userReducer from "../reducers/user"

const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
