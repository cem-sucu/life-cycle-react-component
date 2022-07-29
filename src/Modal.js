import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Modal extends Component {
    constructor(props) {
        super(props);

        this.popUpContainer = document.createElement("div");

        document.body.appendChild(this.popUpContainer);
    }

    componentWillUnmount() {
        document.body.removeChild(this.popUpContainer);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="modal" onClick={this.props.close}>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime eius, atque debitis quidem eos perferendis quod
                        officia saepe quae autem.
                    </p>
                    <button>Fermer</button>
                </div>
            </div>,
            this.popUpContainer
        );
    }
}

export default Modal;
