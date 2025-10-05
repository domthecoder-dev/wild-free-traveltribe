// src/main.jsx - FRESH TEST
import { createRoot } from 'react-dom/client'

function App() {
  return React.createElement('h1', null, 'Hello World - React Test')
}

createRoot(document.getElementById('root')).render(React.createElement(App))