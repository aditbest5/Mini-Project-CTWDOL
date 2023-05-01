import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../constants/api";

const Authentication = () => {
  const [message, setMessage] = useState("Loading...");
  const { token } = useParams();
  useEffect(() => {
    Axios.patch(
      `${API_URL}/auth/verified`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        setMessage("Your account verified ✔");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }, []);
  return (
    <div className="text-center">
      <h1>{message}</h1>
    </div>
  );
};

export default Authentication;
