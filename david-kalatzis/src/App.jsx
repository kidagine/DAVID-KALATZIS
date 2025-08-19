import "./App.css";
import Hero from "./components/Hero/Hero";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import TopBar from "./components/TopBar/TopBar";
import "./fonts.css";
import { useEffect, useRef, useState } from "react";
import About from "./components/About/About";
import { personalData } from "./data/ContentPersonalData";
import { professionalData } from "./data/ContentProfessionalData";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
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
    <div>
      <div ref={aboutRef} className="component-container">
        <Hero />
      </div>
      <div className="component-container">
        <TopBar
          isSticky={isSticky}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </div>
      <div className="component-container">
        {selectedValue === 2 ? (
          <About />
        ) : (
          <div className="content-container">
            <Content
              images={selectedValue === 1 ? personalData : professionalData}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
