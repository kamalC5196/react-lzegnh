import React from 'react';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Budjet = () => {
  const { budjet, currency } = useContext(AppContext);
  return (
    <div className="alert alert-primary">
      <span>
        Budget: {currency.rupee}
        {budjet}
      </span>
      <Modal show={true}>
        <Modal.Header>Edit Total Budjet</Modal.Header>
        <Modal.Body>asdfasdf</Modal.Body>
      </Modal>
    </div>
  );
};

export default Budjet;
