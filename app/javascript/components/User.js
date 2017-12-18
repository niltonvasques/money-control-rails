import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';

class User extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Username: {this.props.username}</div>
        <div>Email: {this.props.email}</div>
        <Button>Primary</Button>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string
};
export default User
