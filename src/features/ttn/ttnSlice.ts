import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Middleware } from '@reduxjs/toolkit';


export interface Item {
    id: string;
    ttn: string;
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
            const ttnExists = state.value.some((item) => item.ttn === action.payload.ttn);
            if (ttnExists) {
                return;
            }
            state.value.push(action.payload);
        },
        removeTtn: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter((item) => item.id !== action.payload);
        },
    }
})

export const ttnLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    let result = next(action);
    if (action.type === addNewTtn.type || action.type === removeTtn.type) {
        const state = store.getState();
        localStorage.setItem('ttnData', JSON.stringify(state.ttn.value));
    }
    return result;
};

export const { addNewTtn, removeTtn } = ttnSlice.actions

export default ttnSlice.reducer