import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';
import Form from "./Form"
import UserModel from "../models/User"

class User extends React.Component {
  render () {
    return (
      <Form columns={UserModel.columns()} data={this.props.user} disabled={!this.props.editable} />
    );
  }
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string
  }),
  editable: PropTypes.bool
};
export default User
