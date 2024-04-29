import Home from './pages/home/home';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Home />
      </div>
    </Router>
  ); 
}

export default App;

