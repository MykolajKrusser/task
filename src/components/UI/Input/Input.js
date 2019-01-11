import React from 'react';
import classes from './Input.css';

import Wrap from '../../../hoc/Wrap/Wrap';
import {DebounceInput} from 'react-debounce-input';

const input = (props)=>(
    <Wrap>
        <label className={classes.Label} htmlFor={props.id}>{props.labelText}</label>
        <DebounceInput
            id={props.id}
            className={classes.Input} 
            type={props.type} 
            value={props.value} 
            onChange={props.onChange}
            placeholder={props.placeholder}
            minLength={0}
            debounceTimeout={2000}
        />
    </Wrap>
);

export default input;