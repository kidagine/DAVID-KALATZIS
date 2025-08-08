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
    <div>
      <div ref={aboutRef} className="component-container">
        <AboutMe />
      </div>
      <div className="component-container">
        <TopBar isSticky={isSticky} />
      </div>
      <div className="component-container">
        <div className="content-container">
          <div class="content-item">
            <img
              src="https://i.pinimg.com/1200x/e0/9f/e8/e09fe8a8d4f25e12083117f8558df9f4.jpg"
              alt="content image"
              class="content-image"
            />
          </div>
          <div class="content-item">
            <img
              src="https://i.pinimg.com/736x/87/60/46/876046238a2fadd46b9556d90bc3e07a.jpg"
              alt="content image"
              class="content-image"
            />
          </div>
          <div class="content-item">
            <img
              src="https://i.pinimg.com/736x/a7/28/be/a728be564049f0cc4425619858fa83f4.jpg"
              alt="content image"
              class="content-image"
            />
          </div>{" "}
          <div class="content-item">
            <img
              src="https://i.pinimg.com/736x/0f/0b/51/0f0b514d4e3471edc35ee39669bd5001.jpg"
              alt="content image"
              class="content-image"
            />
          </div>{" "}
          <div class="content-item">
            <img
              src="https://i.pinimg.com/736x/6f/32/17/6f3217d9e1c4cfc489ae389f513fdebf.jpg"
              alt="content image"
              class="content-image"
            />
          </div>{" "}
          <div class="content-item">
            <img
              src="https://i.pinimg.com/1200x/5b/7e/69/5b7e692586039c07614813d7bdf3b6dd.jpg"
              alt="content image"
              class="content-image"
            />
          </div>{" "}
          <div class="content-item">
            <img
              src="https://i.pinimg.com/1200x/10/0b/1c/100b1c8123c707c9953d5a8211de4bea.jpg"
              alt="content image"
              class="content-image"
            />
          </div>{" "}
          <div class="content-item">
            <img
              src="https://i.pinimg.com/1200x/15/b7/9e/15b79ed860dfc76c61496383c08d60cf.jpg"
              alt="content image"
              class="content-image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
