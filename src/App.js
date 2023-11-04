import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ProductIntro from "./Components/ProductIntro";
import Howtouse from "./Components/Howtouse";
import Slider from "./Components/Slider";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <br/>
        <br/>
        <Routes>
          <Route path="/register" element={<Login />} />
          <Route path="/login" element={<Register />} />
        </Routes>
        <br/>
        <br/>
        <br />
        <br />
        <Intro />
        <br />
        <br />
        <br />
        <br />
        <br />
        <About />
        <br />
        <br />
        <Howtouse />
        <br />
        <br />
        <br />
        <Slider />
        <br />
        <br />
        <ProductIntro />
        <br />
        <br />
        <br />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
