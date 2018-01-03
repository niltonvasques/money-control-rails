import React from "react"
import PropTypes from "prop-types"
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'
import inflection from 'inflection'

class FormRow extends React.Component {
  constructor (props) {
    super(props)
    var disabled = props.disabled || (props.col.editable === false)
    this.state = {
      value: props.data[props.col.name],
      col: props.col,
      disabled: disabled,
      route: props.route
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

  fieldName () {
    var route = inflection.singularize(this.state.route).replace('/', '')
    return `${route}[${this.state.col.name}]`
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
        name={this.fieldName()}
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
  col: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string
    //validation: PropTypes.string,
    //title: PropTypes.string,
    //validation: PropTypes.function,
    //help: PropTypes.string,
  }),
  data: PropTypes.object
}
export default FormRow
