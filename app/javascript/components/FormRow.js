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
    if (this.state.disabled) return null
    if (this.state.col.validation) return this.state.col.validation(this.state.value)
    return null
  }

  title() {
    return this.state.col.title ? this.state.col.title : this.state.col.name
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  renderFormControl () {
    var type = this.state.col.type === "number" ? "number" : "text"
    return <FormControl
        disabled={this.state.disabled}
        type={type}
        value={this.state.value}
        placeholder="Enter text"
        onChange={this.handleChange}
      />
  }

  renderHelpBlock () {
    if (this.state.disabled) return null
    return <HelpBlock>{this.state.col.help}</HelpBlock>
  }

  render () {
    return (
      <FormGroup controlId="formBasicText"
        validationState={this.getValidationState()}>
        <ControlLabel>{this.title()}</ControlLabel>
        {this.renderFormControl()}
        <FormControl.Feedback />
        {this.renderHelpBlock()}
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
