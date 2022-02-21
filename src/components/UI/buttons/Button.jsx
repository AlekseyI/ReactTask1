import React from 'react';
import classesBtn from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={classesBtn.btn + ' ' + classesBtn.btnBig} {...props}>{props.children}</button>
    );
};

export default Button;