import React from 'react';
import { ErrorBoundary } from '../../components';
import {
    decrement,
    increment,
    incrementByAmount,
    useSelectCount,
} from '../../store/features/counter/counterSlice';
import {
    toggle,
    useSelectToggle,
} from '../../store/features/toggle/toggleSlice';
import { useAppDispatch } from '../../hooks/store/useAppDispatch';

import '../../styles/style.css';

export const ExamplePage = () => {
    const count = useSelectCount();
    const toggleValue = useSelectToggle();
    const dispatch = useAppDispatch();

    const onIncrementClick = () => {
        dispatch(increment());
    };

    const onDecrementClick = () => {
        dispatch(decrement());
    };

    const onIncrementByAmountClick = () => {
        dispatch(incrementByAmount(5));
    };

    const onToggleClick = (): void => {
        dispatch(toggle());
    };

    return (
        <ErrorBoundary>
            <h1>Counter</h1>
            <span>Count value: {count}</span>
            <br />
            <button onClick={onIncrementClick}>Increment counter</button>
            <button onClick={onDecrementClick}>Decrement counter</button>
            <button onClick={onIncrementByAmountClick}>Increment with 5</button>

            <hr />

            <h1>Toggle</h1>
            <span>Toggle value: {toggleValue.toString()}</span>
            <br />
            <button onClick={onToggleClick}>Toggle</button>
        </ErrorBoundary>
    );
};
