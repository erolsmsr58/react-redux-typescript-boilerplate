import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from '../../../hooks/store/useAppSelector';
import { RootState } from '../../../types/storeTypes';

interface CounterState {
    value: number;
}

const initialState = {
    value: 0,
} as CounterState;

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const useSelectCount = () =>
    useAppSelector((state: RootState) => state.counter.value);

export default counterSlice.reducer;
