/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable semi */

import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ProductQuestion from './productQuestion.jsx';
import getProductQuestionGet from '../api/getproductquestion';
import AddQuestion from './addQuestion.jsx';

const ProductQuestionMap = () => {
  const [productId] = useState(6);
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
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-auto">
            {mappedProductQuestion.slice(0, 2)}
            {mappedProductQuestion.length > 2 && (
              <Accordion>
                <Accordion.Collapse eventKey="0">
                  <div>
                    {mappedProductQuestion.slice(2)}
                  </div>
                </Accordion.Collapse>
                <Accordion.Toggle
                  className="gl-button"
                  varient="link"
                  eventKey="0"
                  onClick={() => setBoolean(!boolean)}
                >
                  {boolean && 'Load More Questions'}
                  {' '}
                  {!boolean && 'See Less Questions'}
                </Accordion.Toggle>
              </Accordion>
            )}
          </div>
          <div className="col-sm-auto">
            <AddQuestion
              productQuestion={productId}
              // newQuestion={setProductQuestionObject}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuestionMap;
