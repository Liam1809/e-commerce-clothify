import React from 'react';
import ShopData from '../../shop-data.json';
const ShopRoute = () => {
  return (
    <div>
      {ShopData.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ShopRoute;
