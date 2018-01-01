import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';
import Form from "./Form"
import AccountModel from "../models/Account"

class Account extends React.Component {
  render () {
    return (
      <Form columns={AccountModel.columns()} data={this.props.account}
            disabled={!this.props.editable} />
    );
  }
}
var shape = {}
AccountModel.columns().forEach(col => {
  shape[col.name] = PropTypes[col.type]
})
Account.propTypes = {
  account: PropTypes.shape(shape),
  editable: PropTypes.bool
}
export default Account
