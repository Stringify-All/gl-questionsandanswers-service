import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductAnswerMap from './productAnswerMap.jsx';
import HelpfulQuestion from './questionHelpful.jsx';

const ProductQuestion = (productQuestion) => {
  const newProductQuestion = productQuestion.productQuestion;
  return (
    <>
    <Container>
      <Row>
        <Col>
            <div className="gl-questions">
                {
              `  Q:  ${newProductQuestion.question_body}`
              }
              </div>
              <Col>
                <ProductAnswerMap newQuestion={newProductQuestion} />
                </Col>
          </Col>
          <Col>
            <HelpfulQuestion helpfulBody={newProductQuestion} />
            </Col>
            <Col>
            Add Answer
          </Col>


        </Row>
      </Container>
    </>
  );
};
export default ProductQuestion;

// { condition ? <div> Renders on condition </div> : <div> Doesn't render on condition</div> };