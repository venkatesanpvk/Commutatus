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
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClick=(e)=>{
    const{bg}=this.props;
    console.log(e)
    this.setState({show:!this.state.show,label:bg?e.name:e});
    this.props.onChange(bg?e.name:e,this.props.label)
  }
  handleClicks=()=>{
    this.setState({show:!this.state.show})
  }
  setWrapperRef=(node)=> {
    this.wrapperRef = node;
  }
  handleClickOutside=(event)=> {
    if (this.wrapperRef &&!this.wrapperRef.contains(event.target) ) {
      this.setState({show:false})
    }
  }

  render() {
    const {show,label}=this.state;
    const{menuItem,bg,value}=this.props;
    return (
      <div ref={this.setWrapperRef}>
        <div className={styles.textBox}>
          <div onClick={this.handleClicks}>
            <TextBox value ={value} />
          </div>
          <span>{this.props.label}</span>
          <div className={[styles.dropDown,show && styles.show].join(' ')}>
            <ul>
            {menuItem.map((el,i)=>(<li onClick={this.handleClick.bind(this,el)}>{bg ?el.name:el}</li>))}
            </ul>
          </div>
        </div>
        
      </div>
    );
  }
}

export default SelectDropDown;
