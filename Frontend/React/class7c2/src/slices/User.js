import {createSlice} from '@reduxjs/toolkit'
const User = createSlice({
    name:"user",
    initialState: {
        age: 23,
        name:"User",
        email:"User23@gmail.com"
    },
    reducers:{
        Increase:(state,action)=>{
          state.age += 1;
        },
        ChangeName:(state,action)=>{
            state.name = action.payload
          }
    }
})
export default User.reducer;
export const {Increase,ChangeName} = User.actions;
