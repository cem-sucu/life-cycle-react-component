import React, { Component } from "react";
import "./App.css";
import MyRef from "./MyRef";

class App extends Component {
    constructor(props) {
        super(props);

        this.refComponent = React.createRef();
    }

    handleClick = () => {
        this.refComponent.current.focus();
    };

    render() {
        return (
            <div className="App">
                <MyRef name="toto" ref={this.refComponent} />
                <button onClick={this.handleClick}>Valider</button>
            </div>
        );
    }
}

export default App;
