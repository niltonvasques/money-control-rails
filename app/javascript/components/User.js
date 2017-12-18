import React from "react"
import PropTypes from "prop-types"
class User extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Username: {this.props.username}</div>
        <div>Email: {this.props.email}</div>
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
