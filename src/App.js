import React from 'react';
import './App.css';
import ChartComponent from './ChartComponent'; // Import the ChartComponent
import Customers from './Customers'; // Import the Customers component

function App() {

  const symbols = {
    Dashboard: '📊',
    Product: '🛒',
    Customer: '👤',
    Income: '💰',
    Promote: '📢',
    Help: '❓',
    Earning: '💵',
    Order: '🛍️',
    Balance: '⚖️',
    TotalSales: '💲',
    Overview: '📈',
    Customers: '👥',
  };
  
  const randomData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Data',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000)), // Random data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container">
      <div className="sidebar">
       <span>&#128202;</span>
       <h2>Dashboard </h2>
        <div className="options">
          <div className="option-box">
            <span>&#128202;</span>
            <p>Dashboard </p>
            <div className="arrow">&gt;</div>
          </div>
          <div className="option-box">
            <span>&#128296;</span>
            <p>Product </p>
            <div className="arrow">&gt;</div>
          </div>
          <div className="option-box">
            <span>&#128107;</span>
            <p>Customer </p>
            <div className="arrow">&gt;</div>
          </div>
          <div className="option-box">
            <span>&#128179;</span>
            <p>Income </p>
            <div className="arrow">&gt;</div>
          </div>
          <div className="option-box">
            <span>&#128688;</span>
            <p>Promote </p>
            <div className="arrow">&gt;</div>
          </div>
          <div className="option-box">
            <span>&#128230;</span>
            <p>Help </p>
            <div className="arrow">&gt;</div>
          </div>
        </div>
        <div className="footer">
          <p>Evaro</p>
          <p>Project Manager</p>
        </div>
      </div>

      <div className="content">
      <h2 className="greeting">Hello Sharuk 👋</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="options-horizontal">
          <div className="option-box">
            <span role="img" aria-label="Earning">
              {symbols.Earning}
            </span>
            <p>Earning: $5000</p>
          </div>
          <div className="option-box">
            <span role="img" aria-label="Order">
              {symbols.Order}
            </span>
            <p>Order:25</p>
          </div>
          <div className="option-box">
            <span role="img" aria-label="Balance">
              {symbols.Balance}
            </span>
            <p>Balance:$10000</p>
          </div>
          <div className="option-box">
            <span role="img" aria-label="Total Sales">
              {symbols.TotalSales}
            </span>
            <p>Total Sales:$35000</p>
          </div>
        </div>
        <div className="options-horizontal">
        <div className="overview-container">
  <h2>Overview</h2>
  <ChartComponent
    data={randomData}
    options={{
      scales: {
        x: {
          display: true, // Show x-axis
        },
        y: {
          display: false, // Hide y-axis
        },
      },
    }}
  />
</div>
    <div className="customer-container">
   <Customers percentage={35} />
</div>

      </div>
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
              <tr>
                <td>TV</td>
                <td>100</td>
                <td>500</td>
                <td>25000</td>
              </tr>
              <tr>
                <td>Laptop</td>
                <td>50</td>
                <td>800</td>
                <td>40000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
