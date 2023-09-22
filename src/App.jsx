
import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import Project from './components/project';
import Skills from './components/skills';
import Contact from './components/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
