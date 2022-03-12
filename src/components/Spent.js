import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Spent = () => {
  const { expenses, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-danger">
      <span>
        Spent: {currency.rupee}
        {totalExpenses}
      </span>
    </div>
  );
};

export default Spent;
