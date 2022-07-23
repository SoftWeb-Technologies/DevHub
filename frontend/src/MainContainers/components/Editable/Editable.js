import React, { useState } from "react";

import CloseIcon from "../../../DevHubIcons/CloseIcon";

import "./Editable.css";

function Editable(props) {
    const [isEditable, setIsEditable] = useState(false);
    const [inputText, setInputText] = useState(props.defaultValue || "");

    const submission = (e) => {
        e.preventDefault();
        if (inputText && props.onSubmit) {
            setInputText("");
        }
        setIsEditable(false);
    };

    return (
        <div calssName="editable">
            {isEditable ? (
                <form
                className={`editable_edit ${props.editClass ? props.editClass : ""}`}
                onSubmit={submission}
                >
                    <input
                    type="text"
                    value={inputText}
                    placeholder={props.placeholder || props.text}
                    onChange={(event) => setInputText(event.target.value)}
                    autoFocus
                    />
                    <div className="editable_edit_footer">
                    <button type="submit">{props.buttonText || "Add"}</button>
                    <CloseIcon onClick={() => setIsEditable(false)} className="closeIcon" />
                    </div>                
                    </form>
            ) : (
                <p
                className={`editable_display ${
                    props.displayClass ? props.displayClass : ""
                }`}
                onClick={() => setIsEditable(true)}
                >
                    {props.text}
                </p>
            )}
        </div>
    );
}

export default Editable;