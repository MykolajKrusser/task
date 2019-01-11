import React from 'react';
import classes from './Button.css';


const button = (props)=>(
    <button 
        className={classes.Button}
        onClick={props.onClick}
        value={props.value}
        title={props.title}
    >{props.children}</button>
);

export default button;