
import reportWebVitals from './reportWebVitals';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import About from './components/About.mjs';
import Navbar from './components/Navbar.mjs';
import Textform from './components/Textform.mjs';
import Alertweb from './components/Alertweb';
import * as ReactDOM from "react-dom/client";


// Create the router configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/nav" element={<App/>}/>
      
      
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <App/>
 
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
