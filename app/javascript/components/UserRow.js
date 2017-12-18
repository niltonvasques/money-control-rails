import React from "react"
import PropTypes from "prop-types"
import RowActions from './RowActions';

class UserRow extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.username}</td>
        <td>{this.props.email}</td>
        <td>
          <RowActions id={this.props.id} route='users' csrf_token={this.props.csrf_token} />
        </td>
      </tr>
    );
  }
}

UserRow.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  csrf_token: PropTypes.string
};
export default UserRow
