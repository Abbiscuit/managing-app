import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Home from "./views/home/home.view";
import EmployeesList from "./views/employees-list/employees-list.component";
import NewForm from "./views/new-form/new-form.view";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/employees" component={EmployeesList} />
            <Route exact path="/new" component={NewForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
