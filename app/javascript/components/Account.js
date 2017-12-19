import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';
import Form from "./Form"
import AccountModel from "../models/Account"

class Account extends React.Component {
  render () {
    return (
      <Form columns={AccountModel.columns()} data={this.props} />
    );
  }
}
Account.propTypes = {}
AccountModel.columns().forEach(col => {
  Account.propTypes[col.name] = PropTypes[col.type]
})
export default Account
