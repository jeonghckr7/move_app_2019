import React from 'react';
//# import logo from './logo.svg';
//import './App.css';
//import Potato from "./Potato";
import PropTypes from "prop-types";
// const friends = ["dal","mark","lyan"];
// friends -> (4) ["dal", "mark"]
// friends.map(function(friends) {
// return friends + " 하트"; })

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("hello");
    }

    state = {
        count: 0
    };
    add = () => {
        //console.log("add")
        this.setState(current => ({ count : current.count + 1 }));
    };
    minus = () => {
        this.setState(current => ({ count : current.count - 1 }));
    };
    componentDidMount() {
        console.log("component rendered");
    }
    componentDidUpdate() {
        console.log("I just update");
    }
    componentWillUnmount() {
        console.log("Goodbye, cruel world");
    }
    render () {
        console.log("I'm rendering");
        return (
        <div>
            <h1>Im a class {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
        )
    }
}

export default App;