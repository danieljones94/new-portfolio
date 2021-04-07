import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SmallLogo from "../assets/icons/SmallLogo.png";
import "../styles/NavBar.css";
const NavBar = () => {
  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        className="animate-navbar justify-content-between"
      >
        <Navbar.Brand href="#home">
          <img src={SmallLogo} className="header-logo" alt="Portfolio Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skils</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
