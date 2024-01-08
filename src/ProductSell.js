// ProductSell.js
import React from 'react';

const ProductSell = () => {
  // Dummy data for the product list
  const productList = [
    { productName: 'TV', stocks: 100, price: 500, totalSales: 25000 },
    { productName: 'Laptop', stocks: 50, price: 800, totalSales: 40000 },
  ];

  return (
    <div className="product-sell-container">
      <h2>Product Sell</h2>
      <div className="search-bar-small">
        <input type="text" placeholder="Search..." />
      </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stocks</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.stocks}</td>
              <td>{product.price}</td>
              <td>{product.totalSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSell;
