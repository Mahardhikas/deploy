import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

import { teamMembers } from "../data/index";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  //Auth Login
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
                About Us
              </h1>
              <p className="text-center">
                Mengenal lebih dekat tim Healthy Care yuk!
              </p>
            </Col>
          </Row>
          <Row>
            {teamMembers.map((team) => {
              return (
                <Col
                  key={team.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={team.delay}
                >
                  <img
                    src={team.image}
                    alt="unsplash.com"
                    className="w-100 mb-2 rounded-4"
                  />
                  <h5 className="mb-5 px-3">{team.name}</h5>
                  <h6 className="mb-1 px-3">{team.position}</h6>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-secondary fw-bold">{team.qoute}</p>
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

export default AboutPage;
