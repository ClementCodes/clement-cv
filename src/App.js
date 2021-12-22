import './styles/index.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {  Switch, Route,  HashRouter } from "react-router-dom";
import ProjetFlag from './components/ProjetFlag';
import {  Project2, Project3, Project4 } from './pages/ProjectPage';
import PageTest from './pages/PageTest';
import Formulaire from './components/Formulaire';




function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projetflag" component={ProjetFlag} />
        <Route exact path="/Formulaire" component={Formulaire} />
        <Route exact path="/test" component={PageTest} />
        <Route exact path="/project-2" component={Project2} />
        <Route exact path="/project-3" component={Project3} />
        <Route exact path="/project-4" component={Project4} />
        <Route component={NotFound} />
      </Switch>
      </HashRouter>
    


  );
}

export default App;
