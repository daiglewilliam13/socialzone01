import { combineReducers } from '@reduxjs/toolkit'
import authSlice from '../reducers/AuthSlice';
import sideNavSlice from '../reducers/SideNavSlice';

const rootReducer = combineReducers({
    authStatus: authSlice,
    sideNavStatus: sideNavSlice,
})

export default rootReducer