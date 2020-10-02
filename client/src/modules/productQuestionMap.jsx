/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable semi */

import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ProductQuestion from './productQuestion.jsx';
import getProductQuestionGet from '../api/getproductquestion';
import GlobalStyle from '../components/globalStyle';

const ProductQuestionMap = () => {
  const [productId] = useState(10);// this will be whatever product Id is being viewed
  const [productQuestionObject, setProductQuestionObject] = useState([]);

  useEffect(() => {
    getProductQuestionGet(productId)
      .then((res) => {
        setProductQuestionObject(res.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }, [productId]);

  const mappedProductQuestion = productQuestionObject.map((questionObject, i) => <ProductQuestion productQuestion={questionObject} keys={i} />)
  const [boolean, setBoolean] = useState(true);

  return (
    <div className="mapProductAnswer">
      <GlobalStyle />
      {mappedProductQuestion.slice(0, 2)}
      {mappedProductQuestion.length > 2 && (
      <Accordion>
        <Accordion.Collapse eventKey="0">
          <div>
            {mappedProductQuestion.slice(2)}
          </div>
        </Accordion.Collapse>
        <Accordion.Toggle className="button" as={Card.Header} varient="link" eventKey="0"
          onClick={() => setBoolean(!boolean)}
        >
          {boolean && 'Load More Answers'} {!boolean && 'See Less Answers'}
        </Accordion.Toggle>
      </Accordion>
      )}

    </div>
  );
};

export default ProductQuestionMap;
