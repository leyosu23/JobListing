import React, {  } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import JobList from "./components/jobList.component"
import CreateJobList from "./components/createJobList.component"
import SingUp from "./components/createUser.component"




function App() {
  return (
    <div className="App">

    <Router>
      
      <Navbar /><br/>
      <Route path="/read" exact component={JobList} />
      <Route path="/create" exact component={CreateJobList} />
      <Route path="/signup" exact component={SingUp} />



    </Router>


    </div>
  );
}

export default App;
