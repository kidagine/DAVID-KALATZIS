import "./App.css";
import Hero from "./components/Hero/Hero";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import TopBar from "./components/TopBar/TopBar";
import "./fonts.css";
import { useEffect, useRef, useState } from "react";
import About from "./components/About/About";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
  const aboutRef = useRef(null);
  const observerRef = useRef(null);

  const personalImages = [
    "https://i.pinimg.com/1200x/3e/ff/31/3eff31835905d618fa69adef49923bdf.jpg",
    "https://i.pinimg.com/736x/20/52/1d/20521ded456bdd1d2b15ca94637a50d9.jpg",
    "https://i.pinimg.com/1200x/8d/30/01/8d3001a348320c4a64a538c7d1640d21.jpg",
    "https://i.pinimg.com/736x/30/e3/37/30e3379a1e9f5745d01cd91ff9a968b2.jpg",
    "https://i.pinimg.com/736x/3f/18/1f/3f181fb1d1e9b5f11a74b9492cbd23c8.jpg",
    "https://i.pinimg.com/736x/30/22/66/302266806087fa7320f942c66004f2f9.jpg",
    "https://i.pinimg.com/736x/00/f3/af/00f3af2a44bcef1f1b9dffc8aea1439a.jpg",
    "https://i.pinimg.com/736x/ab/dc/93/abdc93b33b06bcc57f2d9cb8781e8221.jpg",
  ];

  const professionalImages = [
    "https://i.pinimg.com/736x/87/60/46/876046238a2fadd46b9556d90bc3e07a.jpg",
    "https://i.pinimg.com/736x/a7/28/be/a728be564049f0cc4425619858fa83f4.jpg",
    "https://i.pinimg.com/736x/0f/0b/51/0f0b514d4e3471edc35ee39669bd5001.jpg",
    "https://i.pinimg.com/736x/6f/32/17/6f3217d9e1c4cfc489ae389f513fdebf.jpg",
    "https://i.pinimg.com/1200x/5b/7e/69/5b7e692586039c07614813d7bdf3b6dd.jpg",
    "https://i.pinimg.com/1200x/10/0b/1c/100b1c8123c707c9953d5a8211de4bea.jpg",
    "https://i.pinimg.com/1200x/15/b7/9e/15b79ed860dfc76c61496383c08d60cf.jpg",
    "https://i.pinimg.com/1200x/e0/9f/e8/e09fe8a8d4f25e12083117f8558df9f4.jpg",
  ];

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
        <div className="content-container">
          {selectedValue === 2 ? (
            <About />
          ) : (
            <Content
              images={selectedValue === 1 ? personalImages : professionalImages}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
