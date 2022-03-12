import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AppContext } from '../context/AppContext';

const AddExpenses = () => {
  const { dispatch } = useContext(AppContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const cost = parseInt(e.target.elements.cost.value);
    const expense = {
      id: uuidv4(),
      name,
      cost,
    };
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-row align-items-center">
        <div className="col-auto">
          <label className="sr-only" for="inlineFormInput">
            Name
          </label>
          <input
            type="text"
            className="form-control mb-2"
            id="inlineFormInput"
            placeholder="Add Items"
            id="name"
          />
        </div>
        <div className="col-auto">
          <label className="sr-only" for="inlineFormInputGroup">
            Cost
          </label>
          <div className="input-group mb-2">
            <div className="input-group-prepend"></div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Add Cost"
              id="cost"
            />
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenses;
