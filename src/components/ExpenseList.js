import React, { useContext } from 'react';
import React from 'react';
import Expense from './Expense';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
  const { expenses, currency } = useContext(AppContext);
  return (
    <ul>
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
          currency={currency}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
