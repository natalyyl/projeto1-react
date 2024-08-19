import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/app/index';
import Contatos from './pages/contatos/index';

import'./index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/app' element={<App/>}/>
        <Route path='/contato' element={<Contatos/>}/>
      </Routes>
    </BrowserRouter>
</React.StrictMode>
);
  


