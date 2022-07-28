import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export class LifeCycle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Toto",
            step: 1,
        };
        console.log(`Etape ${this.state.step} : je suis dans le constructor()`);
    }

    componentDidMount() {
        console.log(
            `Etape ${this.state.step} : je suis dans le componentDidMount()`
        );
    }

    render() {
        console.log(`Etape ${this.state.step} : je suis dans le render()`);
        return (
            <div>
                {console.log(
                    `Etape ${this.state.step} : je suis dans le DOM()`
                )}
                <p>Chargement : {this.state.step}</p>
                <p>Name : {this.state.name}</p>
                <ChildComponent/>
            </div>
        );
    }
}

export default LifeCycle;
