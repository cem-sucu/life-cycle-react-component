import React, { Component } from "react";
import "./App.css";
import LifeCycle from "./LifeCycle";

class App extends Component {
    state = {
        display: true,
    };

    showOrDelete = () => {
        this.setState({
            display: !this.state.display,
        });
    };

    render() {
        const showComponent = this.state.display ? (
            <LifeCycle name="Yoyo" />
        ) : (
            <div></div>
        );

        return (
            <div className="App">
                {showComponent}
                <button onClick={this.showOrDelete}>cliquez ici</button>
            </div>
        );
    }
}

export default App;
