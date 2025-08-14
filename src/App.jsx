import { useState } from "react";
import { resumeData } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/section";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const appStyle = {
    background: darkMode ? "#121212" : "#f5f5f5",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    transition: "background 0.3s ease, color 0.3s ease"
  };
  return (
    <div style={appStyle}>
      <Navbar name={resumeData.name} toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Hero data={resumeData} darkMode={darkMode} />
      <About text={resumeData.about} education={resumeData.education} 
  internships={resumeData.internships}  darkMode={darkMode} />
  <Skills skills={resumeData.skills} darkMode={darkMode} />
      <Section title="Projects" items={resumeData.projects} darkMode={darkMode} />
      <Section title="Articles" items={resumeData.articles} darkMode={darkMode} />
      
      
      <Contact contact={resumeData.contact} darkMode={darkMode} />
    </div>
  );
}

export default App;
