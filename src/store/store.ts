import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import toggleReducer from './features/toggle/toggleSlice';

const reducer = combineReducers({
    counter: counterReducer,
    toggle: toggleReducer,
});

export const store = configureStore({
    reducer,
});
