import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import TopBar from "./components/TopBar/TopBar";
import "./fonts.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const aboutRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
      observerRef.current = observer;
    }
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div ref={aboutRef} className="component-container">
        <AboutMe />
      </div>
      <div className="component-container">
        <TopBar isSticky={isSticky} />
      </div>
      <div className="component-container">
        <div className="temp"></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
