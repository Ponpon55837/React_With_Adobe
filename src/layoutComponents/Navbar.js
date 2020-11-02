import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavbarConent = () => {

  return (
    <Navbar bg='light' collapseOnSelect expand="lg">
      <Navbar.Brand className='navColor' href="/">React Adobe</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto navColor">
          <Nav.Link href="/">Profile</Nav.Link>
          <Nav.Link href="/contacts">Contacts</Nav.Link>
          <Nav.Link href="/photo">Photo</Nav.Link>
          <Nav.Link >Log In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarConent
