import React from 'react';
import classes from './input.module.css';

const Input = React.forwardRef((props, ref) => {
    return <input ref={ref} onChange={props.onChange} className={`${classes.input} ${props.className}`} placeholder={props.placeholder} type={props.type}></input>
});

export default Input;