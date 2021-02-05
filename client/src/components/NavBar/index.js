import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/">Google Books</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" style={{ color: "white" }}>
            Search
          </Nav.Link>
          <Nav.Link href="/saved" style={{ color: "white" }}>
            Saved
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
