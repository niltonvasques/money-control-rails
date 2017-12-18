import React from "react"
import PropTypes from "prop-types"
import RowActions from './RowActions';

class GridRow extends React.Component {
  render () {
    return (
      <tr>
        {this.props.columns.map((col, index) => {
          return (
            <td key={index}>{this.props[col.name]}</td>
          )})
        }
        <td>
          <RowActions id={this.props.id} route={this.props.route}
                      csrf_token={this.props.csrf_token} />
        </td>
      </tr>
    );
  }
}

GridRow.propTypes = {
  columns: PropTypes.array,
  csrf_token: PropTypes.string,
  route: PropTypes.string
};
export default GridRow
