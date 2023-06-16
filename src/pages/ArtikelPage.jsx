import { useNavigate } from "react-router-dom";
import diet1 from "../assets/img/diet1.jpg";
import diet2 from "../assets/img/diet2.jpeg";
import diet3 from "../assets/img/diet3.jpg";
import diet5 from "../assets/img/diet5.jpg";
import diet6 from "../assets/img/diet6.jpg";
import diet7 from "../assets/img/diet7.jpeg";
import diet8 from "../assets/img/diet8.jpg";
import "../css/article.css";
import { BsHeartFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

const ArtikelPage = () => {
  const navigate = useNavigate();
  // Auth Login
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      const storedUserId = localStorage.getItem("user_id");
      setUserId(storedUserId);
    }
  }, [navigate]);

  const [heartClicked, setHeartClicked] = useState({
    1: { id: 1, clicked: false, liked: false },
    2: { id: 2, clicked: false, liked: false },
    3: { id: 3, clicked: false, liked: false },
    4: { id: 4, clicked: false, liked: false },
    5: { id: 5, clicked: false, liked: false },
    6: { id: 6, clicked: false, liked: false },
    7: { id: 7, clicked: false, liked: false },
  });

  const handleHeartClick = (id) => {
    setHeartClicked((prevHeartClicked) => ({
      ...prevHeartClicked,
      [id]: {
        ...prevHeartClicked[id],
        clicked: !prevHeartClicked[id].clicked,
        liked: !prevHeartClicked[id].liked,
      },
    }));

    const updatedHeartClicked = heartClicked.map((heart) => {
      if (heart.id === id) {
        return { ...heart, clicked: !heart.clicked };
      }
      return heart;
    });

    const likedCard = updatedHeartClicked.find((heart) => heart.id === id);
    const filteredHeartClicked = updatedHeartClicked.sort(
      (a, b) => (b.liked ? 1 : 0) - (a.liked ? 1 : 0)
    );

    setHeartClicked([likedCard, ...filteredHeartClicked]);
  };

  return (
    <div className="homepage">
      <HomeNavbar />
      <main className="l-main">
        <section className="home" id="home">
          <div className="main__container bd-container bd-grid">
            <div className="home__img">
              <img src={diet1} alt="Home" />
            </div>

            <div className="home__data">
              <h1 className="home__title">Tubuh Sehat, Badan Ideal</h1>
              <p className="home__description">
                Lakukan Tantangan Diet 7 Hari Bersama HealthyCare.
              </p>
              <button
                className="btn btn-success"
                onClick={() => navigate("/layanan/kalori")}
              >
                Yuk Hitung Kalorimu
              </button>
            </div>
          </div>
        </section>

        <section className="accessory section bd-container" id="accessory">
          <h2 className="section-title">Rekomendasi Diet</h2>

          <div className="accessory__container bd-grid">
            <div className="accessory__content">
              <img src={diet2} alt="" className="accessory__img" />
              <h3 className="accessory__title">Diet Mayo</h3>
              <span className="accessory__preci">
                <button
                  className="button button-link"
                  onClick={() => navigate("/artikel/diet-mayo")}
                >
                  Detail ...
                </button>
              </span>
              <a
                href="javascript:void(0)"
                className={`button accessory__button ${
                  heartClicked[1].clicked ? "heart-clicked" : ""
                }`}
                onClick={() => handleHeartClick(1)}
              >
                <BsHeartFill />
              </a>
            </div>

            <div className="accessory__content">
              <img src={diet3} alt="" className="accessory__img" />
              <h3 className="accessory__title">Diet Tinggi Protein</h3>
              <span className="accessory__preci">
                <button
                  className="button button-link"
                  onClick={() => navigate("/artikel/dtp")}
                >
                  Detail ...
                </button>
              </span>
              <a
                href="javascript:void(0)"
                className={`button accessory__button ${
                  heartClicked[2].clicked ? "heart-clicked" : ""
                }`}
                onClick={() => handleHeartClick(2)}
              >
                <BsHeartFill />
              </a>
            </div>

            <div className="accessory__content">
              <img src={diet8} alt="" className="accessory__img" />
              <h3 className="accessory__title">Diet Protein Shake</h3>
              <span className="accessory__preci">
                <button
                  className="button button-link"
                  onClick={() => navigate("/artikel/dps")}
                >
                  Detail ...
                </button>
              </span>
              <a
                href="javascript:void(0)"
                className={`button accessory__button ${
                  heartClicked[3].clicked ? "heart-clicked" : ""
                }`}
                onClick={() => handleHeartClick(3)}
              >
                <BsHeartFill />
              </a>
            </div>

            <div className="accessory__content">
              <img src={diet5} alt="" className="accessory__img" />
              <h3 className="accessory__title">Zone Diet</h3>
              <span className="accessory__preci">
                <button
                  className="button button-link"
                  onClick={() => navigate("/artikel/zone-diet")}
                >
                  Detail ...
                </button>
              </span>
              <a
                href="javascript:void(0)"
                className={`button accessory__button ${
                  heartClicked[4].clicked ? "heart-clicked" : ""
                }`}
                onClick={() => handleHeartClick(4)}
              >
                <BsHeartFill />
              </a>
            </div>

            <div className="accessory__content">
              <img src={diet6} alt="" className="accessory__img" />
              <h3 className="accessory__title">Diet Mediterania</h3>
              <span className="accessory__preci">
                <button
                  className="button button-link"
                  onClick={() => navigate("/artikel/diet-mediterania")}
                >
                  Detail ...
                </button>
              </span>
              <a
                href="javascript:void(0)"
                className={`button accessory__button ${
                  heartClicked[5].clicked ? "heart-clicked" : ""
                }`}
                onClick={() => handleHeartClick(5)}
              >
                <BsHeartFill />
              </a>
            </div>

            <div className="accessory__content">
              <img src={diet7} alt="" className="accessory__img" />
              <h3 className="accessory__title">Diet Atkins</h3>
              <span className="accessory__preci">
                <button
                  className="button button-link"
                  onClick={() => navigate("/artikel/diet-atkins")}
                >
                  Detail ...
                </button>
              </span>
              <a
                href="javascript:void(0)"
                className={`button accessory__button ${
                  heartClicked[6].clicked ? "heart-clicked" : ""
                }`}
                onClick={() => handleHeartClick(6)}
              >
                <BsHeartFill />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArtikelPage;
