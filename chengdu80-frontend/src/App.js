import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Con from "./containers/index";
import "./App.css";
import MenuAppBar from './components/AppBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Con.HomeContainer} />
        <Route path="/login" component={Con.LoginContainer} />
        <Route path="/register" component={Con.RegisterContainer} />
        <Route path="/home" component={Con.HomeContainer} />
        <Route path="/people" component={Con.PeopleContainer} />
        <Route path="/logout" component={Con.LogoutContainer} />
      </Router>
    </div>
  );
}

export default App;
