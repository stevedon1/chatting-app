import react from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { createRoot } from 'react-dom/client';


// Get the root element
const rootElement = document.getElementById("root");

// Create a root and render your app
const root = createRoot(rootElement);
root.render(<App />);
