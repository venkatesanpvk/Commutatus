import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import axios from 'axios';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOpertunitiesList } from 'actions/getOpertunitiesAction';
import Button from 'components/Common/Button';
import TextFiled from 'components/Common/TextBox';
import DatePicker from 'components/Common/DatePicker';
import DropDown from 'components/Common/DropDown';
import { validate } from 'components/Common/validation';
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
      Backgrounds:[],
      City:'',
      Selection:'',
      id:'',
      type:'',
      errors:{}

    };
  }
  componentDidMount(){
    const proxy ='https://cors-anywhere.herokuapp.com/';
    const url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=AIzaSyBg_2Hlj_w6iSJ5xCKvpGnyTnmKDFQxONo';
    axios.get(proxy+url)
    .then(result=>{
     
    })
    let id = window.location.href.split('?').pop();
    const {Backgrounds} =this.state;
    if(id.toString().length>4){
      let ids = id.split('&');
      id=ids[0];
      this.setState({id:id,type:ids[1]})
    }else{
      this.setState({id:id})
    }
    this.props.getBackgrounds();
    this.props.getDatas(id).then(res=>{
      this.setState({
        Title:res.data.title,
        CloseDate:moment(res.data.applications_close_date).format('DD-MM-YYYY'),
        EndDate:moment(res.data.latest_end_date).format('DD-MM-YYYY'),
        StartDate:moment(res.data.earliest_start_date).format('DD-MM-YYYY'),
        Description:res.data.description,
        Salary:res.data.specifics_info.salary,
        Backgrounds:res.data.backgrounds[0].name,
        City:res.data.role_info.city,
        Selection:res.data.role_info.selection_process
      });
     !isEmpty(res.data.backgrounds)&& res.data.backgrounds.map((el,i)=>{
          Backgrounds.push(el.name)
      });
     this.setState({Backgrounds});
    })
  }
  datePicker=(date,label)=>{
    this.setState({[label]:moment(date).format('DD-MM-YYYY')})
  }
  handleSubmit = () => {
    if(this.isValid()){
      const {CloseDate,StartDate,EndDate,Backgrounds,Description,Salary,City,Selection,Title,id}=this.state;
      const access_token = 'dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c';
      const a = ['3D Max'];
      const formData = new FormData();
      formData.append('access_token', access_token);
      formData.append('opportunity[title]', Title);
      formData.append('opportunity[applications_close_date]', CloseDate);
      formData.append('opportunity[earliest_start_date]', StartDate);
      formData.append('opportunity[latest_end_date]', EndDate);
      formData.append('opportunity[description]', Description);
      formData.append('opportunity[backgrounds][option]',Backgrounds);
      formData.append('opportunity[role_info][selection_process]', Selection);
      formData.append('opportunity[skill][id]', a);
      // formData.append('opportunity[specifics_info][salary]',10000);
      formData.append('opportunity[role_info][city]', City);
      formData.append('opportunity_id', id);
      this.props
        .updateOpertunitiesList(formData,id)
        .then(res => {
          this.context.router.history.push(`/`);
        })
      }
  }
  isValid(){
    const data =this.state;
    const message = validate(data);
    if(isEmpty(message)){
      return true;
    }else{
      this.setState({errors:message})
    }
  }
  handleDrop=(name,label)=>{
     this.setState({[label]:name});
  }
  handleText=(e,label)=>{
    // alert(1)
    this.setState({[label]:e.target.value});
  }
  render() {
    const city = ['Chennai','Mumbai','Banglore','Kolkata','Delhi']
    const {listOfBackgrounds}=this.props;
    const {CloseDate,StartDate,EndDate,Backgrounds,Description,Salary,City,Selection,Title,errors,type}=this.state;
    const selection_array=['selection_process1','selection_process2','selection_process3'];
    const date = new Date();
    const closeMindate = moment(date, "DD-MM-YYYY").add('days', 30);
    const closeMaxdate = moment(date, "DD-MM-YYYY").add('days', 90);
    const earliestMin  = moment(StartDate, "DD-MM-YYYY").add('days', 43);
    const earliestMax = moment(StartDate, "DD-MM-YYYY").add('days', 547);
    return (
      <div className="container">
        <TextFiled label="Title"  
          onChange={(e)=>this.handleText(e,'Title')} 
          value ={Title} 
          disabled={type === 'view'}
          error={errors.Title}/>
        <DatePicker 
          label="CloseDate" 
          onChange={this.datePicker} 
          value ={CloseDate}
          minDate={closeMindate._d}
          maxDate={closeMaxdate._d}
          disabled={type === 'view'}
          error={errors.CloseDate}/>
      
        <DatePicker 
          label="StartDate" 
          onChange={this.datePicker} 
          value ={StartDate}
          disabled={type === 'view'}
          error={errors.StartDate}/>
        <DatePicker 
          label="EndDate" 
          disabled={type === 'view'}
          onChange={this.datePicker} 
          value ={EndDate}
          minDate={earliestMin._d}
          maxDate={earliestMax._d}
          error={errors.EndDate}/>
        <TextFiled 
          label="Description" 
          disabled={type === 'view'}
          onChange={(e)=>this.handleText(e,'Description')} 
          value ={Description}
          error={errors.Description}/>
        <TextFiled 
          label="Salary" 
          disabled={type === 'view'}
          onChange={(e)=>this.handleText(e,'Salary')} 
          value ={Salary}
          error={errors.Salary}/>
       {!isEmpty(listOfBackgrounds)&& <DropDown 
          menuItem ={listOfBackgrounds} 
         label="Backgrounds" 
         value ={Backgrounds} 
         disabled={type === 'view'}
         bg 
         onChange={this.handleDrop} 
         isMulti
         error={errors.Backgrounds}/>}
        <DropDown 
          menuItem ={city} 
          disabled={type === 'view'}
          label="City" 
          onChange={this.handleDrop} 
          value ={City}
          error={errors.City}/>
        <DropDown 
          menuItem ={selection_array} 
          label="Selection" 
          disabled={type === 'view'}
          onChange={this.handleDrop} 
          value ={Selection}
          error={errors.Selection}/>
          <Button 
          label="update" 
          onClick={this.handleSubmit} />
        
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    listOfBackgrounds: state.getBackgroundList,
  };
}

View.contextTypes = {
  router: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, {getDatas, updateOpertunitiesList,getBackgrounds })(View);
