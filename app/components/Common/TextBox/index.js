import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import FormRow from '../FormRow';
import styles from './style.scss';

const cx = classnames.bind(styles);

class TextFieldGroup extends Component {
  onKeyPress(type, value, evt) {
    if (type === 'InputNumber' && evt.which === 46) {
      evt.preventDefault();
    }
  }
  render() {
    const {
      id,
      value,
      label,
      error,
      type,
      onChange,
      tabIndex,
      maxLength,
      style,
      disabledColor,
      readOnly,
      name,
      placeholder,
      fragType,
      onKeyUp,
      autoComplete,
    } = this.props;
    const className = cx({
      formGroup: true,
      hasError: (type === 'text' && error) || (type === 'email' && error),
    });
    return (
      <FormRow className={className}>
        <label htmlFor={id}>{label}</label>
        <input
          onChange={onChange}
          onKeyUp={onKeyUp}
          onKeyPress={this.onKeyPress.bind(this, fragType, value)}
          value={value}
          type={type}
          name={name}
          className={[styles.formGroupInput, disabledColor && styles.disabledColor].join(' ')}
          id={id}
          maxLength={maxLength}
          placeholder={placeholder}
          tabIndex={tabIndex}
          style={style}
          readOnly={readOnly}
          autoComplete={autoComplete}
        />

        {(error && value === '') ||
          (type === 'text' && error) ||
          (type === 'email' && error) ||
          (type === 'password' && error && <span className={styles.helpBlock}>{error}</span>)}
      </FormRow>
    );
  }
}

TextFieldGroup.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  error: PropTypes.string,
  tabIndex: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  disabledColor: PropTypes.bool,
  readOnly: PropTypes.bool,
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
