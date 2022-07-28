import React, { Component } from "react";

export class ChildComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        console.log(`je suis dans le constructor() Enfant`);
    }

    componentDidMount() {
        console.log("je suis dans le componentDidMount() Enfant");
    }
    

    render() {
        console.log(`je suis dans le render() Enfant`);
        return (
            <div>
                {console.log(`mise a jour DOM dans le composant Enfant`)}
                ChildComponent
            </div>
        );
    }
}

export default ChildComponent;
