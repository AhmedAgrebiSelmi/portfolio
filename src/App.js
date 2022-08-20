import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from "./components/navbar";
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Home from './pages/Home';
import SkillDetails from './pages/SkillDetails';
import NotFound from './pages/NotFound';

function App() {
  return (

      <BrowserRouter>
        <Navbar />
        <div className='container mt-5'>
          <Switch>
        <Route path='/contact' component={Contact}  />
        <Route path='/projects' component={Projects}  />
        <Route path='/skills/:id' component={SkillDetails}/>
        <Route path='/skills' component={Skills}  />
        <Route exact path='/' component={Home}  />
        <Route component={NotFound}  />
        </Switch>
        </div>
      </BrowserRouter>

  );
}

export default App;
