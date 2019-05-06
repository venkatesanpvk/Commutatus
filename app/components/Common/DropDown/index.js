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
      label:'',
      multiSelect:this.props.isMulti ? this.props.value :[]
    };
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClick=(e)=>{
    const{bg,isMulti}=this.props;
    const {multiSelect} =this.state;
    if(isMulti){
      multiSelect.push(e.name);
      this.setState({multiSelect});
      this.props.onChange(multiSelect,this.props.label)
      return false;
    }
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
  removeLabel=(e)=>{
    const {multiSelect}=this.state;
    multiSelect.map((el,i)=>{
      if(el === e){
        multiSelect.splice(i,1);
      }
    });
    this.setState({multiSelect});
  }
  render() {
    const {show,label,multiSelect}=this.state;
    const{menuItem,bg,value,isMulti,error,disabled}=this.props;
    return (
      <div ref={this.setWrapperRef}>
        <div className={styles.textBox}>
          <div onClick={this.handleClicks}>
            <TextBox value ={!isMulti ? value:''} error={error} disabled ={disabled}/>
            {isMulti && <div className={styles.multiple}>
              <section>
              {multiSelect.map((el,i)=>(<span onClick={this.removeLabel.bind(this,el)}>{el}</span>))}
              </section>
            </div>}
          </div>
          <span className={styles.inputLabel}>{this.props.label}</span>
          {!disabled&&<div className={[styles.dropDown,show && styles.show].join(' ')}>
            <ul>
            {menuItem.map((el,i)=>(<li onClick={this.handleClick.bind(this,el)}>{bg ?el.name:el}</li>))}
            </ul>
          </div>}
        </div>
        
      </div>
    );
  }
}

export default SelectDropDown;
