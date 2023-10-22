import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const ProductDetail = () => {
  const { id } = useParams();

  const { data: product, loading } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="product-detail">
        <div className="image-section">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="detail-section">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
