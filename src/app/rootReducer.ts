import { combineReducers } from '@reduxjs/toolkit'
import { userReducer } from '../reducers/user'

const rootReducer = combineReducers({
    userReducer
})
export default rootReducer