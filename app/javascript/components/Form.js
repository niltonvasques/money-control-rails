import React from "react"
import PropTypes from "prop-types"
import FormRow from './FormRow';

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  render () {
    return (
      <div>
      {this.props.columns.map((col, index) => {
        return (
          <FormRow key={index} col={col} data={this.props.data} />
        )})
      }
      </div>
    );
  }
}
//<div key={index}>{col.title ? col.title : col.name}: {this.props.data[col.name]}</div>

Form.propTypes = {
  //route: PropTypes.string,
  //csrf_token: PropTypes.string
  columns: PropTypes.array
};
export default Form
