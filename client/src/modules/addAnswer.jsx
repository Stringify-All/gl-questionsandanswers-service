/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import AddAnswerForm from './addAnswerForm.jsx';

const AddAnswer = ({ productId, productBody }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="gl-button" type="submit" onClick={handleShow}> AddAnswer </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="gl-qmt">
              {
                ` ${productBody}`
  }

              <h6>What is your Answer?</h6>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddAnswerForm
            productId={productId}
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddAnswer;
