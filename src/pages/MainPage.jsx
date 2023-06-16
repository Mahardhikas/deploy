import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { dataSwiper, semuaLayanan } from "../data/index";
import { Swiper, SwiperSlide } from "swiper/react";

import HeroImage from "../assets/img/main-pic.png";

// Component
import MainNavbar from "../components/MainNavbar";
import FaqComponent from "../components/FaqComponent";
import Footer from "../components/Footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    // Jika token ada, redirect ke halaman home
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="homepage">
      <MainNavbar />

      {/* Hero Section  */}
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1 className="mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                Diet <span>Sehat,</span> <br /> Gizi Seimbang
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Diet sesuai pola makan untuk memenuhi angka kebutuhan gizi dan
                dapatkan tubuh ideal mu. Pilih makanan sehatmu dan control
                diet-mu sekarang dengan Healthy Care. Solusi Cerdas Diet Gizi
                seimbang!
              </p>
              <button
                className="btn btn-success btn-lg rounded-2 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
                onClick={() => navigate("/register")}
              >
                Mulai Sekarang!
              </button>
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

      {/* Layanan Section  */}
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Layanan Kami</h1>
              <p className="text-center">
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
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

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

      {/* Section FaQ  */}
      <FaqComponent />
      <Footer />
    </div>
  );
};

export default MainPage;
