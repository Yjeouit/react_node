import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TutorialsList from '../components/tutorials-list.component';
import AddTutorial from '../components/add-tutorial.component';
import Tutorial from '../components/tutorials-list.component';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  return (){
    return (
      <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path={["/", "/tutorials"]} element={<TutorialsList />} />
          <Route exact path="/add" element={<AddTutorial />} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
        </Routes>
      </div>
    </Router>
  );
  }
}

export default App;
