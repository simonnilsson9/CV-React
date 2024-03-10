import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio'
import Navbar from './navbar';
import Home from './home';
import About from './about';
import CV from './CV';
import Contact from './contact';
import Footer from './footer';




function App() {
  return(
     
    <HashRouter> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/CV" element={<CV/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    
    </HashRouter>  
  );  
}

export default App
