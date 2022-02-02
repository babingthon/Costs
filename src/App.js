import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"

import Home from './components/pages/Home';
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Company from "./components/pages/Company";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {

  const [year, setYear] = useState('');

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, [year]);

  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/company" element={<Company />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer year={year}/>
    </Router>
  );
}

export default App;
