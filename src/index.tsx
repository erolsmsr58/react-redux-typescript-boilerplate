import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { router } from './router/router';

(async () => {
    const root = createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </React.StrictMode>
    );
})();
