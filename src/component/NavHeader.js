import React from 'react';
import { BsTelephoneInbound } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Whatsapp from './Whatsapp';
const NavHeader = () => {
  return (
    <>
      <Navbar className="main-nav" expand="lg">
        <Container className="bg-Nav">
          <NavLink to="/">
            <Navbar.Brand className="brand-logo">
              <img src="assets/banner/Nk-logo.png" alt="" />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink to="/about" className="edit">
                About us
              </NavLink>
              <NavLink to="/products" className="edit">
                products
              </NavLink>

              <NavLink to="/Manufacture" className="edit">
                manufacture
              </NavLink>
              <NavLink to="/ContactPage" className="edit">
                contact us
              </NavLink>
            </Nav>

            <div>
              <h6 class="animate-charcter"> Only wholesale </h6>
              <h6>GST No:- 27AAFPU2059N1Z4</h6>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Whatsapp />
    </>
  );
};

export default NavHeader;
