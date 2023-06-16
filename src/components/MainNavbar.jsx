import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import Logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const HeaderNavbar = () => {
  const [changeColor, setChangeColor] = useState(false);
  const navigate = useNavigate();

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <Navbar
        expand="lg"
        bg="light"
        className={changeColor ? "color-active" : ""}
      >
        <Container>
          <Navbar.Brand href="/" className="fs-3 fw-bold">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center"></Nav>
            <div className="text-center">
              <button
                className="btn btn-outline-success rounded-1"
                onClick={() => navigate("/login")}
              >
                Masuk
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;
