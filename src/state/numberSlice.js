import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

export const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        incrementNumber: (state) => {state.value += 1},
        decrementNumber: (state) => {state.value -= 1}
    },
});

export const { incrementNumber } = numberSlice.actions;

export default numberSlice.reducer;