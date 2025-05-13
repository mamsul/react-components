import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ToastProvider from './components/molecules/Toast/ToastProvider.tsx';

import ReactGA from 'react-ga4';
const TRACKING_ID = 'G-GJQHPCSSSN';

ReactGA.initialize(TRACKING_ID);
ReactGA.send('pageview');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </StrictMode>
);
