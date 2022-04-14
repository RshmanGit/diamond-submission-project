import { createSlice } from '@reduxjs/toolkit';

const validitySlice = createSlice({
    name: 'validity',
    initialState: {
        value: Math.floor(new Date().getTime() / 1000)
    },
    reducers: {
        setDate: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setDate} = validitySlice.actions

export const selectValidity = (state) => state.validity.value;

export default validitySlice.reducer