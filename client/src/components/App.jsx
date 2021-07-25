/* eslint-disable import/extensions */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductQuestionMap from '../modules/productQuestionMap.jsx';
import SearchBar from '../modules/searchBar.jsx';
import './main.css';

const App = () => (
  <div className="my-5">
    <Container>
      <Col xs={12}>
        <div className="title">
          Questions and Answers
        </div>
      </Col>
      <Col>
        <SearchBar />
      </Col>
      <Row>
        <Col>
          <ProductQuestionMap />
        </Col>
      </Row>
    </Container>
  </div>
);

export default App;
