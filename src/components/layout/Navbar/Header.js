import React, { Component, Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { HeaderLink } from "./HeaderLink";
import { animateScroll as scroll } from "react-scroll";

import logo from "./images/logo_white_45.png";

export class Header extends Component {
  toTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
          <a onClick={this.toTop}>
            <Navbar.Brand>
              <img
                id="logo"
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <HeaderLink text="Home" link="home" />
              <HeaderLink text="About" link="about" />
              <HeaderLink text="Experience" link="experience" />
              <HeaderLink text="Portfolio" link="portfolio" />
              <HeaderLink text="Contact" link="contact" />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
export default Header;
