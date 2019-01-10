import React from 'react';
import classes from './Input.css';

const input = (props)=>(
    <input 
        className={classes.Input} 
        type={props.type} 
        value={props.value} 
        onChange={props.onChange}
        placeholder={props.placeholder}
    />
);

export default input;