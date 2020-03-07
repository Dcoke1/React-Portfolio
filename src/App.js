import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import MobileNavigation from './Components/MobileNavigation';
import MobileAbout from './Components/MobileAbout';
import About from './Components/About';
import Asteroid from './Components/Asteroid';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Footer from './Components/Footer';



function App() {
  return (
    <div className='wrapper'>
      <MobileNavigation />
      <Navigation />
      <About />
      <MobileAbout />
      <Asteroid />
      <Resume name={'Douglas Coke'}/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
