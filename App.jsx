import React from 'react';
import './index.css'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Contact from './Components/Contact';

const App = () => {
  return (
    <>
    
<Routes>
<Route path='/' index element={<Layout />} />
<Route path='/about' element={<About />} />
<Route path='/projects' element={<Projects />} />
<Route path='/skills' element={<Skills />} />
<Route path='/services' element={<Services />} />
<Route path='/contact' element={<Contact />} />
 </Routes>

    </>
  );
}

export default App;

