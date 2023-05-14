// import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import Navbar from './Components/Navbar'
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
 
class App extends Component {
  pageSize=10;
  render() {
    return (
      <div>
         <Router>
         <Navbar/>
         {/* <News pageSize={this.pageSize} country={"in"} category="science" /> */}
         <Switch>
          <Route  exact path="/"><News key="General" pageSize={this.pageSize} country={"in"} category="general" /></Route>
          <Route  exact path="/business"><News key="Business" pageSize={this.pageSize} country={"in"} category="business" /></Route>
          <Route  exact path="/entertainment"><News key="Entertainment" pageSize={this.pageSize} country={"in"} category="entertainment" /></Route>
          <Route  exact path="/general"><News key="general" pageSize={this.pageSize} country={"in"} category="general" /></Route>
          <Route  exact path="/health"><News key="health" pageSize={this.pageSize} country={"in"} category="health" /></Route>
          <Route  exact path="/science"><News key="science" pageSize={this.pageSize} country={"in"} category="science" /></Route>
          <Route  exact path="/sports"><News key="sports" pageSize={this.pageSize} country={"in"} category="sports" /></Route>
          <Route  exact path="/technology"><News key="technology" pageSize={this.pageSize} country={"in"} category="technology" /></Route>
        </Switch>
         </Router>
       
      </div>
    );
  }
}

export default App;