import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Conferences from './Conferences';
import Home from './Home';
import Content from './Content';
import Personal from './Personal';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/conferences" element={<Conferences/>} />
        <Route path="/content" element={<Content/>} />
        <Route path="/personal" element={<Personal/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
