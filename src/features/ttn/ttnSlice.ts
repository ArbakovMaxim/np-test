import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface Item {
    id: number;
    ttn: number;
}

export interface TtnState {
    value: Item[]
}

const initialState: TtnState = {
    value: [],
}

export const ttnSlice = createSlice({
    name: 'ttn',
    initialState,
    reducers: {
        addNewTtn: (state, action: PayloadAction<Item>) => {
            state.value.push(action.payload);
        },
        removeTtn: (state, action: PayloadAction<number>) => {
            state.value = state.value.filter((item) => item.id !== action.payload);
        },
    }
})

export const { addNewTtn, removeTtn } = ttnSlice.actions

export default ttnSlice.reducer