// import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// import HomeNavbar from "../components/HomeNavbar";
// import Footer from "./Footer";
// import BMIResult from "./BMIResult";

// const BMIComponent = () => {
//   const navigate = useNavigate();
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [result, setResult] = useState(null);
//   const [user_id, setUserId] = useState("");

//   // Auth Login
//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
//       navigate("/login");
//     } else {
//       const storedUserId = localStorage.getItem("user_id");
//       setUserId(storedUserId);
//     }
//   }, [navigate]);

//   const handleWeightChange = (event) => {
//     setWeight(event.target.value);
//   };

//   const handleHeightChange = (event) => {
//     setHeight(event.target.value);
//   };

//   const calculateBMI = async () => {
//     const url = `https://api-healthycare-dev.up.railway.app/bmi/${user_id}`;
//     const weightInKg = parseFloat(weight);
//     const heightInCm = parseFloat(height);

//     const heightInMeters = heightInCm / 100; // Convert height to meters

//     const bmi = weightInKg / (heightInMeters * heightInMeters);

//     let status_id;
//     if (bmi < 18.5) {
//       status_id = 1; // Underweight
//     } else if (bmi >= 18.5 && bmi < 25) {
//       status_id = 2; // Normal
//     } else if (bmi >= 25 && bmi < 30) {
//       status_id = 3; // Overweight
//     } else {
//       status_id = 4; // Obesity
//     }

//     const data = {
//       status_id,
//       result: bmi.toFixed(2),
//       date: new Date().toISOString().split("T")[0],
//     };

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const responseData = await response.json();

//       if (response.ok) {
//         setResult(responseData.data.result);
//         console.log("Data berhasil ditambahkan!");
//       } else {
//         console.log("Gagal menambahkan data");
//         alert("BMI Failed");
//       }
//     } catch (error) {
//       console.log("Terjadi kesalahan:", error);
//     }
//   };

//   return (
//     <div className="kelas-page">
//       <HomeNavbar />
//       <div className="kelas min-vh-10">
//         <Container>
//           <Row>
//             <Col>
//               <h1 className="fw-bold text-center">BMI Kalkulator</h1>
//               <p className="text-center">
//                 Panduan Anda untuk membantu Diet Gizi Seimbang
//               </p>
//             </Col>
//           </Row>

//           <Row className="text-center justify-content-center shadow rounded-3">
//             <Col>
//               <div className="mb-3">
//                 <label htmlFor="age" className="mt-3 mb-1 fw-medium">
//                   Masukan Usia :{" "}
//                 </label>
//                 <br />
//                 <input type="number" placeholder="20" required />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="gender" className="fw-medium">
//                   Masukan Gender :
//                 </label>
//                 <br />
//                 <input
//                   type="radio"
//                   id="male"
//                   name="gender"
//                   value="male"
//                   required
//                 />
//                 <label htmlFor="male">Laki-laki</label>
//                 <br />
//                 <input
//                   type="radio"
//                   id="female"
//                   name="gender"
//                   value="female"
//                   required
//                 />
//                 <label htmlFor="female">Perempuan</label>
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="weight" className="mb-1 fw-medium">
//                   Masukan Berat (kg):{" "}
//                 </label>
//                 <br />
//                 <input
//                   type="number"
//                   value={weight}
//                   placeholder="60"
//                   onChange={handleWeightChange}
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <label htmlFor="height" className="mb-1 fw-medium">
//                   Masukan Tinggi (cm):{" "}
//                 </label>
//                 <br />
//                 <input
//                   type="number"
//                   value={height}
//                   placeholder="170"
//                   onChange={handleHeightChange}
//                   required
//                 />
//               </div>

//               <button
//                 className="mb-5 btn btn-success rounded-1"
//                 onClick={calculateBMI}
//               >
//                 Hitung BMI
//               </button>
//               <br />
//               {result && (
//                 <p className="text-center">Hasil BMI anda: {result}</p>
//               )}
//             </Col>
//           </Row>

//           <Row className="text-center justify-content-center">
//             <Col>
//               <BMIResult />
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default BMIComponent;

// Cara Kedua
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import HomeNavbar from "../components/HomeNavbar";
import Footer from "./Footer";
import BMIResult from "./BMIResult";

const BMIComponent = () => {
  const navigate = useNavigate();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);
  const [user_id, setUserId] = useState("");

  // Auth Login
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      const storedUserId = localStorage.getItem("user_id");
      setUserId(storedUserId);
    }
  }, [navigate]);

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateBMI = async () => {
    const url = `https://api-healthycare-dev.up.railway.app/bmi/${user_id}`;
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);

    const heightInMeters = heightInCm / 100; // Convert height to meters

    const bmi = weightInKg / (heightInMeters * heightInMeters);

    let status_id;
    if (bmi < 18.5) {
      status_id = 1; // Underweight
    } else if (bmi >= 18.5 && bmi < 25) {
      status_id = 2; // Normal
    } else if (bmi >= 25 && bmi < 30) {
      status_id = 3; // Overweight
    } else {
      status_id = 4; // Obesity
    }

    const data = {
      status_id,
      result: bmi.toFixed(2),
      date: new Date().toISOString().split("T")[0],
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setResult(responseData.data.result);
        console.log("Data berhasil ditambahkan!");
      } else {
        console.log("Gagal menambahkan data");
        alert("BMI Failed");
      }
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  };

  return (
    <div className="kelas-page">
      <HomeNavbar />
      <div className="kelas min-vh-10">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} md={8} lg={6}>
              <h1 className="fw-bold text-center">BMI Kalkulator</h1>
              <p className="text-center">
                Panduan Anda untuk membantu Diet Gizi Seimbang
              </p>

              <Form className="text-center">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="age" className="fw-medium">
                    Masukan Usia:
                  </Form.Label>
                  <Form.Control type="number" placeholder="20" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="gender" className="fw-medium">
                    Masukan Gender:
                  </Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      id="male"
                      name="gender"
                      label="Laki-laki"
                      value="male"
                      required
                    />
                    <Form.Check
                      inline
                      type="radio"
                      id="female"
                      name="gender"
                      label="Perempuan"
                      value="female"
                      required
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="weight" className="fw-medium">
                    Masukan Berat (kg):
                  </Form.Label>
                  <Form.Control
                    type="number"
                    value={weight}
                    placeholder="60"
                    onChange={handleWeightChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label htmlFor="height" className="fw-medium">
                    Masukan Tinggi (cm):
                  </Form.Label>
                  <Form.Control
                    type="number"
                    value={height}
                    placeholder="170"
                    onChange={handleHeightChange}
                    required
                  />
                </Form.Group>

                <Button
                  className="mb-5"
                  variant="success"
                  onClick={calculateBMI}
                >
                  Hitung BMI
                </Button>
              </Form>

              {result && (
                <p className="text-center">Hasil BMI anda: {result}</p>
              )}
            </Col>
          </Row>

          <Row className="text-center justify-content-center">
            <Col>
              <BMIResult />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default BMIComponent;
