import React, { useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([
    {
      name: 'Product 1',
      description: 'This is product 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 2',
      description: 'This is product 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'This is product 3',
      image: 'https://via.placeholder.com/150',
    },
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
