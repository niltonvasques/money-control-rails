import React from "react"
import PropTypes from "prop-types"
import { Table } from 'react-bootstrap'
import Grid from './Grid'

class Accounts extends React.Component {
  columns () {
    return [
      { name: 'id', title: "#" },
      { name: 'description' },
      { name: 'initial_balance' },
      { name: 'user_id' }
    ]
  }
  render () {
    return (
        <Grid route='accounts' data={this.props.accounts} csrf_token={this.props.csrf_token}
          columns={this.columns()}/>
    );
  }
}

Accounts.propTypes = {
  accounts: PropTypes.array,
  csrf_token: PropTypes.string
};

export default Accounts
