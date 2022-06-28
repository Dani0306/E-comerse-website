import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/user.context';
import AppCategoriesProvider from './context/categories.context';
import AppCartProvider from './context/cart.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AppContextProvider>
            <AppCategoriesProvider>
                <AppCartProvider>
                    <App />
                </AppCartProvider>
            </AppCategoriesProvider>
        </AppContextProvider>
    </BrowserRouter>
);
