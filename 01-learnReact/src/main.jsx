import '@/styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '/App';
import Data from './components/data';
import Form from './components/Form';

const domNode = document.getElementById('react-app');

createRoot(domNode).render(
  <StrictMode>
    <Form />
  </StrictMode>
);
