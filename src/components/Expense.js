import React from 'react';
import { TiDelete } from 'react-icons/ti';

const Expense = ({ key, name, cost, currency }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <button type="button" className="btn btn-primary btn-sm mx-3">
          {currency.rupee}
          {cost}
        </button>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
};

export default Expense;
