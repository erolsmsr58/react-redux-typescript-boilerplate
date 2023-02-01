import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ExamplePage } from '../pages/Example/ExamplePage';
import { ErrorPage } from '../pages/Error/ErrorPage';
import { ExampleTwoPage } from '../pages/ExampleTwo/ExampleTwoPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ExamplePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/two',
        element: <ExampleTwoPage />,
    },
]);
