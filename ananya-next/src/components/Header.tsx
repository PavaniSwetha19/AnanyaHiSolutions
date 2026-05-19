"use client";

import Link from "next/link";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown, Offcanvas, Button } from "react-bootstrap";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Navbar expand="lg" variant="dark" sticky="top" className="custom-navbar" style={{ zIndex: 1030 }}>
        <Container>
          <Link href="/">
            <Navbar.Brand>
              <img
                src="/assets/front/images/ahs-logo.png"
                alt="AHS Logo"
                className="d-inline-block align-text-top"
                height={85}
              />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />

          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="primaryBgClr"
          >
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white fw-bold">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link href="/">
                  <Nav.Link as="span" onClick={handleClose}>Home</Nav.Link>
                </Link>
                <Link href="/about">
                  <Nav.Link as="span" onClick={handleClose}>About</Nav.Link>
                </Link>
                <NavDropdown title="Services" id="servicesDropdown">
                  <Link href="/website-design">
                    <NavDropdown.Item as="span" onClick={handleClose}>Website Design</NavDropdown.Item>
                  </Link>
                  <Link href="/digital-marketing">
                    <NavDropdown.Item as="span" onClick={handleClose}>Digital Marketing</NavDropdown.Item>
                  </Link>
                  <Link href="/mobile-application">
                    <NavDropdown.Item as="span" onClick={handleClose}>Mobile Application</NavDropdown.Item>
                  </Link>
                  <Link href="/ecommerce-application-development">
                    <NavDropdown.Item as="span" onClick={handleClose}>eCommerce Application</NavDropdown.Item>
                  </Link>
                  <Link href="/video-production">
                    <NavDropdown.Item as="span" onClick={handleClose}>Video Production</NavDropdown.Item>
                  </Link>
                  <Link href="/software-development">
                    <NavDropdown.Item as="span" onClick={handleClose}>Software Development</NavDropdown.Item>
                  </Link>
                </NavDropdown>
                <Link href="/our-portfolio">
                  <Nav.Link as="span" onClick={handleClose}>Portfolio</Nav.Link>
                </Link>
                <Link href="/contact">
                  <Nav.Link as="span" onClick={handleClose}>Contact Us</Nav.Link>
                </Link>
              </Nav>
              <div className="d-flex mt-3 mt-lg-0">
                <Link href="/ananya-hi-solutions-package" className="btn btn-package ms-lg-3">
                  <i className="bi bi-calendar-check me-2"></i> Choose Package
                </Link>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
