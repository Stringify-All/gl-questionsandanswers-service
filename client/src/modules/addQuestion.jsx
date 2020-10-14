/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import AddQuestionForm from './addQuestionForm.jsx';

const AddQuestion = ({ productQuestion }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="gl-addQuestion" type="submit" onClick={handleShow}>       Add a Question </button>
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
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddQuestion;
