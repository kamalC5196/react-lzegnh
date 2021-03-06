import React from 'react';
import { createContext, useReducer, useEffect, useRef } from 'react';
const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      const updatedExpense = {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
      return updatedExpense;
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case 'UPDATE_BUDJET':
      return {
        ...state,
        budjet: action.payload,
      };
    case 'INITIAL_EXPENSE':
      return action.payload;
    default:
      return state;
  }
};

const initialState = {
  budjet: 0,
  currency: { rupee: '₹', pound: '£', dollar: '$' },
  expenses: [],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const ref = useRef({
    isMount: false,
  });
  //store expenses in localstorage
  useEffect(() => {
    if (ref.current.isMount) {
      console.log('fired');
      localStorage.setItem('expenses', JSON.stringify(state));
    }
  }, [state]);

  //initilize once
  useEffect(() => {
    const initialExpenses = JSON.parse(localStorage.getItem('expenses'));
    console.log(initialExpenses);
    dispatch({
      type: 'INITIAL_EXPENSE',
      payload: initialExpenses || initialState,
    });
    ref.current.isMount = true;
  }, []);

  return (
    <AppContext.Provider
      value={{
        budjet: state.budjet,
        currency: state.currency,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
