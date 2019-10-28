import React, { Component, Fragment } from "react";
import Container from "react-bootstrap/Container";
import { animateScroll as scroll } from "react-scroll";

import Header from "./layout/Navbar/Header";
import Canvas from "./layout/Canvas/Canvas";

import About from "./layout/Sections/About/About";
import Experience from "./layout/Sections/Experience/Experience";
import Portfolio from "./layout/Sections/Portfolio/Portfolio";
import Contact from "./layout/Sections/Contact/Contact";

class App extends Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Fragment>
        <Canvas />
        <Header />
        <div className="sections">
          <Container>
            <About />
          </Container>
          <Container>
            <Experience />
          </Container>
          <Container>
            <Portfolio />
          </Container>
          <Container>
            <Contact />
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default App;
