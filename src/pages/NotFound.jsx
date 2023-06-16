import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className="kelas-page"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="min-vh-100 d-flex align-items-center">
        <Container>
          <Row>
            <Col className="text-center">
              <img
                src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=740&t=st=1686757746~exp=1686758346~hmac=0c707fa56696d2a65961d41c3344a82954c2565ed3d4caa298387f413731c822"
                alt=""
                style={{ width: "400px", height: "400px" }}
              />
              <h1 className="fw-bold">404</h1>
              <h1 className="fw-bold">Page Not Found!</h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="btn btn-dark" onClick={() => navigate("/")}>
                  Back Home
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default NotFound;
