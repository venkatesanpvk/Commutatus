import { isEmpty } from 'lodash';


export function validate(data){
	// :'',
 //      EndDate:'',
 //      Title:'',
 //      StartDate:'',
 //      Description:'',
 //      Salary:'',
 //      Backgrounds:'',
 //      City:'',
 //      Selection:'',
      const errors ={};
      console.log(data)
      if(isEmpty(data.Title)){
      	errors.Title = 'Please fill the title'
      }
      if(!isEmpty(data.Title) && data.Title.length>100){
      	errors.Title = 'Title should not be longer than 100 charecters'
      }
      if(isEmpty(data.EndDate)){
      	errors.EndDate = 'Please choose the endDate'
      }
      if(isEmpty(data.StartDate)){
      	errors.StartDate = 'Please choose  the startDate'
      }
      if(isEmpty(data.Description)){
      	errors.Description = 'Please fill the description'
      }
      if(isEmpty(data.Salary)){
      	errors.Salary = 'Please fill the salary'
      }
      if(isEmpty(data.Backgrounds)){
      	errors.Backgrounds = 'Please choose the backgrounds'
      }

      if(isEmpty(data.City)){
      	errors.City = 'Please choose the city'
      }
      if(isEmpty(data.Selection)){
      	errors.Selection = 'Please choose the selection process'
      }
      console.log(errors)
      return errors;
}