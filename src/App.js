import NavBar from "./Components/NavBar";
import './App.css';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/projects" element = {<Projects />} />
          <Route path="/experience" element = {<Experience />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;