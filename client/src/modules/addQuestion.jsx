import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddQuestionForm from './addQuestionForm.jsx';

const AddQuestion = ({ productQuestion }) => {
  console.log('productQuestion', productQuestion);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="glbutton" type="submit" onClick={handleShow}> Add a Question </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="glqmt">
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
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddQuestion;
