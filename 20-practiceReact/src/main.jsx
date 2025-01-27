import '@/styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Math from './components/math';

const domNode = document.getElementById('react-app');

createRoot(domNode).render(
  <StrictMode>
    <Math />
  </StrictMode>
);
