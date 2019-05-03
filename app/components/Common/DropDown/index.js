import React from 'react';
// import classnames from 'classnames/bind';
import { map } from 'lodash';
import styles from './style.scss';
import TextBox from  'components/Common/TextBox';
// const cx = classnames.bind(styles);

class SelectDropDown extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      show:false,
      label:''
    };
  }
  handleClick=(e)=>{
    console.log(e)
    this.setState({show:!this.state.show,label:e})
  }
  handleClicks=()=>{
    this.setState({show:!this.state.show})
  }
  render() {
    const {show,label}=this.state;
    console.log(show)
    const list = [1,2,34,4]
    return (
      <div >
        <div className={styles.textBox}>
          <div onClick={this.handleClicks}>
            <TextBox value ={label} />
          </div>
          <span>label</span>
          <div className={[styles.dropDown,show && styles.show].join(' ')}>
            <ul>
            {list.map((el,i)=>(<li onClick={this.handleClick.bind(this,el)}>{el}</li>))}
            </ul>
          </div>
        </div>
        
      </div>
    );
  }
}

export default SelectDropDown;
