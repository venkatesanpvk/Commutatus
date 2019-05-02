import React, { Component } from 'react';
import Select from 'react-select';

export default class OnSelectResetsInput extends Component {
  state = {
    inputValue: '',
  }
  onInputChange = (inputValue, { action }) => {
    switch (action) {
      case 'input-change':
        this.setState({ inputValue });
        return;
      case 'menu-close':
        let menuIsOpen;
        if (this.state.inputValue) {
          menuIsOpen = true;
        }
        this.setState({
          menuIsOpen
        });
        break;
      default:
    }
  }
  render () {
    const { inputValue, menuIsOpen } = this.state;
    const OptionsList = [1.34,65,56,67]
    return (
      <Select
        isMulti
        defaultValue="Please select school"
        isClearable
        isSearchable
        inputValue={inputValue}
        onInputChange={this.onInputChange}
        name="color"
        options={OptionsList}
        menuIsOpen={menuIsOpen}
        className='react-select-container'
        classNamePrefix="react-select"
        styles={{height:50, backgroundColor:'red'}}
      />
    );
  }
};