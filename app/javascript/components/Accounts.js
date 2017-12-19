import React from "react"
import PropTypes from "prop-types"
import { Table } from 'react-bootstrap'
import Grid from './Grid'
import AccountModel from '../models/Account'

class Accounts extends React.Component {
  render () {
    return (
        <Grid route='accounts' data={this.props.accounts} csrf_token={this.props.csrf_token}
          columns={AccountModel.columns()}/>
    );
  }
}

Accounts.propTypes = {
  accounts: PropTypes.array,
  csrf_token: PropTypes.string
};

export default Accounts
