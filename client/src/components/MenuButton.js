import React from 'react'

const MenuButton = (props) => {

    const [state, setState] = React.useState({ active: true, bgColor: "" });

    function check () {
        if (state.active) setState({ ...state, bgColor: "black" });
    };



    return(
        <button
            className={props.myStyle === props.passedValue ? "breakfast" : "btn"}
            value={props.passedValue}
            onClick={props.action}
            style={{ background: `${props.bgColor}` }}
        >
        {props.btnText}
        </button>
    )
}

export default MenuButton;