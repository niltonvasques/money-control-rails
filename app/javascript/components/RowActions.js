import React from "react"
import PropTypes from "prop-types"
import { Button } from 'react-bootstrap';
class RowActions extends React.Component {
  render () {
    return (
      <div>
        <Button href={`/${this.props.route}/${this.props.id}`}>Show</Button>
        <Button href={`/${this.props.route}/${this.props.id}/edit`}>Edit</Button>
        <form action={`/${this.props.route}/${this.props.id}`} method='post'
          style={{display: 'inline'}}>
          <input type='hidden' name='_method' value='delete'/>
          <input type="hidden" name="authenticity_token" value={this.props.csrf_token}/>
          <Button bsStyle='danger' type="submit">Delete</Button>
        </form>
      </div>
    );
  }
}

RowActions.propTypes = {
  id: PropTypes.number,
  route: PropTypes.string,
  csrf_token: PropTypes.string
};
export default RowActions
