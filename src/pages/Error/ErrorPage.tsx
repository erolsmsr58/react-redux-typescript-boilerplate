import React from 'react';
import { ErrorBoundary } from '../../components';

export const ErrorPage = () => {
    return (
        <ErrorBoundary>
            <h1>Error</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </ErrorBoundary>
    );
};
