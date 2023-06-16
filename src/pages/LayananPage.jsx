import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

import { semuaLayanan } from "../data/index";

import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

const LayananPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="kelas-page">
      <HomeNavbar />
      <div className="kelas min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                Semua Layanan
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Untuk membantu diet gizi seimbang anda.
              </p>
            </Col>
          </Row>
          <Row>
            {semuaLayanan.map((layanan) => {
              return (
                <Col
                  key={layanan.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={layanan.delay}
                >
                  <img
                    src={layanan.image}
                    alt="unsplash.com"
                    className="w-100 mb-5 rounded-4"
                  />
                  <h5 className="mb-5 px-3">{layanan.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <button className="btn btn-success rounded-1">
                      <NavLink to={layanan.path} className="nav-link">
                        {layanan.try}
                      </NavLink>
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default LayananPage;
