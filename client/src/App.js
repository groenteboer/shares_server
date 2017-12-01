import React, {Component} from 'react';
import './App.css';
import Shares from './components/Shares';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {data: []}
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/shares/').then((response) => {
            console.log(response.data);
            this.setState({data: response.data});
        });
    }

    render() {

        console.log('this.state.data=', this.state.data);
        return (
            <div className="App">
                {this.state.data.map(share =>
                    <p>{share.code}</p>
                )}
            </div>
        );
    }
}

export default App;
