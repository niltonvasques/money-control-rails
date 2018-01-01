import React from "react"
import PropTypes from "prop-types"
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

class FormRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.data[this.props.col.name],
      col: this.props.col,
      disabled: this.props.disabled,
    }
  }

  getValidationState() {
    const length = this.state.value.length
    if (length > 10) return 'success'
    else if (length > 5) return 'warning'
    else if (length > 0) return 'error'
    return null
  }

  title() {
    return this.state.col.title ? this.state.col.title : this.state.col.name
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  row () {
    var type = this.state.col.type === "number" ? "number" : "text"
    return <FormControl
        disabled={this.state.disabled}
        type={type}
        value={this.state.value}
        placeholder="Enter text"
        onChange={this.handleChange}
      />
  }

  render () {
    return (
      <FormGroup controlId="formBasicText"
        validationState={this.getValidationState()}>
        <ControlLabel>{this.title()}</ControlLabel>
        {this.row()}
        <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>
      </FormGroup>
    )
  }
}

FormRow.propTypes = {
  disabled: PropTypes.bool,
  //col: PropTypes.string,
  //data: PropTypes.string
}
export default FormRow
