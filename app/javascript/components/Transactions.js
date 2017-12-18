import React from "react"
import PropTypes from "prop-types"
import { Table } from 'react-bootstrap'
import Grid from './Grid'

class Transactions extends React.Component {
  columns () {
    return [
      { name: 'id', title: "#" },
      { name: 'description' },
      { name: 'value' },
      { name: 'tags' },
      { name: 'account_id' }
    ]
  }
  render () {
    return (
        <Grid route='transactions' data={this.props.transactions} csrf_token={this.props.csrf_token}
          columns={this.columns()}/>
    );
  }
}

Transactions.propTypes = {
  transactions: PropTypes.array,
  csrf_token: PropTypes.string
};

export default Transactions
