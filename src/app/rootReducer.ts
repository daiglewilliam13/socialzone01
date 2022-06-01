import { combineReducers } from '@reduxjs/toolkit'
import userReducer from '../reducers/AuthSlice';
const rootReducer = combineReducers({
    user: userReducer
})
export default rootReducer