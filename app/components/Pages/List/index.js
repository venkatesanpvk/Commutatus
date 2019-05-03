import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOpertunitiesList } from 'actions/getOpertunitiesAction';
import Button from 'components/Common/Button';
import Styles from './style.scss';

class OppertunitiesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.getOpertunitiesList();
  }
  viewData=(id,label)=>{
    if(label==='edit'){
      this.context.router.history.push(`/view?${id}`);
    }
    this.context.router.history.push(`/view?${id}&view`);
  }
  render() {
    const { listOfOpertunities } = this.props;
    return (
        <div className='container'>
          <table>
            <thead>
              <th>Name</th>
              <th>Edit</th>
              <th>View</th>
            </thead>
            <tbody>
              {!isEmpty(listOfOpertunities) &&
                listOfOpertunities.data.map((el, i) => (
                  <tr>
                    <td>{el.title}</td>
                    <td>
                      <Button label="Edit" onClick={this.viewData.bind(this,el.id,'edit')}/>
                    </td>
                    <td>
                      <Button label="View" blue onClick={this.viewData.bind(this,el.id,'view')}/>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
    );
  }
}
OppertunitiesList.contextTypes = {
  router: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  return {
    listOfOpertunities: state.getOpertunitiesList,
  };
}
export default connect(mapStateToProps, { getOpertunitiesList })(OppertunitiesList);
