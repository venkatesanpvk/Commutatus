import React from 'react';

import styles from './style.scss';

const FormRow = props => <div className={[props.disabled && styles.disable,styles.formRow, props.className].join(' ')}>{props.children}</div>;

export default FormRow;
