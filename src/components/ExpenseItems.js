import React, { useState } from 'react';
import './ExpenseItem.css';

export default function ExpenseItems() {

    // date formatting
    const expenseDate = new Date(2021, 2, 28);

  return (
    <div className='expense-item'>
      <div>July 15, 2022</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$294.67</div>
      </div>
    </div>
  );
}
