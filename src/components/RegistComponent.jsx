import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiUser, BiKey, BiRightArrowAlt, BiMailSend } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../css/login.css";
import img from "../assets/img/reg-cover.jpg";

const RegistComponent = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegist = () => {
    axios
      .post("https://api-healthycare-dev.up.railway.app/users/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        toast.success(result.data.message);
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error.data);
      });
  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="imgDiv">
          <img src={img} className="image" />
          <div className="textDiv">
            <h2 className="title">Badan Sehat Gizi Seimbang</h2>
            <p className="title2">Temukan Diet Sehatmu</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Sudah memiliki account? </span>
            <Link to={"/login"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <h3 className="h3">Lets Us Know You!</h3>
          </div>

          <div className="form grid">
            <div className="inputDiv">
              <label htmlFor="name" className="label">
                Nama
              </label>
              <div className="input flex">
                <BiUser className="icon" />
                <input
                  className="inputBox"
                  type="text"
                  value={name}
                  placeholder="Masukan Nama"
                  onChange={handleName}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="input flex">
                <BiMailSend className="icon" />
                <input
                  className="inputBox"
                  type="email"
                  value={email}
                  placeholder="Masukan Email"
                  onChange={handleEmail}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="input flex">
                <BiKey className="icon" />
                <input
                  className="inputBox"
                  type="password"
                  value={password}
                  placeholder="Masukan Password"
                  onChange={handlePassword}
                />
              </div>
              <br />
              <button className="btn flex" onClick={handleRegist}>
                <span>Register</span>
                <BiRightArrowAlt className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistComponent;
