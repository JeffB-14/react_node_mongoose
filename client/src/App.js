import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './component/home'; 
import MyHelloWorld from './component/helloWorld';
import LoadData from './component/load'; 
import TestConnections from './component/testConnections'; 
import ListData from './component/list';
import './App.css';

class App extends Component { 
  render() { 
    return ( 
      <Router> 
        <div className="App">
          <div className="menu"> 
            <ul className="menu-header">
              <li> 
                <Link to="/">Home</Link> 
              </li>
              <li> 
                <Link to="/helloWorld">Hello World</Link> 
              </li> 
              <li> 
                <Link to="/tests">Run connection tests</Link> 
              </li>
              <li> 
                <Link to="/load/COVID-19+Activity.csv">Load test data</Link> 
              </li> 
              <li> 
                <Link to="/list">List test data</Link> 
              </li> 
            </ul>
          </div>  
          <Switch> 
            <Route exact path='/' component={Home}></Route> 
            <Route exact path='/helloWorld' component={MyHelloWorld}></Route> 
            <Route exact path='/tests' component={TestConnections}></Route> 
            <Route exact path='/load/:fileKey' component={LoadData}></Route> 
            <Route exact path='/list' component={ListData}></Route> 
          </Switch> 
        </div>  
      </Router> 
    ); 
  } 
} 

export default App;

/*
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiResponse: "apiResponse",
      dbResponse: "dbResponse"
    }
  }
  
  callAPI() {
    fetch("http://localhost:3001/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
  }

  callDB() {
    fetch("http://localhost:3001/testDB")
        .then(res => res.text())
        .then(res => this.setState({ dbResponse: res }))
        .catch(err => err);
  }

  componentDidMount(){
    this.callAPI();
    this.callDB();
  }

  render() {
    return (
      <div className="App">
      <HelloWorld />
      <p className="App-intro">{this.state.apiResponse}</p>
      <p className="App-intro">{this.state.dbResponse}</p>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
*/
