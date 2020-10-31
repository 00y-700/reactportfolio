import React from "react";
import MyNavbar from "./components/Navbar";
import Bio from "./components/Bio";
import FooterCard from "./components/FooterCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Personal from "./components/Personal";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <MyNavbar/>
      <Switch>
        <Route exact path="/" component={Bio}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/work" component={Personal}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/cv" component={Resume}/>
        
      </Switch>
      <FooterCard/>
    </Router>
  );
}

export default App;
