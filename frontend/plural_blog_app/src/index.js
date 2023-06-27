import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { AuthContextProvider } from './context/authContext';

const root = createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <AuthContextProvider>
   <App />
  </AuthContextProvider>
 </React.StrictMode>

);