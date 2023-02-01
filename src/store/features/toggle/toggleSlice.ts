import { createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from '../../../hooks/store/useAppSelector';
import { RootState } from '../../../types/storeTypes';

interface ToggleState {
    value: boolean;
}

const initialState = {
    value: false,
} as ToggleState;

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        },
    },
});

export const { toggle } = toggleSlice.actions;

export const useSelectToggle = () =>
    useAppSelector((state: RootState) => state.toggle.value);

export default toggleSlice.reducer;
