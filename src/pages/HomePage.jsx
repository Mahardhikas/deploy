import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

import HeroImage from "../assets/img/main-pic.png";
import { dataSwiper } from "../data/index";

// Import styles
import "swiper/css";
import "swiper/css/pagination";

const HomePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  //Auth Login
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  //Display Name
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  return (
    <div className="homepage">
      <HomeNavbar />
      {/* Hero Section  */}
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                Welcome <span>{name}</span>, <br /> di Healthy Care
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Control diet dan gizi seimbangmu sekarang dengan Healthy Care.
                Solusi Cerdas Diet Gizi seimbang!
              </p>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="hero-img"
                className="animate__animated animate__fadeInUp"
              />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Testimoni Section  */}
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold my-5">Testimonial</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm">
                    <p className="desc">{data.desc}</p>
                    <div className="people">
                      <img src={data.image} alt="" />
                      <div>
                        <h5 className="mb-1">{data.name}</h5>
                        <p className="m-0 fw-bold">{data.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
