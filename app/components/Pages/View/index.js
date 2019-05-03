import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOpertunitiesList } from 'actions/getOpertunitiesAction';
import Button from 'components/Common/Button';
import TextFiled from 'components/Common/TextBox';
import DatePicker from 'components/Common/DatePicker';
import DropDown from 'components/Common/DropDown';
import { updateOpertunitiesList,getBackgrounds,getDatas } from 'actions/getOpertunitiesAction';
// import Styles from './style.scss';

class View extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      CloseDate:'',
      EndDate:'',
      Title:'',
      StartDate:'',
      Description:'',
      Salary:'',
      Backgrounds:'',
      City:'',
      Selection:'',
      id:'',
      type:''

    };
  }
  componentDidMount(){
    let id = window.location.href.split('?').pop();
    if(id.toString().length>4){
      id = id.split('&');
      console.log(id)
      id=id[0];
      this.setState({id:id,type:id[1]})
    }else{
      this.setState({id:id})
    }
    
    console.log(id)
    this.props.getBackgrounds();
    this.props.getDatas(id).then(res=>{
      console.log(res)
      this.setState({
        Title:res.data.title,
        CloseDate:res.data.applications_close_date,
        EndDate:res.data.latest_end_date,
        StartDate:res.data.earliest_start_date,
        Description:res.data.description,
        Salary:res.data.specifics_info.salary,
        Backgrounds:res.data.backgrounds[0].name,
        City:res.data.role_info.city,
        Selection:res.data.role_info.selection_process
      })
    })
  }
  datePicker=(date,label)=>{
    this.setState({[label]:moment(date).format('DD MM YYYY')})
  }
  handleSubmit = () => {
    const {CloseDate,StartDate,EndDate,Backgrounds,Description,Salary,City,Selection,Title,id}=this.state;
    const access_token = 'dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c';
    const formData = new FormData();
    formData.append('access_token', access_token);
    formData.append('opportunity[title]', Title);
    formData.append('opportunity[applications_close_date]', CloseDate);
    formData.append('opportunity[earliest_start_date]', StartDate);
    formData.append('opportunity[latest_end_date]', EndDate);
    formData.append('opportunity[description]', Description);
    formData.append('opportunity[backgrounds][option]', Backgrounds);
    formData.append('selection_process', Selection);
    formData.append('opportunity[skill][id]', '3D Max');
    formData.append('opportunity[specifics_info][salary] ', Salary);
    formData.append('opportunity[role_info][city]', City);
    formData.append('opportunity_id', id);
    this.props
      .updateOpertunitiesList(formData,id)
      .then(res => {
        this.context.router.history.push(`/`);
      })
    }
  handleDrop=(name,label)=>{
     this.setState({[label]:name});
  }
  handleText=(e,label)=>{
    console.log(label,e.target.value)
    // alert(1)
    this.setState({[label]:e.target.value});
  }
  render() {
    const menuItem =[1,3,45,65,6];
    const city = ['city1','city2','city3','city4']
    const {listOfBackgrounds}=this.props;
    const {CloseDate,StartDate,EndDate,Backgrounds,Description,Salary,City,Selection,Title}=this.state;
    const selection_array=['selection_process1','selection_process2','selection_process3']
    return (
      <div className="container">
        <TextFiled label="Title"  onChange={(e)=>this.handleText(e,'Title')} value ={Title} />
        <DatePicker label="CloseDate" onChange={this.datePicker} value ={CloseDate}/>
        <DatePicker label="StartDate" onChange={this.datePicker} value ={StartDate}/>
        <DatePicker label="EndDate" onChange={this.datePicker} value ={EndDate}/>
        <TextFiled label="Description" onChange={(e)=>this.handleText(e,'Description')} value ={Description}/>
        <TextFiled label="Salary" onChange={(e)=>this.handleText(e,'Salary')} value ={Salary}/>
       {!isEmpty(listOfBackgrounds)&& <DropDown menuItem ={listOfBackgrounds} label="Backgrounds" value ={Backgrounds} bg onChange={this.handleDrop}/>}
        <DropDown menuItem ={city} label="City" onChange={this.handleDrop} value ={City}/>
        <DropDown menuItem ={selection_array} label="Selection" onChange={this.handleDrop} value ={Selection}/>
        <Button label="update" onClick={this.handleSubmit} />
        
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {
    listOfBackgrounds: state.getBackgroundList,
  };
}

View.contextTypes = {
  router: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, {getDatas, updateOpertunitiesList,getBackgrounds })(View);
