/* eslint-disable arrow-body-style */
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductQuestion from './productQuestion.jsx';
import HelpfulAnswer from './answerHelpful.jsx';
import ProductPhotos from './ProductAnswerPhotos.jsx';

// eslint-disable-next-line no-unused-vars
const ProductAnswer = ({ answer }) => {
  const answerHelpful = answer.helpfulness;
  return (
    <Container>

      <div className="glanswer">
        {
          `A:  ${answer.body}`
        }
        <div className="glanswerInfo">

          <Row>
            <Col xs={4}>
              {
                `by ${answer.answerer_name}`// .concat(` ${answer.date}`) need to format
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
// {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>}

// { condition ? <div> Renders on condition </div> : <div> Doesn't render on condition</div> }
