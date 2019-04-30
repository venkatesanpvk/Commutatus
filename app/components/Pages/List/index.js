import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { getOpertunitiesList } from 'actions/getOpertunitiesAction';
import Button from 'components/Common/Button';
import Styles from './style.scss';

class IconList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.getOpertunitiesList();
  }
  render() {
    const { listOfOpertunities } = this.props;
    console.log(listOfOpertunities);
    return (
      <div>
        <div>
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
                      <Button label="Edit" />
                    </td>
                    <td>
                      <Button label="View" blue />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    listOfOpertunities: state.getOpertunitiesList,
  };
}
export default connect(mapStateToProps, { getOpertunitiesList })(IconList);
