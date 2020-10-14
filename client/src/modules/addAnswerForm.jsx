/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import getProductQuestionGet from '../api/getproductquestion';

const axios = require('axios');

const AddQuestionForm = ({
  productId, handleClose }) => {
  const [state, setState] = useState({
    body: '',
    name: '',
    email: '',
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const SubmitQuestion = (event) => {
    axios({
      method: 'post',
      url: `http://52.26.193.201:3000/qa/${productId}/answers`,
      data: {
        body: state.body,
        name: state.name,
        email: state.email,
      },
    })
      .then(() => {
        event.preventDefault();
        getProductQuestionGet(productId)
          .catch((err) => {
            throw err;
          });
      });
  };

  return (
    <Form onSubmit={SubmitQuestion}>
      <Form.Group controlId="formBasicQuestion">
        <Form.Label>Enter Answer</Form.Label>
        <Form.Control type="text" required as="textarea" placeholder="Answer" maxLength="1000" name="body" value={state.body} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control required as="textarea" placeholder="Name" maxLength="60" name="name" value={state.name} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required as="textarea" placeholder="Enter email" maxLength="60" name="email" value={state.email} onChange={handleChange} />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <button className="gl-aqb" type="submit" onClick={handleClose}>
        Cancel Answer
      </button>
      <button className="gl-aqb" type="submit" onClick={handleClose}>
        Submit Answer
      </button>
    </Form>
  );
};
export default AddQuestionForm;
