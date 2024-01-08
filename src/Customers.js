import React from 'react';

const Customers = () => {
  const percentage = 35;

  return (
    <div>
      <h3>Total New Customers</h3>
      <div className="percentage-circle">
        <div className="percentage-text">{percentage}%</div>
      </div>
    </div>
  );
}

export default Customers;
