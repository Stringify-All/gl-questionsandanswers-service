import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/extensions
import ProductQuestion from './productQuestion.jsx';
import getProductQuestionGet from '../api/getproductquestion';

const ProductQuestionMap = () => {
  const [productId] = useState(3);// this will be whatever product Id is being viewed
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

  return (
    <div>
      {/* eslint-disable-next-line max-len */}
      {productQuestionObject.map((questionObject) => <ProductQuestion productQuestion={questionObject} />)}
    </div>
  );
};

export default ProductQuestionMap;
