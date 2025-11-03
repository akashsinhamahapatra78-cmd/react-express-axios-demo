import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('http://localhost:5000/api/products');
      
      if (response.data.success) {
        setProducts(response.data.data);
      } else {
        setError('Failed to fetch products');
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(
        err.response?.data?.message || 
        err.message || 
        'An error occurred while fetching products. Make sure the server is running on http://localhost:5000'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📦 Product Catalog</h1>
        <p>React + Express + Axios Integration Demo</p>
      </header>

      <main className="app-main">
        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <h2>❌ Error</h2>
            <p>{error}</p>
            <button onClick={fetchProducts} className="retry-btn">
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && (
          <ProductList products={products} />
        )}
      </main>

      <footer className="app-footer">
        <p>© 2024 Product Demo | Built with React, Express, and Axios</p>
      </footer>
    </div>
  );
}

export default App;
