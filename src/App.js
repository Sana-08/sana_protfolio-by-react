import styles from "./App.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Link as ScrollLink, Element, Events, animateScroll as scroll } from 'react-scroll';

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (


    



    <BrowserRouter>
      <nav className={styles.back}>
        <div className={styles.flex}>
          <div>
            <p className={styles.sana}>Sana's Portfolio</p>
          </div>
          <div className={styles.links}>
            <ScrollLink to="home" spy={true} smooth={true} duration={500} offset={-70} onClick={scrollToTop} className={styles.navLink}>
              Home
            </ScrollLink>
            <ScrollLink to="skills" spy={true} smooth={true} duration={500} offset={-70} onClick={scrollToTop} className={styles.navLink}>
              Skills
            </ScrollLink>
            <ScrollLink to="projects" spy={true} smooth={true} duration={500} offset={-70} onClick={scrollToTop} className={styles.navLink}>
              Projects
            </ScrollLink>
            <ScrollLink to="contact" spy={true} smooth={true} duration={500} offset={-70} onClick={scrollToTop}className={styles.navLink}>
              Contact
            </ScrollLink>
          </div>
        </div>
      </nav>

      <div className="content">
        <Element name="home">
          <Home />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </BrowserRouter>
  );
}

export default App;