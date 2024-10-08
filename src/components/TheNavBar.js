import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const TheNavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      data-bs-theme="dark"
      id="top"
    >
      <Navbar.Brand href="#" className="me-auto mx-5">
        JOHN DOE
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarrScroll"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse className="text-uppercase" id="navbarScroll">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/Services">
            Services
          </Nav.Link>
          <Nav.Link as={Link} to="/Realisations">
            Réalisations
          </Nav.Link>
          <Nav.Link as={Link} to="/Blog">
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/Contact">
            Me contacter
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TheNavBar;
