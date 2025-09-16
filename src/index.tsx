import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'shared/ui/theme/ThemeProvider';
import App from './App';
import './assets/fonts/fonts.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
