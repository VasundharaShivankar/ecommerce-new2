import React from 'react';
import './Products.css';
import Header from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Productimg from './images/products.webp';

// Sample product data (replace with your actual data or API calls)
const products = [
    {
        id: 1,
        name: 'Elegant Vase',
        price: '$45.00',
        image: 'vase.jpg',
        rating: 4.5,
        label: 'Best Seller'
    },
    {
        id: 2,
        name: 'Decorative Lamp',
        price: '$60.00',
        image: 'lamp.jpg',
        rating: 4.0,
        label: 'New Arrival'
    },
    {
        id: 3,
        name: 'Wall Art',
        price: '$120.00',
        image: 'wall-art.jpg',
        rating: 5.0,
        label: 'Limited Edition'
    },
    {
        id: 4,
        name: 'Modern Rug',
        price: '$85.00',
        image: 'rug.jpg',
        rating: 4.3,
        label: 'Featured'
    },
    {
        id: 5,
        name: 'Elegant Candle Holder',
        price: '$30.00',
        image: 'candle-holder.jpg',
        rating: 4.7,
        label: 'Popular'
    },
    {
        id: 6,
        name: 'Vintage Clock',
        price: '$75.00',
        image: 'clock.jpg',
        rating: 4.1,
        label: 'New Arrival'
    },
    {
        id: 7,
        name: 'Decorative Throw Pillow',
        price: '$25.00',
        image: 'pillow.jpg',
        rating: 4.6,
        label: 'Best Seller'
    },
    {
        id: 8,
        name: 'Stylish Coffee Table',
        price: '$150.00',
        image: 'coffee-table.jpg',
        rating: 4.8,
        label: 'Limited Edition'
    },
    {
        id: 9,
        name: 'Chic Wall Mirror',
        price: '$95.00',
        image: 'wall-mirror.jpg',
        rating: 4.4,
        label: 'Featured'
    },
    {
        id: 10,
        name: 'Artistic Table Lamp',
        price: '$50.00',
        image: 'table-lamp.jpg',
        rating: 4.2,
        label: 'New Arrival'
    },
    {
        id: 11,
        name: 'Luxury Bedding Set',
        price: '$200.00',
        image: 'bedding-set.jpg',
        rating: 4.9,
        label: 'Popular'
    },
    {
        id: 12,
        name: 'Rustic Wall Shelf',
        price: '$40.00',
        image: 'wall-shelf.jpg',
        rating: 4.6,
        label: 'Best Seller'
    },
    {
        id: 13,
        name: 'Elegant Pendant Light',
        price: '$70.00',
        image: 'pendant-light.jpg',
        rating: 4.3,
        label: 'Featured'
    },
    {
        id: 14,
        name: 'Sophisticated Sofa',
        price: '$600.00',
        image: 'sofa.jpg',
        rating: 4.8,
        label: 'Limited Edition'
    },
    {
        id: 15,
        name: 'Handcrafted Vase',
        price: '$55.00',
        image: 'handcrafted-vase.jpg',
        rating: 4.7,
        label: 'New Arrival'
    },
    {
        id: 16,
        name: 'Minimalist Desk',
        price: '$130.00',
        image: 'desk.jpg',
        rating: 4.4,
        label: 'Best Seller'
    },
    {
        id: 17,
        name: 'Elegant Wall Clock',
        price: '$85.00',
        image: 'wall-clock.jpg',
        rating: 4.5,
        label: 'Featured'
    },
    {
        id: 18,
        name: 'Luxurious Area Rug',
        price: '$160.00',
        image: 'area-rug.jpg',
        rating: 4.6,
        label: 'Popular'
    },
    {
        id: 19,
        name: 'Modern Artwork',
        price: '$90.00',
        image: 'modern-artwork.jpg',
        rating: 4.2,
        label: 'Limited Edition'
    },
    {
        id: 20,
        name: 'Elegant Floor Lamp',
        price: '$75.00',
        image: 'floor-lamp.jpg',
        rating: 4.5,
        label: 'New Arrival'
    }
];


function Products() {
    return (
        <div className="products-page">
            <section className="hero-section" style={{ backgroundImage: `url(${Productimg})` }}>
            </section>
            <main className="products-container">
            <Header />
                <h1 className="products-title">Our Products</h1>
                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-image" />
                                {product.label && <span className="product-label">{product.label}</span>}
                            </div>
                            <h3 className="product-name">{product.name}</h3>
                            <div className="product-rating">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <span key={i} className={i < Math.floor(product.rating) ? 'filled-star' : 'empty-star'}>
                                        &#9733;
                                    </span>
                                ))}
                                <span className="rating-value">({product.rating})</span>
                            </div>
                            <p className="product-price">{product.price}</p>
                            <button className="add-to-cart-button">Add to Cart</button>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Products;
