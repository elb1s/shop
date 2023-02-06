import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { AppContext } from "../../contexts/AppContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useFetch } from "../../hooks/useFetch";
import "./ProductDetail.css";
const ProductDetail = () => {
  const { addToCheckoutList } = useContext(AppContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  });
  return (
    <div>
      {loading && (
        <div className="loader">
          <Loader />
        </div>
      )}
      {error && <div>{error} </div>}

      {data && (
        <div className="productDetail">
          <div className="imgDiv">
            <img src={data.images[0]} alt={data.title} />
          </div>
          <div className="detailTexts">
            <h1>{data.title} </h1>
            <p id="desc">{data.description}</p>
            <p id="price"> $ {data.price} </p>
            <button onClick={() => addToCheckoutList(data)}>+</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
