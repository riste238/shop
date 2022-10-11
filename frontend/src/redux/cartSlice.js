import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        cart : []  
    }, 
    reducers : {
        addToCart : (state,action) => {
            console.log("Given product after click ", action.payload);
       
            state.cart.push(action.payload);
        }
    }
})

export const {addToCart} = cartSlice.actions;
// export default cartSlice.reducer;
export default cartSlice.reducer;   
