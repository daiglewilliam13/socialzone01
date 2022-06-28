import { combineReducers } from '@reduxjs/toolkit'
import authSlice from '../reducers/AuthSlice';
import sideNavSlice from '../reducers/SideNavSlice';
import followingFilterSlice from '../reducers/FollowingFilterSlice';

const rootReducer = combineReducers({
    authStatus: authSlice,
    sideNavStatus: sideNavSlice,
    followingFilter: followingFilterSlice
})

export default rootReducer