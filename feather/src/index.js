// Import React library - core functionality
import React from 'react';
// Import ReactDOM client for rendering React components in the browser
import ReactDOM from 'react-dom/client';
// Import the main App component
import App from './App';
// Import BrowserRouter for handling client-side routing
import { BrowserRouter } from 'react-router-dom';

// Create a root React DOM node at the 'root' element in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the React application
root.render(
  // StrictMode helps identify potential problems in the application during development
  <React.StrictMode>
    {/* BrowserRouter enables client-side routing using HTML5 history API */}
    <BrowserRouter>
      {/* Render the main App component */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);