import {createReducer} from '@reduxjs/toolkit';

const initialstate = {
    name: "Ankit Singh",
    age : 25,
}

const userReducer = createReducer(initialstate, (builder)=>{
   builder.addCase('UPDATE_NAME_SUCCESS', (state,action)=>{
       state.name = action.payload
   })
   builder.addCase('UPDATE_AGE_SUCCESS', (state,action)=>{
       state.age = action.payload
   })
})

export default userReducer;