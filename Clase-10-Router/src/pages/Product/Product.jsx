import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

  const { product } = useParams();

  return (
    <div>
      <h2>Sección de { product }</h2>
    </div>
  );
};

export default Product;
