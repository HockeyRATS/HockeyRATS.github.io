import * as React from "react"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import {
  navbarLogo,
  navbarLinks,
  navbarToggle,
  navbarTop,
} from "./navbartop.module.css"

const logoPath: string =
  require("../images/hockeyrats-logo-cropped.svg").default

const NavbarTop: React.FC = () => {
  return (
    <Navbar fixed="top" variant="dark" expand="lg" className={navbarTop}>
      <Container>
        <Navbar.Brand href="/">
          <Image
            src={logoPath}
            alt="HockeyRATS navbar logo"
            fluid={true}
            className={navbarLogo}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarSupportedContent"
          aria-current="page"
          className={navbarToggle}
        />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto h5">
            <Nav.Link href="/" className={navbarLinks}>
              Home
            </Nav.Link>
            <Nav.Link href="/about" className={navbarLinks}>
              About
            </Nav.Link>
            <Nav.Link href="/lessons" className={navbarLinks}>
              Lessons
            </Nav.Link>
            <Nav.Link href="/contact" className={navbarLinks}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarTop
