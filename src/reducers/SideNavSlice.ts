import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface sideNavStatus {
    expanded: string
}

let initialState: sideNavStatus = {
    expanded: "false"
} 

const sideNavSlice = createSlice({
    name: 'SideNavSlice',
    initialState,
    reducers: {
        expand: (state, action: PayloadAction<string>)=>{
            state.expanded=action.payload;
        },
        collapse: (state, action: PayloadAction<string>)=>{
            state.expanded=action.payload;
        }
    },
})

export const {expand, collapse} = sideNavSlice.actions
export default sideNavSlice.reducer;