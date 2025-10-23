
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header"
import Projects from "./components/Projects";
import Skills from "./components/Skill";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

