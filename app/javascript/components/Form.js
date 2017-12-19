import React from "react"
import PropTypes from "prop-types"
import FormRow from './FormRow';

class Form extends React.Component {
  constructor (props) {
    super(props)
    var disabled = this.props.disabled === undefined ? false : this.props.disabled
    this.state = { data: this.props.data, disabled: disabled }
  }

  render () {
    return (
      <div>
      {this.props.columns.map((col, index) => {
        return (
          <FormRow key={index} col={col} data={this.state.data} disabled={this.state.disabled} />
        )})
      }
      </div>
    );
  }
}

Form.propTypes = {
  //route: PropTypes.string,
  //csrf_token: PropTypes.string
  columns: PropTypes.array
};
export default Form
