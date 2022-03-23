import React, { useState } from 'react';
import {
  Collapse,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar className="App-header sticky-top" color="dark" dark expand="md">
        <NavbarBrand className="nav-brand" href="/">ABC Hardware Services</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/products/">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/home/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Kontakt</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Header;