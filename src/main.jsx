import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/portfolio.css' // Points directly to your premium dark-mode stylesheet

// Dynamically inject FontAwesome icons directly into the document head
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)