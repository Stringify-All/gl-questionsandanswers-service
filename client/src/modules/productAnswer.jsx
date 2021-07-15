/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HelpfulAnswer from './answerHelpful.jsx';
import ProductPhotos from './ProductAnswerPhotos.jsx';

// eslint-disable-next-line no-unused-vars
const ProductAnswer = ({ answer }) => {
  console.log(answer, 'answer');
  return (
    <Container>
      <div className="gl-answer">
        {
          `A:  ${answer.body}`
        }
        <div className="gl-answerInfo">

          <Row>
            <Col xs={4}>
              {
                `by ${answer.answerer_name}`
              }
            </Col>
            <Col xs={4}>
              <HelpfulAnswer helpfulBody={answer} />
            </Col>
            <Col xs={2}>
              report
            </Col>
          </Row>
        </div>
        <Container>
          <Row>
            {answer.photos !== undefined
              ? answer.photos.map((photos) => (
                <ProductPhotos
                  photos={photos}
                  key={photos.id}
                />
              ))
              : null}
          </Row>
        </Container>
      </div>
    </Container>

  );
};
export default ProductAnswer;
