import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const Expense = ({ id, name, cost, currency }) => {
  const { dispatch } = useContext(AppContext);
  const handleDelete = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id,
    });
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <button type="button" className="btn btn-primary btn-sm mx-3">
          {currency.rupee}
          {cost}
        </button>
        <TiDelete size="1.5em" onClick={handleDelete}></TiDelete>
      </div>
    </li>
  );
};

export default Expense;
