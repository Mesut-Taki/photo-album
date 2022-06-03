import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";

import { FiBell } from "react-icons/fi";
import { BsChatLeftDots } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi";
import { FaRegCompass } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>3gram</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <form className="searchCard">
              <input
                className="search"
                type="text"
                autoFocus="autofocus"
                placeholder="Search..."
              />
            </form>
            <Nav className="me-auto">
              <Nav.Link>
                <FiBell />
              </Nav.Link>
              <Nav.Link>
                <BsChatLeftDots />
              </Nav.Link>
              <Nav.Link>
                <HiOutlineUsers />
              </Nav.Link>
              <Nav.Link>
                <FaRegCompass />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Ryan Azhari
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
