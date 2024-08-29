import React from 'react';
import './Products.css';
import Navbar from './../../components/Navbar/Navbar'
import Footer from './../../components/Footer/Footer'

const products = [
  {
    id: 1,
    name: 'Elegant Sofa',
    price: '$499',
    image: 'sofa.jpg',
    rating: 4.5,
    label: 'Best Seller',
  },
  {
    id: 2,
    name: 'Modern Coffee Table',
    price: '$199',
    image: 'coffee-table.jpg',
    rating: 4.0,
    label: 'New',
  },
  // Add more products as needed
];

const ProductPage = () => {
  return (
    <div className="product-page">
        <Navbar/>
      <div className="filters">
        <h3>Filters</h3>
        {/* Add your filter options here */}
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-label">{product.label}</div>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h4>{product.name}</h4>
              <p className="price">{product.price}</p>
              <p className="rating">Rating: {product.rating} ★</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {/* Add pagination or infinite scroll controls here */}
      </div>
      <Footer/>
    </div>
  );
};

export default ProductPage;
