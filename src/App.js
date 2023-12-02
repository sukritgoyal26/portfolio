import NavBar from "./Components/NavBar";
import './App.css';
import { BrowserRouter as Router , Routes , Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      
      <NavBar />
      <BrowserRouter basename="/portfolio">
      <Routes>
          <Route exact path="/portfolio" element = {<Home />} />
          <Route path="/projects" element = {<Projects />} />
          <Route path="/experience" element = {<Experience />} />
        </Routes>
        </BrowserRouter>
        <Footer />
      
    </div>
  );
}

export default App;
