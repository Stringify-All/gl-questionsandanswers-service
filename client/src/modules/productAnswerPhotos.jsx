import React, { useState, useEffect } from 'react';


const ProductPhotos = ({answerBody}) => {
  if (answerBody.photos !== undefined) {
    const photoValues = Object.values(answerBody.photos);
    if(photoValues.length > 0) {
      const pic = photoValues[0].url.toString();


  // if(answerBody.photos.length > 1){
  //   console.log('conditional works');
  // }

  return (
    <div>
        <img
        src = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        />

    </div>
  )
    }
  }
  return (
    <div>no photos</div>
  )
}
export default ProductPhotos;