import React, { Component } from 'react';
import Styles from './style.scss';

class SelectIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:this.props.listOfIcons.result
    };
  }
  handleSelect=(value,index)=>{
    const {data}=this.state;
    data[index].status=!this.state.data[index].status;
    this.setState({data});
    this.props.updateList(value,index);
  }
  render() {
    const { data } = this.state; 
    return (
    	<React.Fragment>
        	<h3>Available Icons</h3>
          <ul>
          {data.map((el,i)=>(
              <li className={[Styles.iconList,el.status && Styles.highLight].join(' ')} onClick={this.handleSelect.bind(this,el,i)}>
                <span><i class={`${el.className}`}></i> {el.name}</span>
              </li>
            ))}
          </ul>
        </React.Fragment>
    );
  }
}

export default SelectIcons;