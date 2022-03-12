import React from 'react';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budjet = () => {
  const { budjet, currency } = useContext(AppContext);
  return (
    <div className="alert alert-primary">
      <span>
        Budget: {currency.rupee}
        {budjet}
      </span>
    </div>
  );
};

export default Budjet;
