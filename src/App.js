//pour faire les route il faut importer le browser router
//pour faire le switch importer 
//pour faire le route importer le route 
//Pour faire le dessus il faut importer avec npm react-router-dom

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import {  Switch, Route,  HashRouter } from "react-router-dom";
import ProjetFlag from './components/ProjetFlag';
import {  Project2, Project3, Project4 } from './pages/ProjectPage';
// import Contact from './pages/Contact';
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

        {/* <Route exact path="/project-1" component={Project1} /> */}
        <Route exact path="/project-2" component={Project2} />
        <Route exact path="/project-3" component={Project3} />
        <Route exact path="/project-4" component={Project4} />
        <Route component={NotFound} />
      </Switch>
      </HashRouter>
    


  );
}

export default App;
