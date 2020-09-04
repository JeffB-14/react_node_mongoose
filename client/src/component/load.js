import React, { Component } from 'react'; 
import '../App.css';


class LoadData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "apiResponse"
          }
    }

    callLoad(){
        fetch("http://localhost:8080/loadData")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);
    }
    componentDidMount(){
        this.callLoad();
      }
    
    render() {
        return (
          <div className="Test">
              <p className="App-intro">{this.state.apiResponse}</p>
          </div>
        );
      }
}
export default LoadData;