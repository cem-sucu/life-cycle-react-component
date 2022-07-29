import React, { memo } from "react";

function FunctionComp(props) {
    console.log("%c render() FunctionComp enfant", "color:purple;");
    return (
        <div>
            <span className="purple">FunctionComp : </span>
            {props.name}
        </div>
    );
}
export default memo(FunctionComp);
