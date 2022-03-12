import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budjet from './components/Budjet';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import { AppProvider } from './context/AppContext';
export default function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budjet />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Spent />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpense />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}
