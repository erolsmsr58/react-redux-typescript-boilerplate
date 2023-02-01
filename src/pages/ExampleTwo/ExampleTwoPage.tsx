import React from 'react';
import { ErrorBoundary } from '../../components';

import '../../styles/style.css';

export const ExampleTwoPage = () => {
    return (
        <ErrorBoundary>
            <h1>Example Page Two</h1>
        </ErrorBoundary>
    );
};
