import React, { Component } from "react";
import "./App.css";
import MyRef from "./MyRef";

class App extends Component {

    constructor(props) {
      super(props)
    
        this.refComponent = React.createRef();
    }
    render() {
        return (
            <div className="App">
                <MyRef ref={this.refComponent}/>
                <button onClick={handleClick}>Valider</button>
            </div>
        );
    }
}

export default App;
