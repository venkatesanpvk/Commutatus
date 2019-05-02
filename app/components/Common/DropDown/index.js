import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { map } from 'lodash';
import { connect } from 'react-redux';
import { replaceLabels } from 'helpers/utils';
import Select from 'react-select';
import styles from './style.scss';
import TextBox from  'components/Common/TextBox';
const cx = classnames.bind(styles);

class SelectDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      fieldNotEmpty: false,
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
    // if(this.props.id==='funtions' || this.props.id==='schoolName'){
    //     this.props.selectChange(selectedOption, this.props.id);
    // }else{
    //     this.props.selectChange(selectedOption.value, this.props.id);
    // }
  }

  render() {
    const { minWidth,menuItem, menuValue, id, error, label, value, selectLabel, reduceBottom, countText, isDisabled, isMulti, firstAlign, readOnly, isSearchable, noErrorInfo } = this.props;
    const menuGroup = map(menuItem,(k, index) => ({ label:k, value: menuItem[index] }));
    const { fieldNotEmpty } = this.state;
    const className = cx({
      dropAlign: true,
      hasError: error && value === '',
      hasSuccess: fieldNotEmpty || value !== '',
    });
    const { selectedOption } = this.state;
    console.log(selectedOption)
    const selectedValue = selectedOption && selectedOption.value;
    return (
      <div className={[readOnly && styles.readOnly, styles.dropAlign, minWidth && styles.minWidth, firstAlign && styles.firstAlign, reduceBottom && styles.reduceBottom].join(' ')}>
      <TextBox value ={selectedOption.label}/>
        <Select
          name={id}
          matchPos="start"
          ignoreAccents={false}
          ignoreCase={false}
          placeholder={value !== '' ? value : selectLabel}
          onChange={this.handleChange}
          options={menuGroup}
          isMulti
          isDisabled={isDisabled}
          className={[className, 'react-select-container', styles.dropText].join(' ')}
          classNamePrefix="react-select"
          defaultValue={'selectedValue'}
          isSearchable= {isSearchable}
        />
        {countText !== undefined && <span className={styles.countLabel}>{countText}</span>}
        {error && value === '' ? <div className={styles.errorBlock}>
          {noErrorInfo?"":<span className={styles.ErrorInfo}><i className="fa fa-info" aria-hidden="true" /></span>}
          <span className={styles.helpBlock}>{error}</span></div> : ''}
      </div>
    );
  }
}

SelectDropDown.propTypes = {
  selectChange: PropTypes.func,
  menuItem: PropTypes.array,
  menuValue: PropTypes.array,
  id: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  selectLabel: PropTypes.string,
  reduceBottom: PropTypes.bool,
  firstAlign: PropTypes.bool,
  readOnly: PropTypes.bool
};
export default SelectDropDown;
