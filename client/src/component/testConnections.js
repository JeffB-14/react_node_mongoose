import React, { Component } from 'react'; 
import logo from '../logo.svg';
import '../App.css';

class TestConnections extends Component {
    constructor(props){
      super(props);
      this.state = {
        apiResponse: "apiResponse",
        dbResponse: "dbResponse"
      }
    }
    
    callAPI() {
      fetch("http://localhost:8080/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);
    }
  
    callDB() {
      fetch("http://localhost:8080/testDB")
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
        <div className="Test">
            <p className="App-intro">{this.state.apiResponse}</p>
            <p className="App-intro">{this.state.dbResponse}</p>
        </div>
      );
    }
  }
  

export default TestConnections;