import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';
import Form from "./Form"
import UserModel from "../models/User"

class User extends React.Component {
  render () {
    return (
      <Form route={UserModel.route()} columns={UserModel.columns()} data={this.props.user}
            disabled={!this.props.editable} csrf_token={this.props.csrf_token} />
    );
  }
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string
  }),
  csrf_token: PropTypes.string,
  editable: PropTypes.bool
};
export default User
