
import React from 'react';

import React, { useEffect, useState } from 'react';
import './TopOffersPage.css';

const TopOffersPage = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('/api/top-offers');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const contentType = response.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not JSON');
        }

        const data = await response.json();
        setOffers(data);
      } catch (error) {
        console.error('Error fetching top offers:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="top-offers-page">
      <h1>Top Offers</h1>
      <div className="products-grid">
        {offers.map(offer => (
          <div key={offer.id} className="product-card">
            <img src={offer.image} alt={offer.name} className="product-image" />
            <div className="product-details">
              <h2 className="product-name">{offer.name}</h2>
              <p className="product-price">Price: ₹{offer.price}</p>
              <p className="product-discount-price">Discount Price: ₹{offer.discount_price}</p>
              <p className="product-rating">Rating: {offer.rating} ({offer.reviews_count} Reviews)</p>
              <p className="product-description">Description: {offer.description}</p>
              <p className="product-available-offers">Available Offers: {offer.available_offers}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopOffersPage;
