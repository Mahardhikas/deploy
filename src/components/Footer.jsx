import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.png";
import Danone from "../assets/img/danone.png";
import Skilvul from "../assets/img/skilvul.png";

const Footer = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <img src={Logo} alt="" />
            <p className="desc fw-bold">Solusi Cerdas Diet Gizi seimbang!</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 123-4567-8910</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">healthycare@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="/home">Home</Link>
            <Link to="/layanan">Layanan</Link>
            <Link to="/artikel">Artikel</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
            <h5 className="fw-bold mb-3">Mitra & Challenge</h5>
            <div className="subscribes">
              <img src={Danone} />
              <img src={Skilvul} />
            </div>
            <div className="social mt-3">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3">
              &copy; Copyright {new Date().getFullYear()} by{" "}
              <span className="fw-bold">FE34 & BE16</span>, All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
