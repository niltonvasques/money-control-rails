import React from "react"
import PropTypes from "prop-types"
import FormRow from './FormRow';
import { Button } from 'react-bootstrap'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: this.props.data,
      disabled: this.props.disabled === undefined ? false : this.props.disabled,
      route: this.props.route,
      csrf_token: this.props.csrf_token
    }
  }

  renderSubmitButton () {
    if (this.props.disabled) return null
    return <Button type="submit"> Submit </Button>
  }

  route () {
    var route = this.state.route
    if (this.state.data.id) route = `${route}/${this.state.data.id}`
    return route
  }

  render () {
    return (
      <form action={this.route()} method='post'>
        <input type='hidden' name='_method' value='put'/>
        <input type="hidden" name="authenticity_token" value={this.state.csrf_token} />
        {this.props.columns.map((col, index) => {
          return (
            <FormRow key={index} col={col} data={this.state.data} disabled={this.state.disabled} />
          )})
        }
        {this.renderSubmitButton()}
      </form>
    );
  }
}

Form.propTypes = {
  route: PropTypes.string,
  csrf_token: PropTypes.string,
  columns: PropTypes.array
};
export default Form
