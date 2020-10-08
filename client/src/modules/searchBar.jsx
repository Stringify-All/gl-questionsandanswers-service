import React from 'react';

const SearchBar = () => {
  const nothing = null;
  return (
    <div className="container">
    <h5>Bootstrap 4 Search Bar</h5>
    <div className="row">
        <div className="col-12">
            <div class="input-group">
                <input className="form-control border-secondary py-2" type="search" value="search"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default SearchBar;
