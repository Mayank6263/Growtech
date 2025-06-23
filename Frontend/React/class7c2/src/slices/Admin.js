import {createSlice} from '@reduxjs/toolkit'
import { ChangeName } from './User';
const Admin = createSlice({
    name:"admin",
    initialState: {
        age: 23,
        name:"Admin",
        email:"Admin23@gmail.com"
    },
    reducers:{
        Increase:(state,action)=>{
          state.age += 1;
        },
        ChangeName1:(state,action)=>{
            state.name = action.payload
        }
    }
})
export const {Increase,ChangeName1} = Admin.actions;
export default Admin.reducer;