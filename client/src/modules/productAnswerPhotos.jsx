import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

const ProductPhotos = ({photos}) => {
  console.log('image', photos.results);

  return (

    <div className="col-sm-3">
      <Image className="gl-photos" src={`${photos.url}/120x120`} />
    </div>

  );
};

export default ProductPhotos;
