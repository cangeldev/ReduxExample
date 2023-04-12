import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    name: string
}
const initialState: UserState = {
    name: ""
}
export const userSlice = createSlice({
    name: "deneme",
    initialState,
    reducers: {
        setName: (state) => {
            state.name = "Can"
        },
    }
})

export const { setName } = userSlice.actions
export default userSlice.reducer