import React, { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponent";

class App extends Component {
    state = {
        age: 28,
    };

    addOneYear = () => {
        this.setState((prevState) => ({
            age: prevState.age + 1,
        }));
    };

    render() {
        return (
            <div className="App">
                <MyComponent age={this.state.age} />

                <button onClick={this.addOneYear}>Changer l'age</button>
            </div>
        );
    }
}

export default App;
