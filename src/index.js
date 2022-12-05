import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Helmet} from "react-helmet";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Helmet>
    <title>Shrimp Booking</title>
        

    </Helmet>
  <React.StrictMode>
  <App />
  </React.StrictMode>
  </div>
  
);

