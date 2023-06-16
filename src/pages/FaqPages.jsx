import React, { useEffect } from "react";
import HomeNavbar from "../components/HomeNavbar";
import FaqComponent from "../components/FaqComponent";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const FaqPages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <HomeNavbar />
      <div className="pt-5">
        <FaqComponent />
      </div>
      <Footer />
    </div>
  );
};

export default FaqPages;
