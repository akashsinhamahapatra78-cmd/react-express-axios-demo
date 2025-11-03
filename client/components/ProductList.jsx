import React from 'react';
import '../styles/ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="products-container">
      <div className="products-grid">
        {products.length === 0 ? (
          <p className="no-products">No products found</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-header">
                <h2 className="product-name">{product.name}</h2>
              </div>
              <div className="product-body">
                <p className="product-id">ID: {product.id}</p>
              </div>
              <div className="product-footer">
                <span className="product-price">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      {products.length > 0 && (
        <div className="product-stats">
          <p>Total Products: <strong>{products.length}</strong></p>
          <p>Total Value: <strong>${products.reduce((sum, p) => sum + p.price, 0).toFixed(2)}</strong></p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
