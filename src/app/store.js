import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../slice/cartSlice'

export default configureStore({
  reducer: {
    cartItemManager: cartSlice.reducer
  }
})