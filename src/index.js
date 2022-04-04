import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/* 

import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

*/