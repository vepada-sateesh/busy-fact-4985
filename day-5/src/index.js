import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContextProvider from "./Context/AppContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </AppContextProvider>
);


