import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

import '../Navbar/NavbarDefault.css'

export const NavbarDefault = () => {
  return (
    <div>
   <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#F1F3FF'}} variant="light">
  <Container>
  <Navbar.Brand className='logobrand' href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link className='linknavbar' href="#deets">Our Services</Nav.Link>
      <Nav.Link className='linknavbar' href="#deets">Why Us</Nav.Link>
      <Nav.Link className='linknavbar' href="#deets">Testimonial</Nav.Link>
      <Nav.Link className='linknavbar' href="#deets">FAQ</Nav.Link>
      <Button variant="success">Register</Button>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
