/* eslint-disable no-unused-vars */
import React from 'react';

const SearchBar = () => {
  const nothing = null;
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="input-group">
            <input className="form-control border-secondary py-2" type="search" placeHolder="HAVE A QUESTION? SEARCH FOR ANSWERS" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" placeholder="submit" type="button">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
