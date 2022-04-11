import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { CitiesProvider } from './hooks/useCities';



ReactDOM.createRoot(document.getElementById('root')).render(

    <CitiesProvider>
    <App />
    </CitiesProvider>
);
