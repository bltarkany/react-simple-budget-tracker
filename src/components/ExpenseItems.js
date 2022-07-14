import React, { useState } from 'react';
import './ExpenseItem.css';

export default function ExpenseItems({id, date, title, amount}) {



  return (
    <div className='expense-item' key={id}>
      <div>{date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  );
}
