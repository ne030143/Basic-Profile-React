import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

//Contents
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Skills from './contents/Skills'
import Contact from './contents/Contact'


import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;