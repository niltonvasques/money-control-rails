import React from "react"
import PropTypes from "prop-types"
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Menu extends React.Component {
  render () {
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Finances</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/users">Users</NavItem>
              <NavItem eventKey={2} href="/accounts">Accounts</NavItem>
              <NavItem eventKey={3} href="/transactions">Transactions</NavItem>
              <NavDropdown eventKey={4} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={4.1}>Action</MenuItem>
                <MenuItem eventKey={4.2}>Another action</MenuItem>
                <MenuItem eventKey={4.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu
