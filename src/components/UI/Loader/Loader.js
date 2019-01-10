import React from 'react';
import classes from './Loader.css';


const loader = (props)=>(
    <div className={classes.Loader}>
        <div class={classes.Lmain}>
            <div class={classes.Lsquare}><span></span><span></span><span></span></div>
            <div class={classes.Lsquare}><span></span><span></span><span></span></div>
            <div class={classes.Lsquare}><span></span><span></span><span></span></div>
            <div class={classes.Lsquare}><span></span><span></span><span></span></div>
        </div>
    </div>
);

export default loader;