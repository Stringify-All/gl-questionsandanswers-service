import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import getProductQuestionGet from '../api/getproductquestion';
import postQuestion from '../api/postAddQuestion';

const axios = require('axios');

const AddQuestionForm = ({
  productQuestion, show, handleClose, handleShow, newQuestion,
}) => {
  // const [submit, setSubmit] = useState(false);
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
    event.preventDefault();
    console.log('in submit');
    console.log(state.body, state.name, state.email);
    axios({
      method: 'post',
      url: `http://52.26.193.201:3000/qa/${productQuestion}`,
      data: {
        body: state.body,
        name: state.name,
        email: state.email,
      },
    })
      .then(() => {
        handleClose();
        getProductQuestionGet(productQuestion)
          .then((res) => {
            newQuestion(res.data.results);
            console.log(res.data.results);
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((error) => {
        throw error;
      });
  }

  return (
    <Form onSubmit={SubmitQuestion}>
      <Form.Group controlId="formBasicQuestion">
        <Form.Label>Enter Question</Form.Label>
        <Form.Control type="text" required as="textarea" placeholder="Question" maxLength="1000" name="body" value={state.body} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control required as="textarea" placeholder="Name" maxLength="60" name="name" value={state.name} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required as="textarea" placeholder="Enter email" maxLength="60" name="email" value={state.email} onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <button className="gl-aqb" type="submit" onClick={handleClose}>
        Cancel Question
      </button>
      <button className="gl-aqb" type="submit" onClick={handleClose}>
        Submit Question
      </button>
    </Form>
  );
};
export default AddQuestionForm;
