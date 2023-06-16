// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { BiMailSend, BiKey, BiRightArrowAlt } from "react-icons/bi";
// import axios from "axios";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import "../css/login.css";
// import logo from "../../public/fav-icon.png";
// import img from "../assets/img/reg-cover.jpg";

// const LoginComponent = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleApi = () => {
//     axios
//       .post("https://api-healthycare-dev.up.railway.app/users/login", {
//         email: email,
//         password: password,
//       })
//       .then((result) => {
//         console.log(result.data.result);
//         toast.success(result.data.message);
//         localStorage.setItem("token", result.data.result.token);
//         localStorage.setItem("user_id", result.data.result.id);
//         localStorage.setItem("name", result.data.result.name);
//         navigate("/home");
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//         console.log(error.data);
//       });
//   };

//   return (
//     <div className="loginPage flex">
//       <div className="container flex">
//         <div className="imgDiv">
//           <img src={img} className="image" />
//           <div className="textDiv">
//             <h2 className="title">Badan Sehat Gizi Seimbang</h2>
//             <p className="title2">Temukan Diet Sehatmu</p>
//           </div>

//           <div className="footerDiv flex">
//             <span className="text">Tidak memiliki account? </span>
//             <Link to={"/register"}>
//               <button className="btn">Register</button>
//             </Link>
//           </div>
//         </div>

//         <div className="formDiv flex">
//           <div className="headerDiv">
//             <img src={logo} alt="Logo Image" className="image" />
//             <h3 className="h3">Selamat Datang!</h3>
//             <p>Masukan Email dan Password anda!</p>
//           </div>

//           {/* Form Login  */}
//           <div className="form grid">
//             <div className="inputDiv">
//               <label htmlFor="username" className="label">
//                 Email
//               </label>
//               <div className="input flex">
//                 <BiMailSend className="icon" />
//                 <input
//                   className="inputBox"
//                   type="text"
//                   value={email}
//                   placeholder="Masukan Email"
//                   onChange={handleEmail}
//                 />
//               </div>
//             </div>

//             <div className="inputDiv">
//               <label htmlFor="password" className="label">
//                 Password
//               </label>
//               <div className="input flex">
//                 <BiKey className="icon" />

//                 <input
//                   className="inputBox"
//                   type="password"
//                   value={password}
//                   placeholder="Masukan Password"
//                   onChange={handlePassword}
//                 />
//               </div>
//               <br />
//               <button className="btn flex" onClick={handleApi}>
//                 <span>Login</span>
//                 <BiRightArrowAlt className="icon" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginComponent;

// Cara Kedua
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMailSend, BiKey, BiRightArrowAlt } from "react-icons/bi";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";

import "../css/login.css";
import logo from "../../public/fav-icon.png";
import img from "../assets/img/reg-cover.jpg";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = () => {
    setIsLoading(true);

    axios
      .post("https://api-healthycare-dev.up.railway.app/users/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result.data.result);
        toast.success(result.data.message);
        localStorage.setItem("token", result.data.result.token);
        localStorage.setItem("user_id", result.data.result.id);
        localStorage.setItem("name", result.data.result.name);
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log(error.data);
      })
      .finally(() => {
        setIsLoading(false); // Mengatur status loading menjadi false setelah permintaan API selesai
      });
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="imgDiv">
          <img src={img} className="image" />
          <div className="textDiv">
            <h2 className="title">Badan Sehat Gizi Seimbang</h2>
            <p className="title2">Temukan Diet Sehatmu</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Tidak memiliki account? </span>
            <Link to={"/register"}>
              <button className="btn">Register</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" className="image" />
            <h3 className="h3">Selamat Datang!</h3>
            <p>Masukan Email dan Password anda!</p>
          </div>

          {/* Form Login  */}
          <div className="form grid">
            <div className="inputDiv">
              <label htmlFor="username" className="label">
                Email
              </label>
              <div className="input flex">
                <BiMailSend className="icon" />
                <input
                  className="inputBox"
                  type="text"
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
              <button className="btn flex" onClick={handleApi}>
                {isLoading ? (
                  <TailSpin
                    height="20"
                    width="20"
                    color="#FFFFFF"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                ) : (
                  <>
                    <span>Login</span>
                    <BiRightArrowAlt className="icon" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
