import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';

class Form extends React.Component {
  render () {
    return (
      <div>
      {this.props.columns.map((col, index) => {
        return (
          <div key={index}>{col.title ? col.title : col.name}: {this.props.data[col.name]}</div>
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
