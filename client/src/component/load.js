import React, { Component } from 'react'; 

class LoadData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apiResponse: "apiResponse",
            dbResponse: "dbResponse"
          }
    }

    test(){ 
        console.log(this.props);
        var fileKey = this.props.match.params.fileKey;
        
        console.log('Trying to download file', fileKey);
        
        fetch("http://localhost:3001/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);
        
        return (<div><h1>Load datafile: {this.props.match.params.fileKey}</h1>
        <p className="App-intro">{this.state.apiResponse}</p>
        </div>);

    } 
    load(){
        fetch("http://localhost:3001//loadData")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);
        
        return (<div><h1>Load datafile</h1>
        <p className="App-intro">{this.state.apiResponse}</p>
        </div>);
    }
    render() {
        return (
          <div className="Test">
              <p className="App-intro">{this.load()}</p>
          </div>
        );
      }
}
export default LoadData;