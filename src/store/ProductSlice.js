import {createSlice} from '@reduxjs/toolkit';


const initState= { product :[] , showProduct :{} ,categories :[] }
const ProcuctSlice = createSlice({
    name : 'product',
    initialState : initState,
    reducers :{
        addProducts :(state,action)=>{
            state.product = action.payload;
        },
        showDetailProduct :(state,action)=>{
            state.showProduct = action.payload
        },
        addCategories :(state,action)=>{
            state.categories = action.payload
        },
        addPurchase :(state,action)=>{
            state.procurement.all = action.payload.all;
            state.procurement.id = action.payload.id;
        },
    }
})
export default ProcuctSlice.reducer;
export const {addProducts,showDetailProduct,addCategories} =ProcuctSlice.actions