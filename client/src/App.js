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
        axios.get('http://localhost:3000/api/shares/dsfs').then((response) => {
            console.log(response.data);
            this.setState({data: response.data});
        });
    }

    render() {


        let display = this.state.data.map(function(share){
            if (this.state.data && this.state.data.length > 0){
                return <div>{share.code}</div>
            }
            else
            {
                return <div>nothing bitch</div>
            }
        });

        console.log('this.state.data=', this.state.data);
        return
        <div className="App">
            {display}

        </div>


    }


}

export default App;
