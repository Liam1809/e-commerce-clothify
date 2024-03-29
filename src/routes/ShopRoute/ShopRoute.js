import React, { useContext } from 'react';
import { ProductContext } from '../../contexts';

export const ShopRoute = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      {products.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};
