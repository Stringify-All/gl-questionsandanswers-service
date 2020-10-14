/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable import/extensions */

import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import getProductAnswerGet from '../api/getproductanswer';
import ProductAnswer from './productAnswer.jsx';

const ProductAnswerMap = ({ newQuestion }) => {
  const questionId = newQuestion.question_id;
  const [answerId, setAnswerId] = useState([questionId]);

  useEffect(() => {
    getProductAnswerGet(questionId)
      .then((res) => {
        setAnswerId(res.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }, [questionId]);

  const mappedProductAnswers = answerId.map((answerArray, i) => (
    <ProductAnswer answer={answerArray} keys={i} />));
  const [boolean, setBoolean] = useState(true);

  return (
    <>
      <Container>
        <Row>
          <div className="col-md-auto">
            {mappedProductAnswers.slice(0, 2)}
            {mappedProductAnswers.length > 2 && (
            <Accordion>
              <Accordion.Collapse eventKey="0">
                <div>
                  {mappedProductAnswers.slice(2)}
                </div>
              </Accordion.Collapse>
              <Accordion.Toggle className="gl-button" varient="link" eventKey="0"
                onClick={() => setBoolean(!boolean)}
              >
                {boolean && 'Load More Answers'} {!boolean && 'See Less Answers'}
              </Accordion.Toggle>
            </Accordion>
            )}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ProductAnswerMap;
