import { combineReducers } from '@reduxjs/toolkit'
import authSlice from '../reducers/AuthSlice';
const rootReducer = combineReducers({
    authStatus: authSlice
})
export default rootReducer