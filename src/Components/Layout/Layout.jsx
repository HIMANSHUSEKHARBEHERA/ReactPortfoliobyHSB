import React from 'react';
import About from '../About';
import Navbar from '../Navbar';
import Home from '../Home';
import Projects from '../Projects/Projects';
import Services from '../Services';
import Skills from '../Skills';
import Contact from '../Contact';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Services />
    <Skills />
    <Contact />
    <Footer />
    </>
  );
}

export default Layout;
