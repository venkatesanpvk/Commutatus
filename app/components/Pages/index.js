import React, { Component } from 'react';
import {isEmpty} from 'lodash';
import { connect } from 'react-redux';
import Glyphicon from './selectIcons';
import { getOpertunitiesList } from 'actions/getOpertunitiesAction';
import Styles from './style.scss';

class IconList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	selectedList:[]
    };
  }
  componentWillMount(){
    this.props.getOpertunitiesList().then(res=>{
      console.log(res)
    })
  }
  handleSelectedNames=(value,index)=>{
  	const { selectedList } =this.state;
     let flag =0;
     let Index;
     !isEmpty(selectedList)&&selectedList.map((el,i)=>{
      console.log(el.name,value.name)
      if(el === value.name){
        flag =1;
        Index=i;
      }
     });
     if(flag === 1){
      selectedList.splice(Index,1)
     }else{
      selectedList.push(value.name);
     }
    this.setState({selectedList})
  }
  render() {
    const {selectedList} =this.state;
    const {listOfIcons}=this.props;
    return (
    	<div className={Styles.wrap}>
        	<h3>Selected Icons</h3>
         
        </div>
    );
  }
}
function mapStateToProps(state){
  return{
    listOfIcons:state.getOpertunitiesList
  }
}
export default connect(mapStateToProps,{getOpertunitiesList})(IconList);