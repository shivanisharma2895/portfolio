
import './App.css';
import About from './components/about';

import Project from './components/project';
import Skills from './components/skills';
import Contact from './components/contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <About />
  },
  {
    path: "/projects",
    element: <Project />
  },
  {
    path: "/skills",
    element: <Skills />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>

          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />

        </Routes>
      </BrowserRouter> */}

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
