import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';
import Form from "./Form"
import TransactionModel from "../models/Transaction"

class Transaction extends React.Component {
  render () {
    return (
      <Form route={TransactionModel.route()} columns={TransactionModel.columns()}
            data={this.props.transaction} disabled={!this.props.editable}
            csrf_token={this.props.csrf_token} />
    );
  }
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string
  }),
  csrf_token: PropTypes.string,
  editable: PropTypes.bool
};
export default Transaction
