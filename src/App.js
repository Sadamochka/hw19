import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PublicationsPage from './PublicationsPage';
import PhotosPage from './PhotosPage';
import ContactsPage from './ContactsPage';
import Navigation from './Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes className="menu">
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/publications" element={<PublicationsPage/>} />
          <Route path="/photos" element={<PhotosPage/>} />
          <Route path="/contacts" element={<ContactsPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
