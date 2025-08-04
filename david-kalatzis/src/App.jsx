import "./App.css";
import Footer from "./components/Footer/Footer";
import TopBar from "./components/TopBar/TopBar";
import "./fonts.css";

function App() {
  return (
    <>
      <div className="component-container">
        <TopBar />
      </div>
      <div className="component-container">
        <div className="temp"></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
