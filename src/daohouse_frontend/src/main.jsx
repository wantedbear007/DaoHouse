import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./App.css";
import { AuthProvider } from './Components/utils/useAuthClient';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
            <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>
);