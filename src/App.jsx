import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar.jsx';
import Home from './sections/Home.jsx';
import About from './sections/About.jsx';
import Certifications from './sections/Certifications.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import BackToTop from './components/BackToTop.jsx';


function App() {
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Simulate loading for a nicer entry experience
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppContainer>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <CustomCursor />
          <Navbar scrollPosition={scrollPosition} />
          <main>
            <Home scrollPosition={scrollPosition} />
            <About />
            <Certifications />
            <Projects />
            <Contact />
          </main>
          <BackToTop/>
          <Footer />
        </>
      )}

    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  overflow-x: hidden;
`;

export default App;