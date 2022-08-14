import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from "./components/navbar";
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path='/contact' component={Contact}  />
        <Route path='/projects' component={Projects}  />
        <Route path='/skills' component={Skills}  />
        <Route exact path='/' component={Home}  />
        <h1>Hello</h1>
        <button className="btn btn-success">OK</button>
      </BrowserRouter>
    </div>
  );
}

export default App;
