import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from'./Header'
import Footer from './Footer'

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <div>
    <Header />{" "}
    <BrowserRouter>
      <App />
    </BrowserRouter>{" "}
    <Footer />
  </div>,
  document.getElementById("root")
);

