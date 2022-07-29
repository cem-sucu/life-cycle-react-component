import React, { Component } from "react";
import PureComp from "./PureComponent";
import SimpleComponent from "./SimpleComponent";
import "./index.css";
import FunctionComp from "./FunctionComp";

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Spider-Man",
        };
    }

    /* shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate() décide TRUE par défaut");
    } */

    changeToBatman = () => {
        this.setState({
            name: "Batman",
        });
    };

    changeToJackSparrow = () => {
        this.setState({
            name: "Jack Sparrow",
            age: 56,
        });
    };

    render() {
        console.log("%c RENDER() DU COMPOSANT PARENT", "color:red;");
        return (
            <div>
                <p>
                    <span className="red">Parent Component : </span>{" "}
                    {this.state.name}
                </p>
                <SimpleComponent name={this.state.name} />
                <PureComp name={this.state.name} age={this.state.age} />
                <FunctionComp name={this.state.name} />

                <button onClick={this.changeToBatman}>Changer en Batman</button>
                <button onClick={this.changeToJackSparrow}>
                    Changer en Jack Sparrow
                </button>
            </div>
        );
    }
}

export default ParentComponent;
