import React from "react"
import PropTypes from "prop-types"
import { Table } from 'react-bootstrap'
import Grid from './Grid'
class Users extends React.Component {
  columns () {
    return [
      { name: '#' },
      { name: 'name' },
      { name: 'username' },
      { name: 'email' }
    ]
  }
  render () {
    return (
      <Grid data={this.props.users} csrf_token={this.props.csrf_token}
        columns={this.columns()}/>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array,
  csrf_token: PropTypes.string
};
export default Users
