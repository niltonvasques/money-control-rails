import React from "react"
import PropTypes from "prop-types"
import { Table } from 'react-bootstrap'
import UserRow from './UserRow'
class Users extends React.Component {
  render () {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
      {this.props.users.map((user, index) => {
          return (
            <UserRow key={index} csrf_token={this.props.csrf_token} {...user} />
          )
        })
      }
        </tbody>
    </Table>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array,
  csrf_token: PropTypes.string
};
export default Users
