import React from "react";
import Card from "../../components/Card/Card";
import { useFetch } from "../../hooks/useFetch";
import "./Home.css";
const Home = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (error) {
    console.log(error);
  }

  return (
    <div>
      {loading && <div> LOADING</div>}
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
