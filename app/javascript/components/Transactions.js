import React from "react"
import PropTypes from "prop-types"
import { Table } from 'react-bootstrap'
import Grid from './Grid'
import TransactionModel from '../models/Transaction'

class Transactions extends React.Component {
  render () {
    return (
        <Grid route='transactions' data={this.props.transactions} csrf_token={this.props.csrf_token}
          columns={TransactionModel.columns()}/>
    );
  }
}

Transactions.propTypes = {
  transactions: PropTypes.array,
  csrf_token: PropTypes.string
};

export default Transactions
