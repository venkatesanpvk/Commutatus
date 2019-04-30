import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import Select from 'react-select';
import styles from './style.scss';

const cx = classnames.bind(styles);

class SelectDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };
  }
  handleChange = selectedOption => {
    console.log(selectedOption);
    this.setState({ selectedOption: selectedOption.label });
    // this.props.selectChange(selectedOption.value);
  };

  render() {
    const menuItems = [123434, 254545, 3544545, 454645645];
    const menuValues = [123434, 254545, 3544545, 454645645];
    const { menuItem, menuValue, error, value, reduceBottom, placeholder } = this.props;
    const menuGroup = menuItems.map((k, index) => ({
      label: k,
      value: menuValues[index],
    }));
    const { selectedOption } = this.state;
    const selectedValue = selectedOption && selectedOption.value;
    return (
      <Select
        name={'id'}
        matchPos="start"
        ignoreAccents={false}
        ignoreCase={false}
        onChange={this.handleChange}
        options={menuGroup}
        isSearchable={false}
        isMulti
        isDisabled={'isDisabled'}
        placeholder=""
        defaultValue=""
        classNamePrefix="react-select"
      />
    );
  }
}

SelectDropDown.propTypes = {
  selectChange: PropTypes.func,
  menuItem: PropTypes.array,
  menuValue: PropTypes.array,
  error: PropTypes.string,
  value: PropTypes.string,
  reduceBottom: PropTypes.bool,
};

export default SelectDropDown;
