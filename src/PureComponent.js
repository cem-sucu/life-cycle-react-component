import React, { PureComponent } from "react";
import "./index.css";

class PureComp extends PureComponent {
    render() {
        console.log(
            "%c render() du PureComponent enfant simple",
            "color:green"
        );
        return (
            <div>
                <p>
                    <span className="green">PureComponent : </span>
                    {this.props.name} {this.props.age}
                </p>
            </div>
        );
    }
}

export default PureComp;
