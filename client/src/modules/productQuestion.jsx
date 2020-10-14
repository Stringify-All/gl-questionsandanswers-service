/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductAnswerMap from './productAnswerMap.jsx';
import HelpfulQuestion from './questionHelpful.jsx';
import AddAnswer from './addAnswer.jsx';

const ProductQuestion = (productQuestion) => {
  const [newProductQuestion] = useState(productQuestion.productQuestion);
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
            <AddAnswer
              productId={newProductQuestion.question_id}
              productBody={newProductQuestion.question_body}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProductQuestion;
