/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddQuestionForm from './addQuestionForm.jsx';

const AddQuestion = ({ productQuestion, newQuestion }) => {
  console.log('productQuestion', productQuestion);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="gl-button" type="submit" onClick={handleShow}> Add a Question </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="gl-qmt">
              What is your question
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddQuestionForm
            productQuestion={productQuestion}
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            newQuestion={newQuestion}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddQuestion;
