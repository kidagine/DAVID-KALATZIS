import "./App.css";
import Hero from "./components/Hero/Hero";
import Content from "./components/ContentPersonal/ContentPersonal";
import Footer from "./components/Footer/Footer";
import TopBar from "./components/TopBar/TopBar";
import "./fonts.css";
import { useEffect, useRef, useState } from "react";
import About from "./components/About/About";
import { personalData } from "./data/ContentPersonalData";
import { professionalData } from "./data/ContentProfessionalData";
import ContentDetails from "./components/ContentDetails/ContentDetails";
import ContentProfessional from "./components/ContentProfessional/ContentProfessional";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
  const [selectedContentItem, setSelectedContentItem] = useState(null);
  const [fadeOutContent, setFadeOutContent] = useState(false);
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
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

  const handleContentClick = (item) => {
    setFadeOutContent(true);
    setTimeout(() => {
      setSelectedContentItem(item);
      setFadeOutContent(false);
      window.scrollTo({
        top: 250,
        behavior: "smooth",
      });
    }, 400);
  };

  return (
    <div className="scroll-background">
      <div ref={aboutRef} className="component-container">
        <Hero />
      </div>
      <TopBar
        isSticky={isSticky}
        selectedValue={selectedValue}
        selectedContentItem={selectedContentItem}
        setSelectedValue={(value) => {
          setSelectedValue(value);
          setSelectedContentItem(null);
        }}
      />
      <div className="component-container" ref={contentRef}>
        <div
          className={`content-container ${
            fadeOutContent ? "fade-out" : "fade-in"
          }`}
        >
          {selectedValue === 2 ? (
            <About />
          ) : selectedContentItem ? (
            <ContentDetails data={selectedContentItem} />
          ) : selectedValue === 1 ? (
            <Content
              images={personalData}
              onContentClick={handleContentClick}
            />
          ) : (
            <ContentProfessional
              images={professionalData}
              onContentClick={handleContentClick}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
