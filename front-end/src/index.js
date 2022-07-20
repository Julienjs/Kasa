import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './router/App';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <App />
    <Footer />
  </BrowserRouter>,
);

