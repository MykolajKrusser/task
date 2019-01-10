import React from 'react';
import classes from './Input.css';

import Wrap from '../../../hoc/Wrap/Wrap';

const input = (props)=>(
    <Wrap>
        <label className={classes.Label} htmlFor={props.id}>{props.labelText}</label>
        <input
            id={props.id}
            className={classes.Input} 
            type={props.type} 
            value={props.value} 
            onChange={props.onChange}
            placeholder={props.placeholder}
        />
    </Wrap>
);

export default input;