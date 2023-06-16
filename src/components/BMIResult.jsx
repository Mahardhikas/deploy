import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const BMIResult = () => {
  const [bmiData, setBmiData] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const apiUrl = `https://api-healthycare-dev.up.railway.app/bmi/${user_id}`;

  useEffect(() => {
    const fetchBmiData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setBmiData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBmiData();
  }, [user_id]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://api-healthycare-dev.up.railway.app/bmi/${id}`
      );
      setBmiData(bmiData.filter((data) => data.id !== id));
      toast.error("Data BMI dihapus");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1 className="mt-5 pb-1 fw-bold text-center">Hasil BMI Anda</h1>
      <button className="mt-1 btn btn-outline-primary" onClick={handleClick}>
        Update data
      </button>

      <Table striped className="mt-5">
        <thead>
          <tr>
            <th>Date</th>
            <th>Result</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bmiData.length === 0 ? (
            <tr>
              <td colSpan="4">Data kosong, Input BMI dan mohon update data</td>
            </tr>
          ) : (
            bmiData.map((data) => (
              <tr key={data.id}>
                <td>{new Date(data.createdAt).toLocaleDateString()}</td>
                <td>{data.result?.toFixed(1)}</td>
                <td>{data.BmiStatus?.name}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(data.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default BMIResult;
