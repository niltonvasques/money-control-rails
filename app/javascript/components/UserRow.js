import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';

class UserRow extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.username}</td>
        <td>{this.props.email}</td>
        <td>
          <Button href={`/users/${this.props.id}`}>Show</Button>
          <Button href={`/users/${this.props.id}/edit`}>Edit</Button>
          <form action={`/users/${this.props.id}`} method='post' style={{display: 'inline'}}>
            <input type='hidden' name='_method' value='delete'/>
            <input type="hidden" name="authenticity_token" value={this.props.csrf_token}/>
            <Button bsStyle='danger' type="submit">Delete</Button>
          </form>
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
