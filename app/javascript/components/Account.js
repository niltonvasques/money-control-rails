import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';
import Form from "./Form"
import AccountModel from "../models/Account"

class Account extends React.Component {
  render () {
    return (
      <Form route={AccountModel.route()} columns={AccountModel.columns()} data={this.props.account}
            disabled={!this.props.editable} csrf_token={this.props.csrf_token} />
    );
  }
}
var shape = {}
AccountModel.columns().forEach(col => {
  shape[col.name] = PropTypes[col.type]
})
Account.propTypes = {
  account: PropTypes.shape(shape),
  csrf_token: PropTypes.string,
  editable: PropTypes.bool
}
export default Account
