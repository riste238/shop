import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({

    name: "user",
    initialState: {
        user: {}
    },
    reducers: {
        //this's action
        setUser: (state, action) => {
            state.user = action.payload;
            //     return  { ...state, user: action.payload};
            console.log(action.payload);
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;



