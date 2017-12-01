import React, {Component} from 'react';
import './App.css';
import Shares from './components/Shares';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {data: {quote:{open:0}}}
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/shares/dsfs').then((response) => {
            console.log('succes',response.data);
            this.setState({data: response.data});
        });
    }

    render() {

        let display = [];

        return (
            <div className="App">
                {this.state.data.quote.open}
            </div>
        )


    }


}

export default App;
