
import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import Project from './components/project';
import Skills from './components/skills';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
