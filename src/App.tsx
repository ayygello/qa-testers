import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Services />} />
      <Route path='/:id' element={<ServiceDetails />} />
    </Routes>
  );
};

export default App;
