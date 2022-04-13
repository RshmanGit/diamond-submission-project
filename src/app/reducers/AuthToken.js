import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authToken',
    initialState: {
        value: ""
    },
    reducers: {
        setKey: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setKey } = authSlice.actions

export const selectToken = (state) => state.authToken.value;

export default authSlice.reducer