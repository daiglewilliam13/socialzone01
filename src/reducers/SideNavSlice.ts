import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../app/store';


let initialState = {
    expanded: false
}

const sideNavSlice = createSlice({
    name: 'SideNavSlice',
    initialState,
    reducers: {
        expand: (state, action)=>{
            state.expanded=action.payload;
        },
        collapse: (state, action)=>{
            state.expanded=action.payload;
        }
    },
})

export const {expand, collapse} = sideNavSlice.actions
export default sideNavSlice.reducer;