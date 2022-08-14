import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from "./components/navbar";
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Home from './pages/Home';

function App() {
  return (

      <BrowserRouter>
        <Navbar />
        <div className='container'>
        <Route path='/contact' component={Contact}  />
        <Route path='/projects' component={Projects}  />
        <Route path='/skills' component={Skills}  />
        <Route exact path='/' component={Home}  />
        </div>
      </BrowserRouter>

  );
}

export default App;
