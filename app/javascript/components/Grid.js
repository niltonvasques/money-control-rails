import React from "react"
import PropTypes from "prop-types"
import { Table } from 'react-bootstrap'
import UserRow from './UserRow'
class Grid extends React.Component {
  render () {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            {this.props.columns.map((col, index) => {
              return (
                <th key={index}>{col.name}</th>
              )})
            }
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((item, index) => {
              return (
                <UserRow key={index} csrf_token={this.props.csrf_token} {...item} />
              )
            })
          }
        </tbody>
    </Table>
    );
  }
}

Grid.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  csrf_token: PropTypes.string
};
export default Grid
