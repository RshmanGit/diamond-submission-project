import { configureStore } from '@reduxjs/toolkit'
import AuthTokenReducer from './reducers/AuthToken'

export default configureStore({
  reducer: {
      authToken: AuthTokenReducer
  }
})