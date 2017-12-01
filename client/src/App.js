import React, { Component } from 'react';
import './App.css';
import Shares from './components/Shares';
import axios from 'axios';

class App extends Component {

     constructor(props) {
             super();
             this.props = props;
             this.state={data:[]}
         }

    componentDidMount(){
        axios.get('http://localhost:3000/api/shares/').then( (response) => {
            console.log(response.data);
                  this.setState({data:response.data});
         });
    }
  render() {
    return (
      <div className="App">
        <Shares>
            {this.state.data}
        </Shares>
      </div>
    );
  }
}

export default App;
