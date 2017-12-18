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
      <div>
        <Grid route='users' data={this.props.users} csrf_token={this.props.csrf_token}
          columns={this.columns()}/>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array,
  csrf_token: PropTypes.string
};
export default Users
