import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { getOpertunitiesList } from 'actions/getOpertunitiesAction';
import Button from 'components/Common/Button';
import TextFiled from 'components/Common/TextBox';
import DatePicker from 'components/Common/DatePicker';
import DropDown from 'components/Common/DropDown';
import { updateOpertunitiesList } from 'actions/getOpertunitiesAction';
// import Styles from './style.scss';

class View extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      CloseDate:'',
      EndDate:'',
      StartDate:'',
      Description:'',
      Salary:''

    };
  }
  datePicker=(date,label)=>{
    this.setState({[label]:date})
  }
  handleSubmit = () => {
    const access_token = 'dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c';
    const formData = new FormData();
    formData.append('access_token', access_token);
    formData.append('title', 'general');
    formData.append('applications_close_date', 'previewImg');
    formData.append('earliest_start_date', 'previewImg');
    formData.append('latest_end_date', 'previewImg');
    formData.append('description', 'previewImg');
    formData.append('backgrounds', 'previewImg');
    formData.append('selection_process', 'previewImg');
    formData.append('opportunity[skill][id]', '3D Max');
    formData.append('salary', 'previewImg');
    formData.append('role_info.city', 'previewImg');
    formData.append('opportunity_id', 8491);
    this.props
      .updateOpertunitiesList(formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleText=(e,label)=>{
    console.log(e.target.value)
    this.setState({label:e.target.value});
  }
  render() {
    const menuItem =[1,3,45,65,6];
    const {CloseDate,StartDate,EndDate}=this.state;
    return (
      <div className="container">
        <TextFiled label="Title" />
        <DatePicker label="CloseDate" onChange={this.datePicker} value ={CloseDate}/>
        <DatePicker label="StartDate" onChange={this.datePicker} value ={StartDate}/>
        <DatePicker label="EndDate" onChange={this.datePicker} value ={EndDate}/>
        <TextFiled label="Description" onChange={(e)=>this.handleText(e,'Description')}/>
        <TextFiled label="Salary" onChange={(e)=>this.handleText(e,'Salary')}/>
        <DropDown menuItem ={menuItem}/>
        <DropDown menuItem ={menuItem}/>
        <DropDown menuItem ={menuItem}/>
        <DropDown menuItem ={menuItem}/>
        <Button label="update" onClick={this.handleSubmit} />
        
      </div>
    );
  }
}
export default connect(null, { updateOpertunitiesList })(View);
