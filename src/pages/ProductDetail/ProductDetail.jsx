import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  if (error) {
    console.log(error);
  }
  return (
    <div>
      {loading && <div>LOADING</div>}

      {data && (
        <>
          <div>
            <img src={data.images[0]} />
          </div>
          <div>
            <h1>{data.title} </h1>
            <p> $ {data.price} </p>
            <p>{data.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
