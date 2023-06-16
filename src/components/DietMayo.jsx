import React, { useState, useEffect } from "react";
import diet3 from "../assets/img/diet3.jpg";
import diet5 from "../assets/img/diet5.jpg";
import diet6 from "../assets/img/diet6.jpg";
import diet7 from "../assets/img/diet7.jpeg";
import diet8 from "../assets/img/diet8.jpg";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import DietMayoPopUp from "../elements/DietMayoPopup";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

const DietMayo = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const articleId = 1;

  // Auth Login
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      const storedUserId = localStorage.getItem("user_id");
      setUserId(storedUserId);
    }
  }, [navigate]);

  useEffect(() => {
    axios
      .get(`https://api-healthycare-dev.up.railway.app/articles/${articleId}`)
      .then((response) => {
        setArticles([response.data.data]);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="diet-mayo">
      <HomeNavbar />
      <main className="l-main row">
        <section className="home col-sm-8" id="home">
          {articles.map((article) => (
            <div>
              <div className="home__container bd-container bd-grid">
                <div className="home__data">
                  <div
                    dangerouslySetInnerHTML={{ __html: article.title }}
                    className="home__title"
                  ></div>
                  <div className="home__img">
                    <img
                      src={article.image}
                      alt=""
                      className="mx-auto d-block"
                    />
                  </div>
                  <div className="kiri">
                    <div
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    ></div>
                    <span className="nulis">penulis : {article.author}</span>
                  </div>
                </div>
              </div>
              <DietMayoPopUp />
            </div>
          ))}
        </section>

        <div className="col col-sm-3" style={{ margin: "100px 0px 0px 0px" }}>
          <div
            className="card accessory__content"
            onClick={() => navigate("/artikel/dtp")}
          >
            <img src={diet3} alt="nature" />
            <h3>Diet Tinggi Protein</h3>
          </div>

          <div
            className="card accessory__content"
            onClick={() => navigate("/artikel/dps")}
          >
            <img src={diet8} alt="people" />
            <h3>Diet Protein Shake</h3>
          </div>

          <div
            className="card accessory__content"
            onClick={() => navigate("/artikel/zone-diet")}
          >
            <img src={diet5} alt="tech" />
            <h3>Zone Diet</h3>
          </div>

          <div
            className="card accessory__content"
            onClick={() => navigate("/artikel/diet-mediterania")}
          >
            <img src={diet6} alt="architecture" />
            <h3>Diet Mediterania</h3>
          </div>

          <div
            className="card accessory__content"
            onClick={() => navigate("/artikel/diet-atkins")}
          >
            <img src={diet7} alt="any" />
            <h3>Diet Atkins</h3>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default DietMayo;
