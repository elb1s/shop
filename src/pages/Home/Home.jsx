import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { AuthContext } from "../../contexts/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";
const Home = () => {
  const { user } = useContext(AuthContext);

  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    } else if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <div>
      {loading && (
        <div className="loader">
          <Loader />
        </div>
      )}
      {error && <div>{error} </div>}
      {data && (
        <div className="home">
          {data.map((item, idx) => {
            return <Card product={item} key={idx} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
