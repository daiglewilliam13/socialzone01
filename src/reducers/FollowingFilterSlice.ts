import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface FollowingFilter {
    query: string
}

let initialState = {
    query: ""
} as FollowingFilter

const followingFilterSlice = createSlice({
    name: 'followingFilterSlice',
    initialState,
    reducers: {
        query: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        }
    },
})

export const { query } = followingFilterSlice.actions
export default followingFilterSlice.reducer;