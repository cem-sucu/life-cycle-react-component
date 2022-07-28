import React, { Component } from "react";

class MyComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Spider-Man",
        };
        console.log("je suis dans le constructor()");
    }

    static getDerivedStateFromProps(props, state) {
        console.log(
            "%c getDerivedStateFromProps est lancé",
            "color:red; background:yellow; font-size:15px"
        );
        console.log(props);
        console.log(state);
        return null;
    }

    forcedChange = () => {
        this.forceUpdate(() => {
           console.log("je force le changement");
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("je suis dans shouldComponentUpdate");
    }

    render() {
        console.log("je suis dans le render()");
        return (
            <div>
                <p>Nom : {this.state.name}</p>
                <p>Age : {this.props.age}</p>
                <button onClick={this.forcedChange}>Forcé</button>
            </div>
        );
    }
}

export default MyComponent;
