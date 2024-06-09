// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="container mt-3">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
