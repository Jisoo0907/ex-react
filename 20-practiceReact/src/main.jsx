import '@/styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Map from './components/learn-map/map';

const domNode = document.getElementById('react-app');

createRoot(domNode).render(
  <StrictMode>
    <Map />
  </StrictMode>
);
