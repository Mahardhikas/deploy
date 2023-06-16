import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store/store";

// Pages
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import LayananPage from "./pages/LayananPage";
import ArtikelPage from "./pages/ArtikelPage";
import CaloriePage from "./pages/CaloriePage";
import FaqPages from "./pages/FaqPages";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

// Component
import RegistComponent from "./components/RegistComponent";
import LoginComponent from "./components/LoginComponent";
import BMIComponent from "./components/BMIComponent";
import Cart from "./components/Cart";
import DietMayo from "./components/DietMayo";
import DTP from "./components/DTP";
import DPS from "./components/DPS";
import ZoneDiet from "./components/ZoneDiet";
import DietMediterania from "./components/DietMediterania";
import DietAtkins from "./components/DietAtkins";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/home" Component={HomePage} />
          <Route path="/layanan" Component={LayananPage} />
          <Route path="/layanan/bmi" Component={BMIComponent} />
          <Route path="/layanan/kalori" Component={CaloriePage} />
          <Route path="/artikel" Component={ArtikelPage} />
          <Route path="/artikel/diet-mayo" Component={DietMayo} />
          <Route path="/artikel/dtp" Component={DTP} />
          <Route path="/artikel/dps" Component={DPS} />
          <Route path="/artikel/zone-diet" Component={ZoneDiet} />
          <Route path="/artikel/diet-mediterania" Component={DietMediterania} />
          <Route path="/artikel/diet-atkins" Component={DietAtkins} />
          <Route path="/faq" Component={FaqPages} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/login" Component={LoginComponent} />
          <Route path="/register" Component={RegistComponent} />
          <Route path="*" Component={NotFound} />
        </Routes>
        <Cart />
      </Provider>

      {/* Notify  */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Notify  */}
    </div>
  );
}

export default App;
