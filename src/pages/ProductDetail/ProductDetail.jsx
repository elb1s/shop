import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { AppContext } from "../../contexts/AppContext";
import { useFetch } from "../../hooks/useFetch";
import "./ProductDetail.css";
const ProductDetail = () => {
  const { addToCheckoutList } = useContext(AppContext);
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  if (error) {
    console.log(error);
  }
  return (
    <div>
      {loading && (
        <div className="loader">
          <Loader />
        </div>
      )}

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
