import React from 'react';
import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const Budjet = () => {
  const { budjet, currency, dispatch } = useContext(AppContext);
  const [isOpen, setModal] = useState(false);
  function handleModal() {
    setModal(!isOpen);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedBudjet = parseInt(e.target.elements.updateBudjet.value);
    dispatch({
      type: 'UPDATE_BUDJET',
      payload: updatedBudjet,
    });
    handleModal();
  };
  return (
    <div className="alert alert-primary">
      <span>
        Budget: {currency.rupee}
        {budjet}
        <button
          type="button"
          className="close btn btn-primary"
          style={{ float: 'right', marginTop: '-7px' }}
          onClick={handleModal}
        >
          <span aria-hidden="true">Edit</span>
        </button>
      </span>
      <Modal show={isOpen}>
        <Modal.Header closeButton onClick={handleModal}>
          <Modal.Title>Edit Total Budjet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form" onSubmit={handleFormSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Enter Budjet"
              aria-label="Search"
              id="updateBudjet"
            />
            <div className="text-center my-2">
              <button
                className="btn btn-primary my-2 my-sm-0 text-center"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Budjet;
