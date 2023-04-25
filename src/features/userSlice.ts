import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    UserLogin: {
        name: string
        surname: string
        password: string,
        age: number
    }
}
const initialState: UserState = {
    UserLogin: {
        name: "",
        surname: "",
        password: "",
        age: 0
    }
}
export const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.UserLogin.name = action.payload;
          },
          setSurname: (state, action) => {
            state.UserLogin.surname = action.payload;
          },
          setPassword: (state, action) => {
            state.UserLogin.password = action.payload;
          },
          setAge: (state, action) => {
            state.UserLogin.age = action.payload;
          },
    }
})

export const {setName,setSurname,setPassword,setAge } = userSlice.actions
export default userSlice.reducer