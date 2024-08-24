import '@/styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import FeedbackForm from './components/FeedbackForm';

const domNode = document.getElementById('react-app');

createRoot(domNode).render(
  <StrictMode>
    <FeedbackForm />
  </StrictMode>
);
