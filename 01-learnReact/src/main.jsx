import '@/styles/globals.css';
// import App from '/App.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Reducer from './components/Reducer';

const domNode = document.getElementById('react-app');

createRoot(domNode).render(
  <StrictMode>
    <Reducer />
  </StrictMode>
);
