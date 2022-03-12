import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const { expenses, budjet, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const alertType = totalExpenses > budjet ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining: {currency.rupee}
        {budjet - totalExpenses}
      </span>
    </div>
  );
};

export default Remaining;
