import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { AppContext } from "../../contexts/AppContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";
const Home = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(AppContext);

  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    } else if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div>
      {loading && (
        <div className="loader">
          <Loader />
        </div>
      )}
      {error && <div>{error} </div>}
      {data && (
        <div className={`home ${theme ? "darkTheme" : ""}`}>
          {data.map((item, idx) => {
            return <Card product={item} key={idx} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
