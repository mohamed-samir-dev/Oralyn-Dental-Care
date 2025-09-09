import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './App';

/**
 * Application Entry Point
 * Initializes the React application with proper error boundaries and strict mode
 */
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);