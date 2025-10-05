// src/main.jsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollToTopButton from './Components/ScrollToTop-Files/ScrollToTopButton.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ScrollToTopButton />
  </>
)