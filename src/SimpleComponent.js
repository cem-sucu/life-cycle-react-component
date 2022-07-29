import React, { Component } from "react";
import "./index.css";

class SimpleComponent extends Component {
    render() {
        console.log("%c render() du composant enfant simple", "color:blue");
        return (
            <div>
                <p>
                    <span className="blue">Simple Component : </span>
                    {this.props.name}
                </p>
            </div>
        );
    }
}

export default SimpleComponent;
