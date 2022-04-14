import { configureStore } from '@reduxjs/toolkit'
import AuthTokenReducer from './reducers/AuthToken'
import ValidityReducer from './reducers/Validity'

export default configureStore({
  reducer: {
      authToken: AuthTokenReducer,
      validity: ValidityReducer
  }
})