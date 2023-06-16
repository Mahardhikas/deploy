import React, { useEffect } from "react";
import { productsData } from "../data/index";
import { useNavigate } from "react-router-dom";
import ProductsCard from "../components/ProductCard";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

import "../css/calorie.css";

const CaloriePage = () => {
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

  return (
    <>
      <HomeNavbar />
      {/* <CalorieHeader /> */}
      <section id="home">
        <div className="container">
          <div className="home_content">
            {productsData.map((item) => (
              <ProductsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CaloriePage;
