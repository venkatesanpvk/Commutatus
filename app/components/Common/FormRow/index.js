import React from 'react';

import styles from './style.scss';

const FormRow = props => <div className={[styles.formRow, props.className].join(' ')}>{props.children}</div>;

export default FormRow;
