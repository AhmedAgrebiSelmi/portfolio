import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from "./components/navbar";
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Home from './pages/Home';
import SkillDetails from './pages/SkillDetails';

function App() {
  return (

      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Switch>
        <Route path='/contact' component={Contact}  />
        <Route path='/projects' component={Projects}  />
        <Route path='/skills/:id' component={SkillDetails}/>
        <Route path='/skills' component={Skills}  />
        <Route exact path='/' component={Home}  />
        </Switch>
        </div>
      </BrowserRouter>

  );
}

export default App;
