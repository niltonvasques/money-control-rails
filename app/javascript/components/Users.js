import React from "react"
import PropTypes from "prop-types"
import { Table } from 'react-bootstrap'
import Grid from './Grid'
import UserModel from "../models/User"

class Users extends React.Component {
  render () {
    return (
        <Grid route='users' data={this.props.users} csrf_token={this.props.csrf_token}
          columns={UserModel.columns()}/>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array,
  csrf_token: PropTypes.string
};

export default Users
