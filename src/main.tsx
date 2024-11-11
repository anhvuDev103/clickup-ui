import 'normalize.css';
import './index.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import '@utils/overrides.ts';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
