import React from "react";
import { Container, Nav, Navbar, NavDropdown, Badge } from "react-bootstrap";
import logo from "./../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth.js";
import "./header.css";

const Header = () => {
  const { AllContexts, selectedCourse } = useAuth();
  const { user, logOut } = AllContexts;
  const { displayName, photoURL, email } = user;
  return (
    <div className="">
      <Navbar className="bg-dark">
        <Container className=''>
          <Navbar.Brand as={NavLink} className="text-white" to="/home">
            <img width="70px" src={logo} alt="Logo" />{" "}
            <span className="title"> SamHospital</span>
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center navlink">
              <Nav.Link as={NavLink} to="/home" className="text-white">
                Home
              </Nav.Link>

              <Nav.Link as={NavLink} to="/about" className="text-white">
                About
              </Nav.Link>

              <Nav.Link as={NavLink} to="/contact" className="text-white">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/doctors" className="text-white">
                Doctors
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#feature" className="text-white">
                All Specialist
              </Nav.Link>

              <Nav.Link as={NavLink} to="/cart" className="text-white">
                <FontAwesomeIcon
                  style={{ fontSize: "20px" }}
                  icon={faShoppingCart}
                />
                <Badge>{selectedCourse.length}</Badge>
              </Nav.Link>

              {!displayName ? (
                <>
                  <Nav.Link as={NavLink} to="/signup" className="text-white">
                    Sign Up
                  </Nav.Link>

                  <Nav.Link className="text-white" as={NavLink} to="/login">
                    Log in
                  </Nav.Link>
                </>
              ) : (
                  <NavDropdown
                    title={
                      <img
                        style={{
                          width: "45px",
                          borderRadius: "50%",
                        }}
                        src={photoURL}
                        alt=""
                      />
                    }
                  >
                    <div className="text-center">
                      <h6>{displayName}</h6>
                      <p className="m-0 mb-2">{email}</p>
                      <button onClick={logOut} className="btn btn-primary">
                        Sign Out
                    </button>
                    </div>
                  </NavDropdown>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
