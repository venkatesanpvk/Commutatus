import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseStyles from 'helpers/baseStyle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import TextFieldGroup from 'components/Common/TextBox';

import styles from './style.scss';

const pickerStyle = {
  textFieldStyle: {
    backgroundColor: 'transparent',
    left: 0,
    top: 0,
    height: '43px',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    zIndex: '1',
    color: '#000',
    paddingLeft: '15px',
  },
};

class DatePickerField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, date) {
    this.props.onChange(date, this.props.label);
  }
  render() {
    const { onChange, id, errors, value, maxDate, label,minDate,disabled } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseStyles)}>
        <div className={styles.datePickerAlign}>
          <TextFieldGroup
            id={id}
            error={errors}
            onChange={onChange}
            disabled={disabled}
            value={value}
            field={name}
            type="text"
            openDialog={() => this.datePicker.focus()}
            label={label}
          />
          {!disabled&&<DatePicker
            ref={c => {
              this.datePicker = c;
            }}
            hintText=""
            onChange={this.handleChange}
            autoOk
            minDate={minDate}
            maxDate={maxDate}
            textFieldStyle={pickerStyle.textFieldStyle}
          />}
        </div>
      </MuiThemeProvider>
    );
  }
}

DatePickerField.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  errors: PropTypes.string,
  maxDate: PropTypes.object,
};

export default DatePickerField;
