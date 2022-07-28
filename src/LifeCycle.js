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
        this.setState({
            name: this.props.name,
            step: this.state.step + 1,
        });
        console.log(
            `Etape ${this.state.step} : setState() à changé dans le componentDidMount()`
        );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(
            `Etape ${this.state.step} : je suis dans le componentDidUpdate()`
        );
        console.log(prevState);
        console.log(this.state);
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
                <ChildComponent />
            </div>
        );
    }
}

export default LifeCycle;
