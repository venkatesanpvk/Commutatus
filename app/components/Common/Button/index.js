import React, { Component } from 'react';
import Styles from './style.scss';

const Button = props => (
  <div className={[Styles.button, props.blue && Styles.bGcolor].join(' ')} onClick={props.onClick}>
    {props.label}
  </div>
);
export default Button;
